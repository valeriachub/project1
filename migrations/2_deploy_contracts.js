var VCoin = artifacts.require("./VCoin.sol");
var General = artifacts.require("./General.sol");

module.exports = function(deployer) {
  deployer.deploy(VCoin, 10000, "VCoin");
};

module.exports = function(deployer) {
  deployer.deploy(General);
};
