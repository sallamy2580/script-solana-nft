# Solana-NFT-Analytics-Tools
This is a simple Typescript script that takes in a Solana NFT projects Candy Machine V1 ID and outputs the number of unique holders of a 1/1 NFT project (unique mint address).

This program uses the https://ssc-dao.genesysgo.net RPC (line 8), you can speed up the process by using your own endpoint.

## Sample Output

![Shot 1](https://imgur.com/z80lvRp.png) 

## Installing

* Libraries used: @solana/web3.js, bs58, axios
* If you do not know your candy machine ID, at the time of writting this magiceden has an open endpoint at https://api-mainnet.magiceden.io/all_collections (ctrl f search your project, property: candyMachineIds) if it is not present try searching your nft on https://explorer.solana.com/
* Paste your Candy Machine ID on line 19
* Run using: ts-node holder_distribution.ts

## Find Me

- [williamambrozic.info](https://williamambrozic.info)
- [Twitter](https://twitter.com/WilliamAmbrozic)


