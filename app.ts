interface constructorType {
    new (...args: any[]): Person;
}

const doIChange = {};

function classLog(constructor: constructorType): constructorType {
    return class DecoratedPerson extends constructor {
        protected additionalProperty: string = 'Hello';

        constructor() {
            super();
            console.log(`CLASS LOG`,`Person constructor called with ${this.additionalProperty}`);
        }

    };
}

function methodLog(target: any, methodName: string, descriptor:
    TypedPropertyDescriptor<any>): TypedPropertyDescriptor<any> {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        if(doIChange[target][methodName]!==undefined){
            doIChange[target][methodName].forEach((e,i)=>{
                if(e){
                    args[i] = `[decoratedValue]${args[i]}[/decoratedValue]`;
                }
            });
        }
        var result = originalMethod(...args);
        console.log(`METHOD LOG`,`Method ${methodName} called with result ${result}`);
        return result;
    };
    return descriptor;
}

function propLog(target: any, propertyKey: string): any {
    console.log(`PROP LOG`,`Person with default message ${target[propertyKey]}`);
}

function paramLog(prototypeOfDecoratedClass: any, methodName: string, parameterIndex): void {
    let name = prototypeOfDecoratedClass;
    console.log(prototypeOfDecoratedClass);
console.log(`PARAM LOG`,`[${name}] Method ${methodName} parameter ${parameterIndex} decorated`);

    doIChange[name]={};
    doIChange[name][methodName] = [];

    doIChange[name][methodName][parameterIndex]=true;
}

@classLog
class Person {

    @propLog
    private message: string = 'Hello';

    @methodLog
    sayHello(@paramLog message: string): void {
        console.log(`Hello ${message}`);
    }
}

console.log(`HERE WE GO`,`===============`);

const person : Person = new Person();
console.log(`person instanciée`,`===============`);
person.sayHello('yop !');
console.log(`CIAO`,`===============`);


class Canard {
    @methodLog
    sayHello(message: string): void {
        console.log(`Coincoin ${message}`);
    }
}
const picsou : Canard = new Canard();
picsou.sayHello(`mon neuveux c'est Donald`);