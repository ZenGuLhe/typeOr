import { JazzMusician, Album, Musician, RockStar } from './Musician';
import display from './Display';
import * as UtilModule from './UtilModule';

const miles = new JazzMusician('Miles', 'Davis', 89);
miles.addAlbum(new Album('Kind Of Blue'));
miles.addAlbum(new Album('Tutu'));

const musicians: Musician[] = [
  miles,
  new RockStar('Mick', 'Jagger', 72)
];

UtilModule.Util.log('Bienvenue dans ma première applications TypeScript');
display(musicians);
display(miles.albums);

for (const musician of musicians) {
  if (musician instanceof JazzMusician) {
    musician.swing();
  } else if (musician instanceof RockStar) {
    musician.shout();
  }
}
