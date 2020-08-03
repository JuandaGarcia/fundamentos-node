const FileSystem = require('fs')
const stream = require('stream')
const util = require('util')

let data = ''

//Lectura
let readableStream = FileSystem.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8')

readableStream.on('data', (chunk) => {
	data += chunk
})

readableStream.on('end', () => {
	console.log(data)
})

//Escritura
process.stdout.write('Hola')
process.stdout.write('que')
process.stdout.write('tal')

const Transform = stream.Transform

function Mayus() {
	Transform.call(this)
}

util.inherits(Mayus, Transform)

Mayus.prototype._transform = function (chunk, codif, cb) {
	chunkMayus = chunk.toString().toUpperCase()
	this.push(chunkMayus)
	cb()
}

let mayus = new Mayus()

readableStream.pipe(mayus).pipe(process.stdout)
