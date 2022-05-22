## DApp Web3

- MetaTask: Used to create accounts and play over the app;

- (Hardhat)[https://hardhat.org/]: Ethereum development environment. Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps creating a base environment to work on the project allowing us to run Solidity locally. We use it to test the smart contracts as well. The contract bootstrap was created using this tool using the following command:

```sh
npx hardhat
```

- Hardhat -> hardhat-waffle plugin to build smart contract tests using Waffle in Hardhat, taking advantage of both.

- (Alchemy)[https://www.alchemy.com/]: blockchain developer platform. Ajuda a organizar os deploys dos blockchain smart contracts de cada aplicação.

- Estou usando a rede Goerli (Goerli Network)

- Quando um contrato passa pelo deploy, um ABI (Application Binary Interface) é gerado na pasta smart-contract/artifacts/contracts/<NomeDoContrato>/<NomedoContrato>.json. Isso é a maneira padrão para interagir com os contratos dentro do ecossistema Ethereum, ambos, de fora da blockchain e para casos de interação d contrato para contrato. Esse arquivo contem todas as informações sobre uma Smart Contract específica (que foi criada). Esse arquivo deve ser disponibilizado no client.
