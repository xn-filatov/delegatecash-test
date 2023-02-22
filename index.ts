import { DelegateCash } from "delegatecash";
import { ethers } from "ethers";

console.log("Delegate Cash Test 1")
// const dc1 = new DelegateCash() // always throws an error on start


console.log("Delegate Cash Test 2")
const rpc_url = ""
const provider = new ethers.providers.JsonRpcProvider(rpc_url, 'any');
// const dc2 = new DelegateCash(provider);// always throws an error on start
