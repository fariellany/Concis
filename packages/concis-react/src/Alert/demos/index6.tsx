import React from 'react';
import Alert from '..';

export default function index1() {
  const margin = { margin: '15px 0' };
  return (
    <div>
      <Alert type="info" content="Here is an info text" style={margin} showIcon={false} />
      <Alert type="success" content="Here is an success text" style={margin} showIcon={false} />
      <Alert type="warning" content="Here is an warning text" style={margin} showIcon={false} />
      <Alert type="error" content="Here is an error text" style={margin} showIcon={false} />
    </div>
  );
}
