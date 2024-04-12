import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export const ListPage: FunctionComponent = () => {
  return (
    <div>
      <h1>Available demos</h1>
      <ul>
        <li>
          <Link to="/demo/xor">XOR</Link>
        </li>
      </ul>
    </div>
  );
};
