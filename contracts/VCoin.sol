pragma solidity ^0.4.8;

import "./General.sol";

contract VCoin {

    mapping (address => uint256) public balanceOf;

    string public name;
    uint256 public totalSupply;

    event Transfer(address indexed from, address indexed to, uint256 value);

    function VCoin(uint256 initialSupply, string tokenName) public{
        balanceOf[msg.sender] = initialSupply;
        totalSupply = initialSupply;
        name = tokenName;
    }

    function transfer(address _to, uint256 _value) public{
        require(balanceOf[msg.sender] > _value) ;
        require(balanceOf[_to] + _value > balanceOf[_to]);

        balanceOf[msg.sender] -= _value;
        balanceOf[_to] += _value;
         Transfer(msg.sender, _to, _value);
    }

    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        require(balanceOf[_from] > _value);
        require(balanceOf[_to] + _value > balanceOf[_to]);
        balanceOf[_from] -= _value;
        balanceOf[_to] += _value;

         Transfer(_from, _to, _value);
        return true;
    }
}






