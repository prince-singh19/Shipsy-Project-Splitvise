export default function TripList({ trips, onSelect, onDelete }) {
  return (
    <div className="card">
      <h2>All Trips</h2>
      {trips.length === 0 ? (
        <p className="empty-text">No trips added yet.</p>
      ) : (
        trips.map(trip => (
          <div key={trip.id} className="list-item trip-list-item">
            <div onClick={() => onSelect(trip.id)} className="trip-info">
              <div className="trip-name">{trip.name}</div>
              <div className="trip-meta">
                <span className="trip-persons-count">
                  {trip.persons.length} {trip.persons.length === 1 ? "person" : "persons"}
                </span>
                {trip.date && (
                  <span className="trip-date">
                    📅 {new Date(trip.date).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>

            <button onClick={() => onDelete(trip.id)} className="delete-btn">Delete</button>
          </div>
        ))
      )}
    </div>
  );
}
