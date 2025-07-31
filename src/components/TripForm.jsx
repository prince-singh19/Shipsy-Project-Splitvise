import { useRef, useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";

export default function TripForm({ addTrip }) {
  const tripNameRef = useRef();
  const [tripDate, setTripDate] = useState("");

  const handleAdd = () => {
    const name = tripNameRef.current.value.trim();
    if (name && tripDate) {
      addTrip(name, tripDate);
      tripNameRef.current.value = '';
      setTripDate('');
    } else {
      alert("Please enter trip name and date.");
    }
  };

  return (
    <div className="card trip-form-card">
      <h2><FaPlaneDeparture style={{ color: "#2180be", marginRight: "6px" }} /> Start a New Trip</h2>
      <div className="input-group trip-form-fields">
        <input ref={tripNameRef} type="text" placeholder="e.g. Goa Vacation" />
        <input
          type="date"
          value={tripDate}
          onChange={e => setTripDate(e.target.value)}
          style={{ maxWidth: "160px" }}
        />
        <button className="trip-form-add-btn" onClick={handleAdd}>Create Trip</button>
      </div>
    </div>
  );
}
