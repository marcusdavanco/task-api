import http from 'node:http'

const server = http.createServer((req, res) => {
	const { method, url } = req

	if (method === 'GET' && url === '/tasks'){
		return res.end('Listagem de tarefas\n');
	}

	if (method === 'POST' && url === '/tasks'){
		return res.end('Criação de tarefa\n');
	}

})

server.listen(3333)
