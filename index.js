// https://github.com/techfort/LokiJS/wiki

var loki = require('lokijs')
var guitars = new loki('Guitars')

var makers = guitars.addCollection('makers', { indices: ['name'] });
undefined
var gibson = makers.insert( {name: 'Gibson', location: 'Nashville'} )

let g = makers.findOne('name', 'Gibson')

console.log(g)

let customFilter = (obj) => {
  return obj.name.match(/regex/)
}