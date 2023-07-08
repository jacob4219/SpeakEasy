import React from 'react';
import Entry from './Entry';

const Field = ({ title, entries, setEntries, field }) => {
  return (
    <div>
      <h3>{title}</h3>
      {entries.length > 0 ? (
        entries.map(entry => 
          <Entry key={entry.id} entry={entry} setEntries={setEntries} field={field} />
        )
      ) : (
        <p>No entries available.</p>
      )}
    </div>
  );
};

export default Field;