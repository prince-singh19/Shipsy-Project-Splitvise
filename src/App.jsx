import { useState, useEffect } from 'react';
import Header from './components/Header';
import TripList from './components/TripList';
import PersonList from './components/PersonList';
import Summary from './components/Summary';
import TripForm from './components/TripForm';
import PersonForm from './components/PersonForm';
import './index.css';

export default function App() {
  const [trips, setTrips] = useState(
    localStorage.getItem("trips") ? JSON.parse(localStorage.getItem("trips")) : []
  );
  const [selectedTripId, setSelectedTripId] = useState(null);

  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  const addTrip = (name, date) => {
  setTrips(prev => [
    ...prev,
    {
      id: Date.now(),
      name,
      date, // store trip date
      persons: []
    }
  ]);
};

  const deleteTrip = (id) => {
    setTrips(prev => prev.filter(t => t.id !== id));
    if (selectedTripId === id) setSelectedTripId(null);
  };

 const addPerson = (name, paid, time) => {
  setTrips(prev =>
    prev.map(trip =>
      trip.id === selectedTripId
        ? {
            ...trip,
            persons: [
              ...trip.persons,
              { id: Date.now(), name, paid, time }
            ]
          }
        : trip
    )
  );
};


  const deletePerson = (personId) => {
    setTrips(prev =>
      prev.map(trip =>
        trip.id === selectedTripId
          ? { ...trip, persons: trip.persons.filter(p => p.id !== personId) }
          : trip
      )
    );
  };

  const currentTrip = trips.find(t => t.id === selectedTripId);

  return (
    <div className="container">
      <Header title={selectedTripId ? `${currentTrip.name} - Details` : "Splitvise - Trips"} />
      {!selectedTripId ? (
        <>
          <TripForm addTrip={addTrip} />
          <TripList trips={trips} onSelect={setSelectedTripId} onDelete={deleteTrip} />
        </>
      ) : (
        <>
          <button onClick={() => setSelectedTripId(null)} className="back-btn">← Back to Trips</button>
          <PersonForm addPerson={addPerson} />
          <PersonList
            persons={currentTrip.persons}
            perPerson={currentTrip.persons.reduce((a, b) => a + b.paid, 0) / (currentTrip.persons.length || 1)}
            onDelete={deletePerson}
          />
          <Summary persons={currentTrip.persons} />
        </>
      )}
    </div>
  );
}
