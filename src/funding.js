//直接获取区块链上的Funding的智能合约
import web3 from './web3'; //装好了 用户provider的web3
const address = '';
const abi = [];
const funding = new web3.eth.Funding(abi, address);//创建合约实例给App，App里去调用合约的方法
export default funding;