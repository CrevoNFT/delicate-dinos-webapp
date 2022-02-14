// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract DelicateDinos {
    mapping(address => bool) whitelisted;

    event Mint(address indexed _to, uint256 _tokenId);

    constructor() {}

    string public name = "Delicate Dinos";


    function mint(address addr) public {
        require(whitelisted[addr], 'not whitelisted');
        emit Mint(addr, 1);
    }
}
