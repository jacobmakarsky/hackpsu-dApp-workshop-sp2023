// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/*
  _____                    _____ _        _          _____ _   _                           
 |  __ \                  / ____| |      | |        / ____| | (_)                          
 | |__) |__ _ __  _ __   | (___ | |_ __ _| |_ ___  | (___ | |_ _ _ __ ___  _ __ ___  _   _ 
 |  ___/ _ \ '_ \| '_ \   \___ \| __/ _` | __/ _ \  \___ \| __| | '_ ` _ \| '_ ` _ \| | | |
 | |  |  __/ | | | | | |  ____) | || (_| | ||  __/  ____) | |_| | | | | | | | | | | | |_| |
 |_|   \___|_| |_|_| |_| |_____/ \__\__,_|\__\___| |_____/ \__|_|_| |_| |_|_| |_| |_|\__, |
                                                                                      __/ |
                                                                                     |___/ 
*/

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LionCash is ERC20 {
    // automatically mint 100,000 tokens to the contract creator
    constructor() ERC20("LionCash Token", "PSU") {
        _mint(msg.sender, 100000 * 10**18); // 100,000 tokens to the 18th decimal place
    }

    // allow infinite printing of lioncash to the transaction sender
    function printLionCash(uint256 amount) public {
        _mint(msg.sender, amount);
    }
}
