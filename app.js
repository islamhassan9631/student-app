

const { number, } = require("yargs")
const yargs = require("yargs")
const stu= require("./data")
yargs.command({
    command: 'add',
    describe: 'addNotes',
    builder: {
        id: {
            describe: 'gjhjhg',
            demandOption: true,
            type: number,
        },
        name: {
            describe: 'gjhjhg',
            demandOption: true,
            type: 'string',
        },
        deg: {
            describe: 'gjhjhg',
            demandOption: true,
            type: 'array',
        },

        comm: {
            describe: 'gjhjhg',

            type: 'string',
        },

    },


    handler: (x) => {
        stu.addNote(x.id, x.name, x.deg, x.comm)
    },

})
yargs.command({
    command: 'delete',
    describe: 'addNotes',
    builder: {
        id: {
            describe: 'gjhjhg',
            demandOption: true,
            type: number,
        },
        name: {
            describe: 'gjhjhg',
            // demandOption:true,
            type: 'string',
        },
        deg: {
            describe: 'gjhjhg',

            type: 'array',
        },
        comm: {
            describe: 'gjhjhg',

            type: 'string',
        },

    }, handler: (x) => {
        stu.remove(x.id, x.name, x.deg, x.comm)
    },




})
yargs.command({
    command: 'read',
    describe: 'addNotes',
    builder: {
        id: {
            describe: 'gjhjhg',
            demandOption: true,
            type: number,
        },
        name: {
            describe: 'gjhjhg',
            // demandOption:true,
            type: 'string',
        },
        deg: {
            describe: 'gjhjhg',

            type: 'array',
        },

        comm: {
            describe: 'gjhjhg',

            type: 'string',
        },

    }, handler: (x) => {
        stu.read(x.id, x.name, x.deg, x.comm)
    },

})
yargs.command({
    command: 'list',
    describe: 'addNotes',
    builder: {
        id: {
            describe: 'gjhjhg',
            // demandOption:true,
            type: number,
        },
        name: {
            describe: 'gjhjhg',
            // demandOption:true,
            type: 'string',
        },
        deg: {
            describe: 'gjhjhg',

            type: "array",
        },
        comm: {
            describe: 'gjhjhg',

            type: 'string',
        },

    }, handler: (x) => {
        stu.list(x.id, x.name, x.deg, x.comm)
    },

})
yargs.parse()
