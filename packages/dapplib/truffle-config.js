require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom nasty flip spot chat crater remain honey give knife fortune split'; 
let testAccounts = [
"0x5a8105ab23ff83be234d117b4e273ec3a241bec693bd3184a7f7789f62d23ee0",
"0xb87b149a77730f4266f0527aac148bfb4aa34de9caa6701821ead18be894c3fd",
"0xf32f252dac957425458d53810b4bd94c0b5d6c9568df1eeb38eda88642ad9a48",
"0x7f44c0701bc67c8beaa4586475b75db9e61ca117109aa8979d265d3073075f6f",
"0x4a7b0f3cf45118dde6395f9d021ad54306ce2adf645427c244ef4e16eedff817",
"0x6f12ebe9270811aead4e2094fd895b179dec479305a342d6541cca9109cc1cf0",
"0xb70b4b9c757d5a66641c7cbc9f302dd0bd3fd97e3a697e2d5e6e8a6ff26a1861",
"0x5cd22b06d6be05bf3d1c87a34e9d5f1c2f0de862b5a631b57cad5c4e1275250b",
"0x654399d188238a096995485983bc4af9ac7a9b5594f82cad3464dad32f49d15f",
"0x7a68bb1df49103b81becb05929735606b6e16d3b39bb84796fa18077298f0d05"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

