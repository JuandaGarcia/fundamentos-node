const http = require('http')

const router = (req, res) => {
	console.log('Nueva Peticion')
	console.log(req.url)
	switch (req.url) {
		case '/hola':
			res.write('Hola, que tal')
			res.end()
			break
		default:
			res.write('404')
			res.end()
			break
	}
	res.writeHead(201, { 'Content-Type': 'text/plane' })
	res.write('<h1>Hola mundo</h1>')
	res.end()
}

http.createServer(router).listen(3000)

console.log('Escuchando HTTP en el puerto 3000')
