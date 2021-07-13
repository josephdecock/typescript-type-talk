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
type K1 = 'name';
type K2 = 'birthday';

// You can refer to the names of the properties of an object as a type.
// I want to get the keys of the Person type, that is, the type
type keysOfPerson = 'name' | 'birthday';

// There is an operator that does that:
type keysOfPersonEasier = keyof Person;
