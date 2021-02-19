
adapted from https://solanacookbook.com/references/nfts.html#candy-machine-v1

# Solana-NFT-Unique-Holders-Checker 
This is a simple Typescript script that takes in a Solana NFT projects Candy Machine V1 ID and outputs the number of unique holders of a 1/1 NFT project (Unique Mint Address).

The program retrieves all mint addresses associated with a Candy Cane V1 ID, it then adds all owners to a set and prints the length of the set.

This program uses https://ssc-dao.genesysgo.net (line 8), you can speed up the process by using your own endpoint.

## Installing

* Libraries used: @solana/web3.js, bs58, axios
* If you do not know your candy machine ID, at the time of writting this magiceden has an open endpoint at https://api-mainnet.magiceden.io/all_collections (ctrl f search your project, property: candyMachineIds)
* Paste your Candy Machine ID on line 19
* Run using: ts-node unique_holders.ts

## Find Me

- [williamambrozic.info](https://williamambrozic.info)
- [Twitter](https://twitter.com/WilliamAmbrozic)


