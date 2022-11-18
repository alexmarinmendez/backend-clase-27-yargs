const yargs = require('yargs')
yargs.version('1.0.0')

let todos = [{ id: 1, text: 'Comprar'}, { id: 2, text: 'Ir a misa' }]

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new TODO to the list',
    builder: {
        todo: {
            describe: 'A TODO task to add to the list',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        console.log('Adding a new TODO...')
        if (argv.todo=='') return console.log('ERROR: El TODO a agregar no puede ser vacío...')
        //generar un id para el nuevo TODO
        let id
        if (todos.length === 0) id=1
        else id = todos[todos.length-1].id + 1
        todos.push({ id, text: argv.todo})
        console.log(todos)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a TODO from the list',
    handler: function() {
        console.log('Removing the TODO...')
    }
})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List all the TODO list',
    handler: function() {
        console.log('TODO things in the TODO list are...')
        console.log(todos)
    }
})

yargs.parse()