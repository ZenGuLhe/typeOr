import test from 'ava';
import * as sinon from 'sinon';
import { Album, Music, Musician, RockStar, JazzMusician } from '../Musician';
import display from '../Display';

const spy = sinon.spy(console, "log");

test('Album properties testing', t => {
    const al = new Album('Kind Of Blue');
    t.is(al.title, 'Kind Of Blue');
});

test('Album toString method testing', t => {
    const al = new Album('Kind Of Blue');
    t.is(al.toString(), 'Kind Of Blue');
});

test('Enum Music testing', t => {
    t.is(Music[0], 'JAZZ');
    t.is(Music[1], 'ROCK');
});

test('Musician properties testing', t => {
    let musician = new Musician('Miles', 'Davis', 89);
    t.is(musician.firstName, 'Miles');
    t.is(musician.lastName, 'Davis');
    t.is(musician.age, 89);
    t.is(musician.albums.length, 0);
    t.falsy(musician.style);
});

test('Musician addAlbum testing', t => {
    let musician = new Musician('Miles', 'Davis', 89);
    musician.addAlbum(new Album('Kind Of Blue'));
    musician.addAlbum(new Album('Tutu'));
    t.is(musician.albums.length, 2);
});

test('JazzMusician properties testing', t => {
    let musician = new JazzMusician('Miles', 'Davis', 89);
    t.is(musician.style, Music.JAZZ);
});

test('JazzMusician toString method testing', t => {
    let musician = new JazzMusician('Miles', 'Davis', 89);
    t.is(musician.toString(), 'Miles Davis plays JAZZ');
});

test('RockStar properties testing', t => {
    let musician = new RockStar('Mick', 'Jagger', 72);
    t.is(musician.style, Music.ROCK);
});

test('RockStar toString method testing', t => {
    let musician = new RockStar('Mick', 'Jagger', 72);
    t.is(musician.toString(), 'Mick Jagger plays ROCK');
});

test('display method testing with musicians', t => {
    const musicians: Musician[] = [new JazzMusician('Miles', 'Davis', 89), new RockStar('Mick', 'Jagger', 72)];

    display(musicians);

    t.is(spy.callCount, 2);

    t.is(spy.args[0][0], 'Miles Davis plays JAZZ');
    t.is(spy.args[1][0], 'Mick Jagger plays ROCK');

    spy.reset();
});

test('display method testing with albums', t => {
    const albums: Album[] = [new Album('Kind Of Blue'), new Album('Tutu')];

    display(albums);

    t.is(spy.callCount, 2);

    t.is(spy.args[0][0], 'Kind Of Blue');
    t.is(spy.args[1][0], 'Tutu');

    spy.reset();

});
