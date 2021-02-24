var resemble = require('./resemblejs/resemble.js');
import axios from "axios"
import * as fs from 'fs';
import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
import bs58 from 'bs58';
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';

const connection = new Connection("https://holy-delicate-smoke.solana-mainnet.quiknode.pro/5524fc604da3612d50fa48df9a206fc357cb78e3/");
const MAX_NAME_LENGTH = 32;
const MAX_URI_LENGTH = 200;
const MAX_SYMBOL_LENGTH = 10;
const MAX_CREATOR_LEN = 32 + 1 + 1;
const MAX_CREATOR_LIMIT = 5;
const MAX_DATA_SIZE = 4 + MAX_NAME_LENGTH + 4 + MAX_SYMBOL_LENGTH + 4 + MAX_URI_LENGTH + 2 + 1 + 4 + MAX_CREATOR_LIMIT * MAX_CREATOR_LEN;
const MAX_METADATA_LEN = 1 + 32 + 32 + MAX_DATA_SIZE + 1 + 1 + 9 + 172;
const CREATOR_mintAddrAY_START = 1 + 32 + 32 + 4 + MAX_NAME_LENGTH + 4 + MAX_URI_LENGTH + 4 + MAX_SYMBOL_LENGTH + 2 + 1 + 4;

const fileName = 'ENTER-FILENAME-HERE';
const candyMachineId = new PublicKey('ENTER-YOUR-ID-HERE');
const TOKEN_METADATA_PROGRAM = new PublicKey('metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s');

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


console.log("Fetching Mint Addresses (this may take a few minutes, sit back)");

(async () => {
  let file = fs.readFileSync(fileName);

  let mintAddr = await getMintAddresses(candyMachineId);
  let mintLen = mintAddr.length;

  let lowest_score = 101;
  let index = 0;

  for (let i = 0; i < mintLen; i++) {
    try {

  const metadataPDA = await Metadata.getPDA(new PublicKey(mintAddr[i]));
  const tokenMetadata = await Metadata.load(connection, metadataPDA);
  const result = await axios.get(tokenMetadata.data.data.uri)

/** further filtering is needed
  if (result.data.attributes[0].value != "Abstract") {
      continue;
  }
  **/

  let url = result.data.image;

  await axios({
    method: "get",
    url: url,
    responseType: "arraybuffer"
  }).then(function (response) {
    var diff = resemble(file).compareTo(response.data).ignoreColors().onComplete(function(data:any){
        if (data.rawMisMatchPercentage < lowest_score) {
          lowest_score = data.rawMisMatchPercentage;
          index = i;
        }
        console.log("(" + (i+1) + "/" + mintLen + ") Checking: " + mintAddr[i] + " -> " + (Math.round(((100 - data.rawMisMatchPercentage) + Number.EPSILON) * 100) / 100) + "% Similarity");
    });
  });

  if (lowest_score == 0) {
    console.log("Found a perfect match");
    break;
  }
} catch (error) {
  console.log("(" + (i+1) + "/" + mintLen + ") Error on " + mintAddr[i]);
}
}
console.log("\n Most likely NFT mint address: " + mintAddr[index]);

})()
