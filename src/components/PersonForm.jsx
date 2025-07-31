import { useRef, useState } from "react";

export default function PersonForm({ addPerson }) {
  const nameRef = useRef();
  const paidRef = useRef();
  const [time, setTime] = useState("");

  const handleAdd = () => {
    const name = nameRef.current.value.trim();
    const paid = parseFloat(paidRef.current.value);
    if (name && !isNaN(paid) && time) {
      addPerson(name, paid, time);
      nameRef.current.value = '';
      paidRef.current.value = '';
      setTime('');
    } else {
      alert("Please enter name, amount paid, and time.");
    }
  };

  return (
    <div className="card person-form-card">
      <h2>Add Person</h2>
      <div className="input-group">
        <input ref={nameRef} type="text" placeholder="Name" />
        <input ref={paidRef} type="number" placeholder="Amount Paid" />
        <input
          type="time"
          value={time}
          onChange={e => setTime(e.target.value)}
          style={{ maxWidth: "120px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}
