//William Ambrozic 2022
//Code adapted from https://solanacookbook.com/references/nfts.html#candy-machine-v1

//TODO better error handling

import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import axios from "axios"
import * as fs from 'fs';

const connection = new Connection("https://ssc-dao.genesysgo.net");
const MAX_NAME_LENGTH = 32;
const MAX_URI_LENGTH = 200;
const MAX_SYMBOL_LENGTH = 10;
const MAX_CREATOR_LEN = 32 + 1 + 1;
const MAX_CREATOR_LIMIT = 5;
const MAX_DATA_SIZE = 4 + MAX_NAME_LENGTH + 4 + MAX_SYMBOL_LENGTH + 4 + MAX_URI_LENGTH + 2 + 1 + 4 + MAX_CREATOR_LIMIT * MAX_CREATOR_LEN;
const MAX_METADATA_LEN = 1 + 32 + 32 + MAX_DATA_SIZE + 1 + 1 + 9 + 172;
const CREATOR_mintAddrAY_START = 1 + 32 + 32 + 4 + MAX_NAME_LENGTH + 4 + MAX_URI_LENGTH + 4 + MAX_SYMBOL_LENGTH + 2 + 1 + 4;

const TOKEN_METADATA_PROGRAM = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');
const candyMachineId = new PublicKey('ENTER-YOUR-ID-HERE');

const getMintAddresses = async (firstCreatorAddress: PublicKey) => {
  const metadataAccounts = await connection.getProgramAccounts(
    TOKEN_METADATA_PROGRAM,
    {
      // The mint address is located at byte 33 and lasts for 32 bytes.
      dataSlice: { offset: 33, length: 32 },

      filters: [
        // Only get Metadata accounts.
        { dataSize: MAX_METADATA_LEN },

        // Filter using the first creator.
        {
          memcmp: {
            offset: CREATOR_mintAddrAY_START,
            bytes: firstCreatorAddress.toBase58(),
          },
        },
      ],
    },
  );

  return metadataAccounts.map((metadataAccountInfo) => (
    bs58.encode(metadataAccountInfo.account.data)
  ));
};

(async () => {
   console.log("Fetching Mint Addresses (this may take a few minutes, sit back)");

   //Getting mint addresses from candy machine ID
   let mintAddr = await getMintAddresses(candyMachineId);
   let mintLen = mintAddr.length;
   let errorAddr = [];

   console.log("Found " + mintLen + " mint addresses");

   //Creating images folder in current directory
   if (!fs.existsSync("./images")){
     fs.mkdirSync("./images");
   }

  //Looping through each mint ownerAddress
  for (let i = 0; i < mintLen; i++) {
     //Fetching owners by mint ownerAddress
     try {
       const metadataPDA = await Metadata.getPDA(new PublicKey(mintAddr[i]));
       const tokenMetadata = await Metadata.load(connection, metadataPDA);
       const result = await axios.get(tokenMetadata.data.data.uri)
       const url = result.data.properties.files[0].uri;
       const name = tokenMetadata.data.data.name
       const symbol = tokenMetadata.data.data.symbol;

       //Creating new directory in images with the project symbol (Ex. Solana Monkey Business -> SMB)
       let dir = "./images/" + symbol;

       if (i == 0 && !fs.existsSync(dir)){
         fs.mkdirSync(dir);
       }

       //Output cuurrent download
       console.log("(" + (i+1) + "/" + mintLen + ") DOWNLOADING: " + name + " to " + dir );

       //Getting image type
       let type = result.data.properties.files[0].type;

      //Downloading image
      axios({
        method: "get",
        url: url,
        responseType: "stream"
      }).then(function (response) {
        response.data.pipe(fs.createWriteStream(dir + "/" + mintAddr[i] + "." + type.substring(type.indexOf('/') + 1)));
      });
    } catch(error) {
      console.log("(" + (i+1) + "/" + mintLen + ") DOWNLOADING: " + "ERROR SKIPPING");
      errorAddr.push(mintAddr[i]);
  }
  }
  if (errorAddr.length > 0) {
    console.log("There were errors with " + errorAddr.length + " jpgs");
    console.log("Mint addresses not downloaded: ");
    console.log(errorAddr);

  } else {
    console.log("\nFiles downloaded to ./images/ with no errors :)");
  }
})()
