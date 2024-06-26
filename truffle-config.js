module.exports = {
  networks: {
    development: {
      quiet: true,
      host: "localhost",
      port: 8549,
      network_id: "*" // Match any network id
    }
  },
    // Configure your compilers
  compilers: {
    solc: {
        version: "0.4.24",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
      },
      // evmVersion: "byzantium"
      // }
    }
  }
};
