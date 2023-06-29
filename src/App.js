import React from 'react';
import './styles.css';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';

import GdriveComponent from './GdriveComponent';
import QueryComponent from './QueryComponent';

Amplify.configure(awsExports);

function App({ signOut, user }) {
  return (
    <div className="container">
      <GdriveComponent />
      <QueryComponent />
      <br />
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);