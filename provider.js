require('dotenv').config();
const { ethers } = require('ethers');
const provider = new ethers.providers.JsonRpcProvider(process.env.RPC);
//const signer = new ethers.Wallet(process.env.PRIVATEKEY, provider);

module.exports.provider = provider;
//module.exports.signer = signer;
