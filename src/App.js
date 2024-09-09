import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('journalEntries'));
    if (savedEntries) {
      setJournalEntries(savedEntries);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
  }, [journalEntries]);

  const saveEntry = () => {
    if (entry.trim() && mood) {
      const newEntry = { entry, mood, date: new Date().toLocaleDateString() };
      setJournalEntries([...journalEntries, newEntry]);
      setEntry('');
      setMood('');
    }
  };

  return (
    <div className="container">
      <h1>Daily Journal</h1>
      <textarea
        placeholder="Write your journal entry here..."
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
      />
      <select value={mood} onChange={(e) => setMood(e.target.value)}>
        <option value="" disabled>Select your mood</option>
        <option value="happy">Happy</option>
        <option value="neutral">Neutral</option>
        <option value="sad">Sad</option>
      </select>
      <button onClick={saveEntry}>Save Entry</button>

      <h2>Past Entries</h2>
      <ul>
        {journalEntries.map((entry, index) => (
          <li key={index}>
            {entry.date} - {entry.mood} - {entry.entry}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
