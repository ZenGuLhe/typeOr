enum NumberToString {
  un,
  deux,
  trois,
  quatre,
  cinq,
  six,
  sept,
  huit,
  neuf
};

export function returnPeopleAndLength(people: string[] = ['Miles', 'Mick']): [string, number][] {
  return people.map(function (person: string) : [string, number] {
     return [person, person.length];
  });
}

export function displayPeopleAndLength(people?: string[], literal?: boolean): void {
  function filterLength(personAndAge) {
    return personAndAge[1] <= 9;
  };

  let tuples = returnPeopleAndLength(people);
  if (literal) tuples = tuples.filter(filterLength);

  tuples.forEach(function (personAndAge) {
    const [person, length] = personAndAge;

    if (literal) {
      console.log(`${person} contient ${NumberToString[length - 1]} caractères`);
    } else {
      console.log(`${person} contient ${length} caractères`);
    }

    // console.log(`${personAndAge[0]} contient ${personAndAge[1]} caractères`);
  });
}
