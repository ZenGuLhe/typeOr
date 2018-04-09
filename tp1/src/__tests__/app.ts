import test from 'ava';
import { HelloWorld } from '../app';

let helloWorld: HelloWorld;

test.before(t => {
    helloWorld = new HelloWorld();
});

test('HelloWorld shine with argument', t => {
    t.is(helloWorld.sayHello('Zenika'), 'Hello Zenika!');
});

test('HelloWorld shine without arguments', t => {
    t.is(helloWorld.sayHello(), 'Hello World!');
});