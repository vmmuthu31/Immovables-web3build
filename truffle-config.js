require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const mnemonic = "6afe740856d8cb15b3cb96b085d1879abb439bf9f10252667187babd9559dc55".trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*", // Match any network id
    },
    matic: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://polygon-mumbai.gateway.pokt.network/v1/lb/a2a007d2aa9b3b52bd9c08a5`
        ),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
