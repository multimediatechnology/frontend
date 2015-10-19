var _ = require('lodash')

var menschen = [
  'Sebastian',
	'Josef',
	'Michael',
	'Konrad',
	'Daniel',
	'Alexander',
	'Viktoria',
	'Magdalena',
	'Vera',
	'Bernhard',
	'Stefanie',
	'Adam',
	'Ryan',
	'Nico',
	'Nico'
]

console.log(_.shuffle(menschen).slice(0, 6))

