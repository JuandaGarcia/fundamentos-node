console.time('todo')
let suma = 0

console.time('bucle')
for (let i = 0; i < 100000000; i++) {
	suma += 1
}
console.timeEnd('bucle')

let suma2 = 0

console.time('bucle 2')
for (let i = 0; i < 100000; i++) {
	suma2 += 1
}
console.timeEnd('bucle 2')

console.time('asincrona')
console.log('inicia asincrono')
asincrona().then(() => {
	console.timeEnd('asincrona')
})

console.timeEnd('todo')

function asincrona() {
	return new Promise((resolve) => {
		setTimeout(() => {
			console.log('Termina el proceso asincrono')
			resolve()
		}, 1000)
	})
}
