# Solana-NFT-Analytics-Tools
A collection of scripts written in typescript for NFT analysis on the Solana blockchain.

These scripts use the https://ssc-dao.genesysgo.net RPC, you can speed up the process by using your own endpoint.

## Contents
- [Holder Distribution](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Holder-Distribution)  
- [Running the Scripts](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Installing](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running-the-Scripts) 
  - [Finding your Candy Machine ID](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Finding-your-Candy-Machine-ID) 
  - [Running](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#Running) 
- [Find Me](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#find-me-)


## Holder Distribution

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

Takes in a Solana NFT projects Candy Machine V1 ID and outputs the number of unique holders of a 1/1 NFT project (unique mint address) along with distribution information.

### Sample Output

![Shot 1](https://imgur.com/x9ohJCu.png) 

## Running the Scripts

[[Back to contents]](https://github.com/WilliamAmbrozic/Solana-NFT-Analytics-Tools#contents)

### Installing

* Libraries used: @solana/web3.js, bs58, axios

### Finding your Candy Machine ID

* If you do not know your candy machine ID, at the time of writting this magiceden has an open endpoint at https://api-mainnet.magiceden.io/all_collections (ctrl f search your project, property: candyMachineIds) if it is not present try searching your nft on https://explorer.solana.com/ by its mint address. The ID is often a signature address in the very first transaction.

### Running 
* Paste your Candy Machine ID at the top portion of the scripts that says ENTER-YOUR-ID-HERE
* Run using: ts-node SCRIPT_NAME_HERE

## Find Me

- [williamambrozic.info](https://williamambrozic.info)
- [Twitter](https://twitter.com/WilliamAmbrozic)


