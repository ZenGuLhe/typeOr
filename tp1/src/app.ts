function sayHello(nom: string) {
 return `Bonjour ${nom}`;
}

const user = 'Zenika';

console.log(sayHello(user));

export class HelloWorld {
    sayHello(name: string = 'World') {
        return `Hello ${name}!`;
    }
}