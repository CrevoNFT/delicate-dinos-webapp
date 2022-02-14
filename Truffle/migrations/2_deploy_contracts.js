const ConvertLib = artifacts.require("ConvertLib");
const DelicateDinos = artifacts.require("DelicateDinos");
const DelicateDinosToken = artifacts.require("DelicateDinosToken");

module.exports = function (deployer) {
  deployer.deploy(ConvertLib);
  deployer.deploy(DelicateDinos);
  deployer.link(ConvertLib, DelicateDinosToken);
  deployer.deploy(DelicateDinosToken);
};
