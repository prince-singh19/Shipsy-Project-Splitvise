import { FaArrowUp, FaArrowDown, FaClock } from "react-icons/fa";

export default function PersonList({ persons, perPerson, onDelete }) {
  return (
    <div className="card">
      <h2>Travellers</h2>
      {persons.length === 0 ? (
        <p className="empty-text">No persons added yet.</p>
      ) : (
        persons.map(p => {
          const balance = p.paid - perPerson;
          const isGet = balance > 0;
          return (
            <div key={p.id} className="person-fancy-row">
              <div className="person-fancy-avatar">{p.name[0]?.toUpperCase()}</div>
              <div className="person-fancy-info">
                <div className="person-fancy-head">
                  <span className="person-fancy-name">{p.name}</span>
                  <span className={`person-status ${isGet ? "get" : "pay"}`}>
                    {isGet ? (
                      <>
                        <FaArrowUp /> Gets ₹{balance.toFixed(2)}
                      </>
                    ) : (
                      <>
                        <FaArrowDown /> Pays ₹{(-balance).toFixed(2)}
                      </>
                    )}
                  </span>
                </div>

                <div className="person-fancy-meta" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span className="person-fancy-paid">Spent: ₹{p.paid.toFixed(2)}</span>
                  <span className="person-time">
                    <FaClock style={{ marginRight: 4 }} />
                    {p.time}
                  </span>
                </div>
              </div>
              <button onClick={() => onDelete(p.id)} className="delete-btn">×</button>
            </div>
          );
        })
      )}
    </div>
  );
}
