const array = [
	['Hola Mundo', 'Hola Mundo'],
	['Hola Mundo', 'Hola Mundo'],
]
const arrayObjects = [
	{ a: 'Hola Mundo', b: 'Hola Mundo' },
	{ a: 'Hola Mundo', b: 'Hola Mundo' },
]
const Objects = { a: 'Hola Mundo', b: 'Hola Mundo' }

console.table(array)
console.table(arrayObjects)
console.table(Objects)

console.group('label')
console.log('Hola Mundo')
console.log('Hola Mundo')
console.log('Hola Mundo')
console.log('Hola Mundo')
console.groupEnd()

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
