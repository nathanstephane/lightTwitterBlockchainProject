
import React from "react"
import './App.css';
import {useState, useEffect} from "react";

import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widget";

function App() {
  const [currentAccount, setCurrentAccount] = useState('');
  //To Check if the user is connected to the right network
  const [correctNetwork, setCorrectNetwork] = useState(false)

  //Metamask button call
  const connectWallet = async() => {
    try {
      const {ethereum} = window
      if(!ethereum){console.log('Metamask account not detected')
      return;
    }

    let chainId = await ethereum.request({method: 'eth_chainId'});
    const rinkebyChainId = '0x4';

    if(chainId !== rinkebyChainId){
      alert('Please connect to the Rinkeby Test network');
      setCorrectNetwork(false);
      return;
    }else{
      setCorrectNetwork(true);
    }

    const accounts = await ethereum.request({method: 'eth_requestAccounts'})
    console.log("Account Found", accounts[0]);
    setCurrentAccount(accounts[0])
    } catch (error) {
      console.log("Unable to connect to metamask because: ", error);
    }
  }

  const checkCorrectNetwork = async () => {
    const { ethereum } = window
    let chainId = await ethereum.request({ method: 'eth_chainId' })
    console.log('Connected to chain:' + chainId)

    const rinkebyChainId = '0x4'

    if (chainId !== rinkebyChainId) {
      setCorrectNetwork(false)
    } else {
      setCorrectNetwork(true)
    }
  }

  useEffect(()=>{connectWallet();
    checkCorrectNetwork();  });
  
  return (
    
    <div class="container">
    {currentAccount === '' ? (
      <button
      class='button'
      onClick={connectWallet}
      >
       Enable Metamask
      </button>
      ) : correctNetwork ? (
        <div className="app">
         <Sidebar />
         <Feed />
         {/* <Widgets />  */}
        </div>
      ) : (
      <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
      <div>----------------------------------------</div>
      <div>Please connect to the Rinkeby Testnet</div>
      <div>and reload the page</div>
      <div>----------------------------------------</div>
      </div>
    )}
    </div>

  );
}

export default App;
