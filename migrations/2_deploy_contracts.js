var VCoin = artifacts.require("./contracts/VCoin.sol");
var General = artifacts.require("./contracts/General.sol");

module.exports = function (deployer) {
  deployer.deploy(VCoin, 10000, "VCoin")
    .then (function () {
      return deployer.deploy(General);
    });
}

