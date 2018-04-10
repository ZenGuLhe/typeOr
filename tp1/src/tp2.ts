enum NumberToString {
    zero,
    un,
    deux,
    trois,
    quatre,
    cinq,
    six,
    sept,
    huit,
    neuf
}


export function returnPeopleAndLength(tab: string[] = ['Miles', 'Mick']): [string, number][] {
    let result: [string, number][] = [];
    for (let i = 0; i < tab.length; i++) {
        result.push([tab[i], tab[i].length]);
    }
    return result;
}

function longueurEnToutesLettres(longueur: number) : string {
    return NumberToString[longueur];
}

export function displayPeopleAndLength(tab?: string[], literal:boolean =false): void {
    let fiterIfLiteral = ([,l])=>!literal || (l<=9);
    returnPeopleAndLength(tab)
        .filter(fiterIfLiteral)
        .forEach(tuple => {
            let [nom, longueur] = tuple;
            let longueurAffichée : (number|string) = longueur;
            if(literal){
                longueurAffichée = longueurEnToutesLettres(longueur);
            }
            console.log(`${nom} contient ${longueurAffichée} caractères`);
        });
}