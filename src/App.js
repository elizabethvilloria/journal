import React, { useState } from 'react';
import './App.css';

function App() {
  const [entry, setEntry] = useState('');
  const [mood, setMood] = useState('');

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
      <button>Save Entry</button>
    </div>
  );
}

export default App;
