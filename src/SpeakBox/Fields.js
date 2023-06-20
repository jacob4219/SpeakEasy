import React from 'react';
import Entries from './Entries';

const Fields = ({ entries, setEntries }) => {
  return (
    <div>
      <Entries field="recent" entries={entries.recent} setEntries={setEntries} />
      <Entries field="favorite" entries={entries.favorite} setEntries={setEntries} />
      <Entries field="recycle" entries={entries.recycle} setEntries={setEntries} />
      <Entries field="userGenerated" entries={entries.userGenerated} setEntries={setEntries} />
    </div>
  );
};

export default Fields;
