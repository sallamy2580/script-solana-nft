# Solana-NFT-Analytics-Tools
A collection of scripts written in typescript for NFT analysis on the Solana blockchain.

These scripts use the https://ssc-dao.genesysgo.net RPC, you can speed up the process by using your own endpoint.

## Contents
- [Holder Distribution](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Holder-Distribution)  
- [Batch Download an NFT Project's Image Files (JPG Scraper)](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#JPG-Scraper)  
- [Running the Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Installing](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Running](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running) 
  - [Finding your Candy Machine ID](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Finding-your-Candy-Machine-ID) 
- [Find Me](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#find-me-)


## Holder Distribution

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**holder_distribution.ts**

Outputs the number of unique holders of a 1/1 NFT project (unique mint address) along with distribution information.

### Sample Output

![Shot 1](https://imgur.com/x9ohJCu.png) 

## JPG Scraper

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**jpg_scraper.ts**

Scrapes all NFT image files from the metadata uri of each and then downloads them in a folder (NFT symbol named) under ./images.

### Sample Output

![Shot 2](https://imgur.com/sioIRuF.png)

## Running the Scripts

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

### Installing

* Libraries used: @solana/web3.js, @metaplex-foundation, bs58, axios

### Running 
* Paste your Candy Machine ID at the top portion of the scripts that says ENTER-YOUR-ID-HERE
* Run using: ts-node SCRIPT_NAME_HERE

### Finding your Candy Machine ID

**id_finder.ts**

The script above will prompt the user for a mint address of one of the NFT's in the desired collection. A simple way of retrieving a mint ID from a collection is the search the project on https://magiceden.io and click on one of the listings. A mint ID will be present after the /item-details/MINT_ID as seen below.

![Shot 3](https://imgur.com/Gfa6wkz.png)

* If you do not know your candy machine ID, at the time of writting this, magiceden has an open endpoint at https://api-mainnet.magiceden.io/all_collections (ctrl f search your project, property: candyMachineIds). 
* If your project is not present with MagicEden and the script is no help try searching your nft on https://explorer.solana.com/ by its mint address. The ID should be a signature address in the very first transaction.

## Find Me

- [williamambrozic.info](https://williamambrozic.info)
- [Twitter](https://twitter.com/WilliamAmbrozic)


