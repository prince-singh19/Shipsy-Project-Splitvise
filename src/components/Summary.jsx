import { FaCoins, FaUserFriends, FaCashRegister } from "react-icons/fa";

export default function Summary({ persons }) {
  const total = persons.reduce((acc, p) => acc + p.paid, 0);
  const perPerson = persons.length ? total / persons.length : 0;
  const totalPersons = persons.length;

  return (
    <div className="card summary-card">
      <h2>Summary</h2>
      <div className="summary-grid">
        <div className="summary-item total-spent">
          <FaCoins size={28} color="#1e90ff" />
          <div>
            <div className="summary-label">Total Spent</div>
            <div className="summary-value">₹ {total.toFixed(2)}</div>
          </div>
        </div>

        <div className="summary-item per-person">
          <FaCashRegister size={28} color="#28a745" />
          <div>
            <div className="summary-label">Per Person</div>
            <div className="summary-value">₹ {perPerson.toFixed(2)}</div>
          </div>
        </div>

        <div className="summary-item total-persons">
          <FaUserFriends size={28} color="#ff9800" />
          <div>
            <div className="summary-label">Total Travelers</div>
            <div className="summary-value">{totalPersons}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
