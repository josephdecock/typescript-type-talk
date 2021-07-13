import { get } from './get';

interface Person {
  name: string;
  birthday: Date;
}
var joe: Person = { name: 'Joe DeCock', birthday: new Date('1985-09-29') };

// Example - a getter (based on lodash's _.get, but simplified)
var birthday = get(joe, 'birthday');
var name = get(joe, 'name');
// TODO - Try making typos ("naem") and observe the type error

// Types can be single values
type Key1 = 'name';
type Key2 = 'birthday';

// You can refer to the names of the properties of an object as a type.
// I want to get the keys of the Person type, that is, the type
type keysOfPerson = 'name' | 'birthday';

// There is an operator that does that:
type keysOfPersonEasier = keyof Person;

// Generic types can be constrained with the extends keyword
interface Worker extends Person {
  company: string;
}
function genericWithExtends<T extends Person>() {}

genericWithExtends<Person>();
genericWithExtends<Worker>();

// P extends P | Q | R
function needsAPropertyOfPerson<T extends keyof Person>() {}
needsAPropertyOfPerson<'name'>();
needsAPropertyOfPerson<'birthday'>();
// Technically you *could* do this
needsAPropertyOfPerson<'name' | 'birthday'>();
// But this is a type error
needsAPropertyOfPerson<'something else'>();

// You can also refer to the type of a property
// using the "indexed access operator".
// This is called a "lookup type"
type birthdaysType = Person['birthday'];
