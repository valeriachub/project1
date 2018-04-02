pragma solidity ^0.4.8;

contract General {

    function General() public {}

    function showBlockNum() view public returns (uint256){
        return block.number;
    }

    function showMyEth() view public returns (uint256){
        return msg.sender.balance;
    }
}






