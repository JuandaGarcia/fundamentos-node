const FileSystem = require('fs')

function leer(ruta) {
	FileSystem.readFile(ruta, (err, data) => {
		console.log(data.toString())
	})
}

leer(__dirname + '/archivo.txt')

function escribir(ruta, contenido) {
	FileSystem.writeFile(ruta, contenido, (err) => {
		if (err) {
			console.error('No se pudo escribir en el archivo')
		} else {
			console.log('Se escribio correctamente en el archivo')
		}
	})
}

escribir(__dirname + '/archivo1.txt', 'Hola Mundo')

function borrar(ruta, cb) {
	FileSystem.unlink(ruta, cb)
}

borrar(__dirname + '/archivo1.txt', console.log)
