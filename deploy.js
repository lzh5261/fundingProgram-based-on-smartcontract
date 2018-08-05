//部署智能合约到真实的rankeby网络
let Web3 = require('web3');
let {interface,bytecode} = require('./compile');
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "close crane hobby quote direct outdoor tonight use divide marine very delay";
const provider = new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/80184c90adb743bba35cbf5c96a855e2");
let web3 = new Web3(provider);

deploy = async () => {
    let accounts = await web3.eth.getAccounts();//获取目前网页上钱包的账户
    console.log(accounts[0]);//0xA4e637a5B83985fe6F7D59f7FC85605BCdbbCaFC
    let result = await new web3.eth.Contract(JSON.parse(interface))//部署合约
        .deploy({
            data:bytecode
        }).send({
            from:accounts[0],
            gas:'3000000'
        });
    console.log('address:'+result.options.address);
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    console.log('interface:'+interface);
};

deploy();