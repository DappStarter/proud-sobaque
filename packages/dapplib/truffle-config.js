require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nature tail sign strong response maze comfort install civil army genuine'; 
let testAccounts = [
"0x908a3f8ab2ec43c10e4dc5141a5c74ec9a9cb92a3d8f98b79dc5c0fc06eca241",
"0xdcb90b64e173d5f3d9c9bf2d9575a7a156d5546901acf29a427e502732fa9996",
"0x867e6c221b72e5ff7321f65910c1df0f9f3c7270451f97f7df9fab50bab3f3ca",
"0x5c97f807c85ecda93bb0c1d879651537c38e7b5bc69956f1fbfd8e8223b01d0f",
"0xa55836d463e2b470254ad5523a334d1ed3a48d1bc53d0d732a25df2f64ee86b0",
"0xd27973b7279cffb89b7b23349c75b85e462c09e20bc68812a119a9befce9060d",
"0xefe6bf67ac65dfd73a2e2ee5579528d7c5993f97af9310fd8d5a07da4e9e4c8e",
"0x3c51f3135896af8833f1b8e1ca63a0e0575291d7d1bdbc2eed8b1a71246803c3",
"0xc2623ed6fa7f16f06d619d1d0ac2884a77a379ed54ba827537eba695bc56546d",
"0x828d4b815791a1e456fcc242a478fc7eb0dec2aa9ee51b8aa5a209f40fd49ada"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
