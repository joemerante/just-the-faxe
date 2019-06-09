import loki from 'lokijs';
import { guitarMakers } from './seeds.js';
import React from 'react';
import ReactDOM from 'react-dom';

let db = new loki('Guitars');
let makers = db.addCollection('makers', { indices: ['name'] });

if (guitarMakers && guitarMakers.length) {
  guitarMakers.forEach( maker => {
    makers.insert(maker);
  });
}

function Guitars() {
  const makers = db.getCollection('makers').data || ["Nothing to see here..."];
  const makerList = makers.map( (mkr) =>
    <li key={mkr.name}>{mkr.name}</li>
  )

  return (
    <ul>{makerList}</ul>
  )
}

ReactDOM.render(<Guitars />, document.getElementById('root'));
