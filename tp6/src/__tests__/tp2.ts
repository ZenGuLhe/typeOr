import test from 'ava';
import * as sinon from 'sinon';
import { displayPeopleAndLength, returnPeopleAndLength } from '../tp2'

const spy = sinon.spy(console, 'log');

test('returnPeopleAndLength with table in parameter', t => {
    const people: [string, number][] = returnPeopleAndLength();
    t.is(people.length, 2);
    t.is(people[0][0], 'Miles');
    t.is(people[0][1], 5);
    t.is(people[1][0], 'Mick');
    t.is(people[1][1], 4);
});

test('returnPeopleAndLength with arguments', t => {
    const people: [string, number][] = returnPeopleAndLength(['Emmanuel']);
    t.is(people.length, 1);
    t.is(people[0][0], 'Emmanuel');
    t.is(people[0][1], 8);
});

test('displayPeopleAndLength with table in parameter', t => {
    displayPeopleAndLength(['Emmanuel']);
    t.true(spy.alwaysCalledWith('Emmanuel contient 8 caractères'));
});

test('displayPeopleAndLength without arguments', t => {
    displayPeopleAndLength();
    t.true(spy.calledWith('Miles contient 5 caractères'));
    t.true(spy.calledWith('Mick contient 4 caractères'));
});

test('displayPeopleAndLength with table and literal in parameter', t => {
    displayPeopleAndLength(['Zenika', 'ZenikaZenika'], true);
    t.true(spy.calledWith('Zenika contient six caractères'));
});
