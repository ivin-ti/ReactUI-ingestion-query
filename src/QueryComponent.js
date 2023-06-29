import React, { useState } from 'react';
import { QueryForm } from './ui-components';
import { TextField } from '@aws-amplify/ui-react';

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
          console.log(fields.Field0);
          setAnswer(fields.Field0);
        }}
      />
      <TextField label="Query Answer" isReadOnly={true} value={answer} />
    </div>
  );
}

export default QueryComponent;
