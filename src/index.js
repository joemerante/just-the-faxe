import loki from 'lokijs';
import { guitarMakers } from './seeds.js';

let db = new loki('Guitars');
let makers = db.addCollection('makers', { indices: ['name'] });

if (guitarMakers && guitarMakers.length) {
  guitarMakers.forEach( maker => {
    makers.insert(maker);
  });
}

let addItem = (list = null, txt = "Nothing to see here...") => {
  const ul = list ? list : document.createElement('ul');
  let li = document.createElement('li');
  li.innerHTML = txt;
  ul.appendChild(li);
  return list;
}

function tableComponent() {
  const element = document.createElement('div');
  const list = document.createElement('ul');
  const makers = db.getCollection('makers');

  if (!makers) {
    addItem(list);
  } else {
    makers.data.forEach(obj => {
      addItem(list, obj.name);
    });
  }

  element.appendChild(list);
  return element;
}

document.body.appendChild(tableComponent(makers));
