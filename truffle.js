var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "frame banana blood law finger phrase crop talent mandate receive style october";
//var NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker")


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: function () {
        var wallet = new HDWalletProvider(MNEMONIC, ENDPOINT)
        // var nonceTracker = new NonceTrackerSubprovider()
        // wallet.engine._providers.unshift(nonceTracker)
        // nonceTracker.setEngine(wallet.engine)
        return wallet
      },
      network_id: 4,
      // gas: 2000000,   // <--- Twice as much
      // gasPrice: 10000000000,
    }
  },

  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};