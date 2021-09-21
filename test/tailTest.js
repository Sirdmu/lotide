const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(tail([]),);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);