import { Moment } from 'moment';

// First Try
function getYear_commonProperties(birthday: Date | Moment | string) {
  // These are the only type safe operations:
  birthday.toString();
  birthday.toLocaleString();
  birthday.valueOf();

  throw new Error('No way forward');
}

// Second Try - Type Assertions
function getYear_typeAssertions(birthday: Date | Moment | string) {
  if ((<Date>birthday).getFullYear) {
    (<Date>birthday).getFullYear();
  } else if ((<string>birthday).substring) {
    (<string>birthday).substring(0, 4);
  } else {
    (<Moment>birthday).year;
  }

  throw new Error('Yuck!');
}

// Third Try - Narrowing
function getYear_narrowing(birthday: Date | Moment | string) {
  if (birthday instanceof Date) {
    birthday.getFullYear();
  } else if (typeof birthday === 'string') {
    birthday.substring(0, 4);
  } else {
    birthday.year; // birthday is narrowed to Moment
  }
}

interface AnotherDate {
  d: number;
  m: number;
  y: number;
}

function isAnotherDate(o: object): boolean {
  return (
    o.hasOwnProperty('d') && o.hasOwnProperty('m') && o.hasOwnProperty('y')
  );
}

function isAnotherDateTypeGuard(o: object): o is AnotherDate {
  return isAnotherDate(o);
}

// Exercise
// Fix the type error using our new type gaurd
function getYear_userDefinedTypeGuards(
  birthday: Date | Moment | string | AnotherDate
) {
  if (birthday instanceof Date) {
    birthday.getFullYear();
  } else if (typeof birthday === 'string') {
    birthday.substring(0, 4);
  } else {
    birthday.year;
  }
}
