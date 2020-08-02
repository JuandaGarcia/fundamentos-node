const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

readFile('./files/olakase.txt')
	.then((file) => {
		// 😎 do something 😎
	})
	.catch((e) => {
		console.error('🔥fire fire fire 🔥')
	})

// o

async function foo() {
	try {
		const file = await readFile('./files/olakase.txt')
		console.log('🥺🥺🥺')
	} catch (e) {
		console.error('🔥🔥🔥')
	}
}
