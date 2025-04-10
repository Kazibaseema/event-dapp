import logo from './logo.svg';
import { HashRouter as Router } from 'react-router-dom';


import './App.css';

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Header from './components/Header';
import CreateEvent from './components/CreateEvent';
import BuyTicket from './components/BuyTicket';
import TransferTicket from './components/TransferTicket';
import VerifyTicket from './components/VerifyTicket';

function App() {
  const [account, setAccount] = useState("");
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      const ethProvider = new ethers.BrowserProvider(window.ethereum);
      const signer = await ethProvider.getSigner();
      const userAddress = await signer.getAddress();
      setAccount(userAddress);
      setProvider(ethProvider);
    };
    connectWallet();
  }, []);

  return (
    <div>
      <Header account={account} />
      <CreateEvent provider={provider} />
      <BuyTicket provider={provider} />
      <TransferTicket provider={provider} />
      <VerifyTicket provider={provider} />
    </div>
  );
}

export default App;
