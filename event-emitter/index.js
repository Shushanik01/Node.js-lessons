const event = require('events');

const eventEmmiter = new event.EventEmitter()

eventEmmiter.on('greet', (name)=>{
    console.log(`Hello dear ${name}`);
    
});

eventEmmiter.emit('greet', 'Shushanik');

class customEmitter extends event.EventEmitter{
    constructor(){
        super()
        this.greeting = 'Hello'
    }
    greet(name){
        this.emit('greeting', `${this.greeting}, ${name}`)
    }
}

const myEmitter = new customEmitter()
myEmitter.on('greeting', (input)=>{
    console.log(`Greeting event`, input);
    
});

myEmitter.emit('greeting', 'Shushanik')