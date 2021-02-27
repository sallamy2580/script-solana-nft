# Solana NFT Scripts
A collection of scripts written in typescript for NFT analysis on the Solana blockchain.

These scripts use the https://ssc-dao.genesysgo.net RPC, you can speed up the process by using your own endpoint.

## Contents
- [Preface](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Preface)  
  - [Manual Exploring](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Preface)
- [Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Scripts)  
  - [Holder Distribution](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Holder-Distribution)  
  - [Batch Download NFT's (JPG Scraper)](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#JPG-Scraper)  
  - [Reverse Image Search](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#reverse-image-search)  
- [Manual Exploring (Utilizing the Mint Address)](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Manual-Exploring)  
- [Running the Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Installing](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Running](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running) 
  - [Finding your Candy Machine ID](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Finding-your-Candy-Machine-ID) 
- [Find Me](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#find-me-)
- [Donate](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#donate-some-sol)

## Preface

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

### Manual Exploring

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Like most other crytocurrencies Solana relies on a public ledger of information like transactions and digital ownership (at its core this is all Solana is). It is this public ledger which the scripts below query. Websites such as https://https://explorer.solana.com/ offer a great user interface for exploring the blockchain; however, as of writting do not provide in-depth tools like that given in this repo. 

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;That being said the Scripts in this repo often output data such as an NFT's mint address. Say you wanted to know the wallet address of an individual who owns a specific NFT you have a digital copy of. In this case one can use the reverse image search tool, get the mint address, and then go to (in the case of SOLGods #6435) https://explorer.solana.com/address/2PVRXbZwYzAeXHAQtDWDJX4T7GVxohXKtfc8SkFg7UJm (mint address after /address/). It is here where a user can understand more about a given NFT. This includes the owning wallet, transaction history, the NFT's metadata, etc.
  
![Shot 2](https://imgur.com/C6eT4NP.png)

## Scripts

## Holder Distribution

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**holder_distribution.ts**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outputs the number of unique holders of a 1/1 NFT project (unique mint address) along with distribution information.

### Sample Output

![Shot 1](https://imgur.com/x9ohJCu.png) 

## JPG Scraper

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**jpg_scraper.ts**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scrapes all NFT image files from the metadata uri of each and then downloads them in a folder (NFT symbol named) under ./images.

### Sample Output

![Shot 2](https://imgur.com/sioIRuF.png)

## Reverse Image Search

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

**reverse_image_search.ts**

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Reverse image search a given NFT image. Place the desired image where the script and the folder ./resemblejs are located. Paste in the projects Candy Machine ID and image file name at the start of the script. This program will output the most visually similar NFT image in the given collection.

### Sample Output

![Shot 2](https://imgur.com/KqykRZe.png)

### Installing

* Libraries used: @solana/web3.js, @metaplex-foundation, bs58, axios, resemblejs

### Running 
* Paste your Candy Machine ID at the top portion of the scripts that says ENTER-YOUR-ID-HERE
* Run using: ts-node SCRIPT_NAME_HERE

### Finding your Candy Machine ID

**id_finder.ts**

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

