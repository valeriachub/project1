var Web3 = require('web3')

var parsedGeneral = JSON.parse('' +
  '[\n' +
  '    {\n' +
  '      "inputs": [],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "nonpayable",\n' +
  '      "type": "constructor"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": true,\n' +
  '      "inputs": [],\n' +
  '      "name": "showBlockNum",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "view",\n' +
  '      "type": "function"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": true,\n' +
  '      "inputs": [],\n' +
  '      "name": "showMyEth",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "view",\n' +
  '      "type": "function"\n' +
  '    }\n' +
  '  ]')

var parsedVCoin = JSON.parse('' +
  '[\n' +
  '    {\n' +
  '      "constant": true,\n' +
  '      "inputs": [],\n' +
  '      "name": "name",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "string"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "view",\n' +
  '      "type": "function"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": true,\n' +
  '      "inputs": [],\n' +
  '      "name": "totalSupply",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "view",\n' +
  '      "type": "function"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": true,\n' +
  '      "inputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "address"\n' +
  '        }\n' +
  '      ],\n' +
  '      "name": "balanceOf",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "view",\n' +
  '      "type": "function"\n' +
  '    },\n' +
  '    {\n' +
  '      "inputs": [\n' +
  '        {\n' +
  '          "name": "initialSupply",\n' +
  '          "type": "uint256"\n' +
  '        },\n' +
  '        {\n' +
  '          "name": "tokenName",\n' +
  '          "type": "string"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "nonpayable",\n' +
  '      "type": "constructor"\n' +
  '    },\n' +
  '    {\n' +
  '      "anonymous": false,\n' +
  '      "inputs": [\n' +
  '        {\n' +
  '          "indexed": true,\n' +
  '          "name": "from",\n' +
  '          "type": "address"\n' +
  '        },\n' +
  '        {\n' +
  '          "indexed": true,\n' +
  '          "name": "to",\n' +
  '          "type": "address"\n' +
  '        },\n' +
  '        {\n' +
  '          "indexed": false,\n' +
  '          "name": "value",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "name": "Transfer",\n' +
  '      "type": "event"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": false,\n' +
  '      "inputs": [\n' +
  '        {\n' +
  '          "name": "_to",\n' +
  '          "type": "address"\n' +
  '        },\n' +
  '        {\n' +
  '          "name": "_value",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "name": "transfer",\n' +
  '      "outputs": [],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "nonpayable",\n' +
  '      "type": "function"\n' +
  '    },\n' +
  '    {\n' +
  '      "constant": false,\n' +
  '      "inputs": [\n' +
  '        {\n' +
  '          "name": "_from",\n' +
  '          "type": "address"\n' +
  '        },\n' +
  '        {\n' +
  '          "name": "_to",\n' +
  '          "type": "address"\n' +
  '        },\n' +
  '        {\n' +
  '          "name": "_value",\n' +
  '          "type": "uint256"\n' +
  '        }\n' +
  '      ],\n' +
  '      "name": "transferFrom",\n' +
  '      "outputs": [\n' +
  '        {\n' +
  '          "name": "success",\n' +
  '          "type": "bool"\n' +
  '        }\n' +
  '      ],\n' +
  '      "payable": false,\n' +
  '      "stateMutability": "nonpayable",\n' +
  '      "type": "function"\n' +
  '    }\n' +
  '  ]')

var GeneralContract = web3.eth.contract(parsedGeneral)
var VCoinContract = web3.eth.contract(parsedVCoin)

var General = GeneralContract.at('0x3184cb286eedeaebb1df9271b0749ca469edf3c3')
var VCoin = VCoinContract.at('0xefa2aa85cb164571f05041d1667a41ae94860fd7')

console.log(General)
console.log(VCoin)

$(document).ready(function () {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider)
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  }

  // General.showMyEth(function (error, result) {
  //   if (!error) {
  //     $(id_amount).html(web3.fromWei(result).toString())
  //   } else {
  //     console.error(error)
  //   }
  // })

  web3.eth.getBalance('0x84e7F3bFc78f2Fc5d4Fe47AfdFC94A8cd3CD1CFd', function (error, result) {
    if (!error) {
      $(id_amount).html(web3.fromWei(result).toString())
    } else {
      console.error(error)
    }
  })

  VCoin.balanceOf('0x84e7F3bFc78f2Fc5d4Fe47AfdFC94A8cd3CD1CFd', function (error, result) {
    if (!error) {
      $(id_t_amount).html(result.toString())
      console.log(result)
    }
    else {
      console.error(error)
    }
  })

  General.showBlockNum(function (error, result) {
    if (!error) {
      $(id_block_num).html(result.toString())
      console.log(result)
    }
    else {
      console.error(error)
    }
  })

  VCoin.totalSupply(function (error, result) {
    if (!error) {
      $(id_tocken_bal).html(result.toString())
      console.log(result)
    }
    else {
      console.error(error)
    }
  })

})

function sendButton () {
  address = document.getElementById('address').value
  amount = document.getElementById('amount').value

  VCoin.transferFrom('0x84e7F3bFc78f2Fc5d4Fe47AfdFC94A8cd3CD1CFd', address, amount, function (error, result) {
    if (!error) {
      console.log(result)
    }
    else {
      console.error(error)
    }
  })
}

function showButton () {
  address = document.getElementById('address2').value

  VCoin.balanceOf(address, function (error, result) {
    if (!error) {
      $(id_result).html(result.toString())
      console.log(result)
    }
    else {
      console.error(error)
    }
  })
}
