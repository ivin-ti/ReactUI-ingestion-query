import React, { useState } from 'react';
import './styles.css';

import {
  GdriveForm,
  QueryForm,
 } from './ui-components';
 
 import {TextField } from '@aws-amplify/ui-react';

// Form component for question and answer
function QueryComponent() {
  const [answer, setAnswer] = useState('');

  return (
    <div>
      <QueryForm
    onSubmit={async (fields) => {
      const url = `https://query.api.com/${fields.Field0}`;
      try {
        const response = await fetch(url);
      } catch (error) {
        console.log('Error with query:', error);
      }
      console.log(fields.Field0)
      setAnswer(fields.Field0);
  }}/>
    <TextField label="Query Answer" isReadOnly={true} value={answer}/>
    </div>
  );
}

function Gdrivecomponent() {
  return (
    <GdriveForm
    onSubmit={async (fields) => {
        const url = `https://ingestion.api.com/${fields.Field0}`;
        try {
          const response = await fetch(url);
        } catch (error) {
          console.log('Error with ingestion:', error);
        }
    }}/>
  );
}

// Main App component
function App() {
  return (
    <div className="container">
      <Gdrivecomponent />
      <QueryComponent />
    </div>
  );
}

export default App;
