let rabbit = {};
rabbit.speak = function(line) {
    console.log(`Rabbit says: ${line}`);
}
rabbit.speak('I\'m alive');

function speak(line){
    console.log(`${this.type} rabbit says: '${line}'`);
}
let whiteRabbit = {type: 'White', speak};
let hungryRabbit = {type: 'Hungry', speak};
whiteRabbit.speak('I am late!');
hungryRabbit.speak('I would eat a carrot know!');
speak.call(hungryRabbit, 'I ate too much!');