import React, { useState } from "react";
import { ethers } from "ethers";
import { storageABI } from "../contractABI/storageABI";

const creatorAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

function CreateEvent({ provider }) {
  const [form, setForm] = useState({ name: "", date: "", price: "", count: "" });

  const handleCreate = async () => {
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(creatorAddress, creatorABI, signer);
    const timestamp = Math.floor(new Date(form.date).getTime() / 1000);

    await contract.createEvent(form.name, timestamp, form.price, form.count);
    alert("Event Created");
  };

  return (
    <div>
      <h2>Create Event</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="datetime-local" onChange={(e) => setForm({ ...form, date: e.target.value })} />
      <input placeholder="Price (wei)" onChange={(e) => setForm({ ...form, price: e.target.value })} />
      <input placeholder="Ticket Count" onChange={(e) => setForm({ ...form, count: e.target.value })} />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
}

export default CreateEvent;
