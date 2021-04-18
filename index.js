const { ethers } = require('ethers');
const { provider } = require('./provider');
const { bot } = require('./tele_bot');

const erc20_abi = require('./abi/erc20.json');

const App = async () => {
  bot.on('message', async (msg) => {
    console.log(msg);
  });
};

App();
