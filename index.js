const ethers = require('ethers');
const { provider, signer } = require('./provider');
const { bot, chatId } = require('./tele_bot');

const erc20_abi = require('./abi/erc20.json');
