const os = require('os')

//arquitectura del procesador
console.log(os.arch())

//Sistema operativo del equipo
console.log(os.platform())

//Nucleos del procesador
console.log(os.cpus())

//Errores y señales del sistema
console.log(os.constants)

//Memoria Ram Disponible
console.log(os.freemem())

const SIZE = 1024

const kb = (bytes) => {
	return bytes / SIZE
}
const mb = (bytes) => {
	return kb(bytes) / SIZE
}
const gb = (bytes) => {
	return mb(bytes) / SIZE
}

console.log(`Memoria RAM Disponible: ${gb(os.freemem())} GB`)

//Memoria Ram Total
console.log(os.totalmem())

console.log(`Memoria RAM total del equipo: ${gb(os.totalmem())} GB`)

//Directorio raiz del usuario
console.log(os.homedir())

//Directorio para archivos temporales
console.log(os.tmpdir())

//Hostname de el equipo
console.log(os.hostname())

//Interfaz de red
console.log(os.networkInterfaces())
