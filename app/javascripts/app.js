// Import the page's CSS. Webpack will know what to do with it.
import '../stylesheets/app.css'

// Import libraries we need.
import { default as Web3 } from 'web3'
import { default as contract } from 'truffle-contract'
var BigNumber = require('bignumber.js')
var Web3 = require('web3')
/*
 * When you compile and deploy your Voting contract,
 * truffle stores the abi and deployed address in a json
 * file in the build directory. We will use this information
 * to setup a Voting abstraction. We will use this abstraction
 * later to create an instance of the Voting contract.
 * Compare this against the index.js from our previous tutorial to see the difference
 * https://gist.github.com/maheshmurthy/f6e96d6b3fff4cd4fa7f892de8a1a1b4#file-index-js
 */

import v_artifacts from '../../build/contracts/VCoin.json'
import general_artifacts from '../../build/contracts/General.json'

var VCoin = contract(v_artifacts)
var General = contract(general_artifacts)

$(document).ready(function () {
  if (typeof web3 !== 'undefined') {
    console.warn('Using web3 detected from external source like Metamask')
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)
  } else {
    console.warn('No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it\'s inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  VCoin.setProvider(web3.currentProvider)
  General.setProvider(web3.currentProvider)

  General.deployed().then(function (contractInstance) {
    contractInstance.getBlockNumber.call().then(function (v) {
      $(id_block_num).html(v.toString())
    })
  })

  General.deployed().then(function (contractInstance) {
    contractInstance.showMyEth.call().then(function (v) {

      var value = new BigNumber(v, 10).mul(1).round(0, BigNumber.ROUND_DOWN).div(1000000000000000000).toString(10)
      $(id_amount).html(value.toString())
    })
  })

  VCoin.deployed().then(function (contractInstance) {
    contractInstance.totalSupply().then(function(result) {
      $(id_tocken_bal).html(result.toString())
    })
  })
})
