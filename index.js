var Cat = require ('./Cat')
var Mouse = require ('./Mouse')

var cat = new Cat();
var mouse = new Mouse('Mickey');
cat.eat(mouse);
console.log(cat);