import React, { useState } from "react";
import { ethers } from "ethers";
import { transferABI } from "../contractABI/transferABI";

const transferAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

function TransferTicket({ provider }) {
  const [eventId, setEventId] = useState("");
  const [recipient, setRecipient] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleTransfer = async () => {
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(transferAddress, transferABI, signer);

    await contract.transferTicket(eventId, quantity, recipient);
    alert("Tickets Transferred!");
  };

  return (
    <div>
      <h2>Transfer Tickets</h2>
      <input placeholder="Event ID" onChange={(e) => setEventId(e.target.value)} />
      <input placeholder="Recipient Address" onChange={(e) => setRecipient(e.target.value)} />
      <input placeholder="Quantity" onChange={(e) => setQuantity(e.target.value)} />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
}

export default TransferTicket;
