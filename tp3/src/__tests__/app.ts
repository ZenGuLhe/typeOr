import test from 'ava';
import { HelloWorld } from '../app'

let helloWorld: HelloWorld;

test.before(t => {
	helloWorld = new HelloWorld();
});

test('HelloWorld sayHello with argument', t => {
    t.is(helloWorld.sayHello('Zenika'), 'Hello Zenika!');
});

test('HelloWorld sayHello without arguments', t => {
    t.is(helloWorld.sayHello(), 'Hello World!');
});
