// Import the page's CSS. Webpack will know what to do with it.
import '../stylesheets/app.css'

// Import libraries we need.
import { default as contract } from 'truffle-contract'

var Web3 = require('web3')

import v_artifacts from '../../build/contracts/VCoin.json'
import general_artifacts from '../../build/contracts/General.json'

var VCoin = contract(v_artifacts)
var General = contract(general_artifacts)

$(document).ready(function () {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  VCoin.setProvider(web3.currentProvider)
  General.setProvider(web3.currentProvider)

  web3.eth.getBalance('0x84e7F3bFc78f2Fc5d4Fe47AfdFC94A8cd3CD1CFd', function (error, result) {
    if (!error) {
      $(id_amount).html(web3.fromWei(result).toString())
    } else {
      console.error(error)
    }
  })

  General.deployed().then(function (contractInstance) {
    contractInstance.showBlockNum.call().then(function (v) {
      $(id_block_num).html(v.toString())
    })
  })

  VCoin.deployed().then(function (contractInstance) {
    contractInstance.totalSupply().then(function (result) {
      $(id_tocken_bal).html(result.toString())
    })
  })

  function send() {
    // address = document.getElementById("address").value
    // console.log(address.toString());

    console.log('sdsdss')
  }

})




