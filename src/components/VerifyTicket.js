import React, { useState } from "react";
import { ethers } from "ethers";
import { verifierABI } from "../contractABI/verifierABI";

const verifierAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

function VerifyTicket({ provider }) {
  const [eventId, setEventId] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [ticketCount, setTicketCount] = useState(null);

  const handleVerify = async () => {
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(verifierAddress, verifierABI, signer);

    const count = await contract.viewUserTickets(userAddress, eventId);
    setTicketCount(count.toString());
  };

  return (
    <div>
      <h2>Verify Tickets</h2>
      <input placeholder="Event ID" onChange={(e) => setEventId(e.target.value)} />
      <input placeholder="User Address" onChange={(e) => setUserAddress(e.target.value)} />
      <button onClick={handleVerify}>Check</button>
      {ticketCount !== null && <p>Tickets owned: {ticketCount}</p>}
    </div>
  );
}

export default VerifyTicket;
