import * as _ from 'lodash';

function reverse(str: string): string;
function reverse<T>(arr: T[]): T[];

function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if(typeof stringOrArray === 'string') {
    return stringOrArray
      .split('')
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}

reverse('pepperoni');
reverse(['bacon', 'peppers', 'onions', 'sausage']);

//  ENUM types  //

enum Sizes {
  Sm, // 0
  Md, // 1
  Lg // 2
}

const x = _.map(Sizes); 

console.log(x); // returns array(6) = ['Sm','Md','Lg', 0, 1, 2]; ❔ cool //
