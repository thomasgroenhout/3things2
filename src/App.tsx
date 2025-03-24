import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

function App() {
  return (
    <div>
      <h1>Hello, AWS React!</h1>
    </div>
  );
}

export default withAuthenticator(App);
