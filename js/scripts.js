// Your Scripts
console.log('Hey Browser!');

var elem = document.querySelector('.pulse');
var animation = elem.animate({
  opacity: [0.5, 1],
  transform: ['scale(0.5)', 'scale(1)'],
}, {
  direction: 'alternate',
  duration: 500,
  iterations: 3,
});

// Randomizer
var max = 7;
var randNum = Math.floor( Math.random() * max );

// Greetings
var msg0 = 'Hello!';
var msg1 = 'Holla';
var msg2 = 'Whats Up!'
var msg3 = 'Welcome!'
var msg4 = 'Hola!';
var msg5 = 'Konichiwa';
var msg6 = 'Bonjour!'
var msg7 = 'Ciao!'

// Change Greeting
$('h1 span').text( eval('msg' + randNum));