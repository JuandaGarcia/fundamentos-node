process.on('beforeExit', () => {
	console.log('El proceso va a terminar')
})

//Aqui se desconecta el event loop
process.on('exit', () => {
	console.log('El proceso termino')
})

//Permite capturar cualquier error que no fue caputurado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.
process.on('uncaughtException', (error, origen) => {
	console.log('Se nos olvido capturar un error')
	console.log(error, origen)
})

functionQueNoExiste()
