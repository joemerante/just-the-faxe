import loki from 'lokijs';

let db = new loki('Guitars');
let makers = db.addCollection('makers', { indices: ['name'] });

// TODO - move a few of thse to seeds.js
let gibson = makers.insert( {name: 'Gibson', location: 'Nashville'} )
let fender = makers.insert( {name: 'Fender', location: 'Corona'} )

// move these somewhere on the tableComponent
// let g = makers.findOne('name', 'Gibson')
// let customFilter = (obj) => {
//   return obj.name.match(/regex/)
// }

function tableComponent() {
  const element = document.createElement('div');
  const list = document.createElement('ul');
  const makers = db.getCollection('makers');

  makers.data.forEach(obj => {
    let li = document.createElement('li');
    li.innerHTML = obj.name;
    list.appendChild(li);
  });

  element.appendChild(list);

  return element;
}

document.body.appendChild(tableComponent(makers));
