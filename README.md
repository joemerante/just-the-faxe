# Just the fAxe

## Ever wonder about your favorite guitar player's set up? There might be other databases out there, but who can you trust in a world where so many [GANs](https://en.wikipedia.org/wiki/Generative_adversarial_network) are trying to change your mind?
### You need Just the fAxe.

This toy project started as a quick refresher on a few concepts and chance to work with some new libraries. Its goal is to provide a simple way to view guitars, by maker or player. The git history might be more fun than the project, for now :)

If you clone the project and run `npm start`, on localhost:8080 you should see a list of guitars from src/seeds.js. 

Coming soon! See it live at [just-the-faxe.com](just-the-faxe.com)
*(refreshing or opening the site in a new tab will clear your changes)*

Things that weren't done in the initial afternoon hacking session (PR's welcome!)
- make the list look like a nice table
- add a form to add new items
  - TDD basic validations - only alphanumeric chars in new entires, no dup's
- search, filtering, sorting of the table
- connect to a permanent data store and/or add Service Workers etc
  - rtfm [lokijs peristence adapters](https://github.com/techfort/LokiJS/wiki/LokiJS-persistence-and-adapters) or switch to a local data store that syncs with something cloud-based, etc
- add an Axe model, see how lokijs handles relationships, e.g. `{ "name" : "Telecaster", maker: maker.findOne(name: "Fender")}`
- add images (or a default image) to the Axe
- add a Player who can have multiple Axes, e.g. `{ "name" : "Jimmy Page", models: ["Double Neck SG", "Les Paul"] }`
- add Pedals and other gear for each Player
- add a js linter
- move to Gatsby.js and scale this sucker up
- [insert business model here]
- decide what to do with all the profits