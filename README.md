# Solana NFT Scripts
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A collection of scripts written in typescript for NFT analysis on the Solana blockchain.

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;These scripts use the https://ssc-dao.genesysgo.net RPC by default, you can speed up the process by using your own endpoint and placing it in the config.json file. All input goes inside the config.json file as described in detail below. These scripts may take time to run, some changes have been made to accommodate this. For example, after any script fetches a projects mint addresses a json file will be created under ./mint_addr named after the projects CandyMachine ID. This allows for the scripts to fetch as little as possible (time consuming).

## Contents
- [Preface](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Preface)  
  - [Manual Exploring](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Preface)
- [Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Scripts)  
  - [Holder Distribution](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Holder-Distribution)  
  - [Batch Download NFT's (JPG Scraper)](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#JPG-Scraper)  
  - [Reverse Image Search](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#reverse-image-search)  
- [Config](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)  
- [Running the Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Installing](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Running](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running) 
  - [Finding your Candy Machine ID](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Finding-your-Candy-Machine-ID) 
- [Find Me](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#find-me-)
- [Donate](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#donate-some-sol)

## Preface

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

### Manual Exploring

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like most other crytocurrencies Solana relies on a public information ledger mostly holding transactions and digital ownership (at its core this is all Solana is). It is this public ledger which the scripts below query. Websites such as https://https://explorer.solana.com/ offer a great user interface for exploring the blockchain; however, as of writting do not provide in-depth tools for analyzing NFT data. This project attempts to mitigate this in an opensource manner. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That being said the Scripts in this repo often output data such as an NFT's mint address. Say you wanted to know the wallet address of an individual who owns a specific NFT you have a digital copy of. In this case one can use the reverse image search tool, get the mint address, and then go to (in the case of SOLGods #6435) https://explorer.solana.com/address/2PVRXbZwYzAeXHAQtDWDJX4T7GVxohXKtfc8SkFg7UJm (mint address after /address/). It is here where a user can understand more about a given NFT. This includes the owning wallet, transaction history, the NFT's metadata, etc.
  
![Shot 2](https://imgur.com/C6eT4NP.png)

## Scripts

## Holder Distribution

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**holder_distribution.ts** 
[See Config for Input](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outputs the number of unique holders of a 1/1 NFT project (unique mint address) along with distribution information.

### Sample Output

![Shot 1](https://imgur.com/x9ohJCu.png) 

## JPG Scraper

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**jpg_scraper.ts**
[See Config for Input](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scrapes all NFT image files from the metadata uri of each and then downloads them in a folder (CandyMachine ID named) under ./images.

### Sample Output

![Shot 2](https://imgur.com/sioIRuF.png)

## Reverse Image Search

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**reverse_image_search_nft.ts**
[See Config for Input](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reverse image search a given NFT image. Place the desired image where the script and the folder ./resemblejs are located. Paste in the projects CandyMachine ID and image file name in the config file. This program will output the most visually similar NFT image in the given collection.

To speed up the process one can add attribute filters in the config file. An example is shown below. The format matches the format you would find in an NFTs uri. This filters out any NFT that does not have these attributes so the script does not have to fetch its image and compare.
```
"reverse_img_attr_filters": [
      {
        "trait_type": "Background",
        "value": "Green"
      },
      {
        "trait_type": "Eyes",
        "value": "Beads"
      }
    ]
```

### Sample Output

![Shot 2](https://imgur.com/KqykRZe.png)

## Config

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Each script requirs different input data from the config.json file. Please refer to the table below before running each script. Each cell tells you if the associated script needs the appropriate config json attribute to function.

| Script\config attr         | **RPC** | **mint_id** | **reverse_img_filename** | **reverse_img_attr_filter** |
|----------------------------|---------|-------------|--------------------------|-----------------------------|
| **get_mint_json**          | YES     | YES         | NO                       | NO                          |
| **holder_distribution**    | YES     | YES         | NO                       | NO                          |
| **id_finder**              | YES     | NO          | NO                       | NO                          |
| **jpg_scraper**            | YES     | YES         | NO                       | NO                          |
| **reverse_img_search_nft** | YES     | YES         | YES                      | YES                         |

### Installing

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

Enter your command prompt or terminal on a machine with Git & NodeJS, run the following commands:

Mac/Linux/Windows
```
git clone https://github.com/WilliamAmbrozic/Solana-NFT-Scripts.git
cd Solana-NFT-Scripts
npm install
npm install bs58
```

### Running 

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

Follow the [config requirments](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)   for each script and then run using:
```
ts-node SCRIPT_NAME_HERE
```
For example run id_finder.ts like so:
```
ts-node id_finder.ts
```

### Finding your Candy Machine ID

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**id_finder.ts**
[See Config for Input](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Config)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The script above will prompt the user for the mint address of one of the NFT's in the desired collection and attempt to retrieve its collections Candy Machine ID. A simple way of retrieving a mint ID from a collection is to search the project on https://magiceden.io and click on one of the listings. A mint ID will be present after the /item-details/ in the url as seen below.

![Shot 3](https://imgur.com/Gfa6wkz.png)

### Alternatives

* If you do not know your candy machine ID, at the time of writting this magiceden has an open endpoint at https://api-mainnet.magiceden.io/all_collections (ctrl f search your project, property: candyMachineIds). 
* If your project is not present with MagicEden and the script is no help, try searching your NFT on https://explorer.solana.com/ by its mint address. The ID should be a signature address in the very first transaction.

## Find Me

- [williamambrozic.info](https://williamambrozic.info)
- [Twitter](https://twitter.com/WilliamAmbrozic)

### Donate SOL
  * wia.sol 
  * 8vU6RfyFDk9WriVgaJohBxqtE86TLtjAR8cPWjdU6zEN

