import React from 'react';
import { GdriveForm } from './ui-components';

function GdriveComponent() {
  return (
    <GdriveForm
      onSubmit={async (fields) => {
        const url = `https://ingestion.api.com/${fields.Field0}`;
        try {
          const response = await fetch(url);
        } catch (error) {
          console.log('Error with ingestion:', error);
        }
      }}
    />
  );
}

export default GdriveComponent;
