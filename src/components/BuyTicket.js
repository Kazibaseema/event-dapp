import React, { useState } from "react";
import { ethers } from "ethers";
import { buyerABI } from "../contractABI/buyerABI";

const buyerAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

function BuyTicket({ provider }) {
  const [eventId, setEventId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pricePerTicket, setPricePerTicket] = useState(""); // Optional

  const handleBuy = async () => {
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(buyerAddress, buyerABI, signer);

    const totalCost = ethers.parseEther((pricePerTicket * quantity).toString());

    await contract.buyTicket(eventId, quantity, { value: totalCost });
    alert("Tickets Purchased!");
  };

  return (
    <div>
      <h2>Buy Ticket</h2>
      <input placeholder="Event ID" onChange={(e) => setEventId(e.target.value)} />
      <input placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <input placeholder="Price per ticket in ETH" onChange={(e) => setPricePerTicket(e.target.value)} />
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default BuyTicket;
