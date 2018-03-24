import {
  __,
  always,
  both,
  compose,
  cond,
  defaultTo,
  either,
  equals,
  gte,
  identity,
  ifElse,
  inc,
  lt,
  lte,
  multiply,
  T,
  unless,
  when
} from "ramda";
export interface IPerson {
  birthCountry: string;
  naturalizationDate?: Date;
  age: number;
}
// tslint:disable-next-line:no-console
const log = x => console.log(x) && x;

export const square = x => multiply(x, x);

export const someMagicMath: (
  base: number,
  multiplier: number
) => number = compose(square, inc, multiply);

export const OUR_COUNTRY = defaultTo("Indonesia", undefined);
const wasBornInCountry = (person: IPerson) =>
  equals(person.birthCountry, OUR_COUNTRY);

const wasNaturalized = (person: IPerson) => Boolean(person.naturalizationDate);
const isOver18 = (person: IPerson) => gte(person.age, 18);
const isCitizen = either(wasNaturalized, wasBornInCountry);

export const isEligibleToVote = both(isCitizen, isOver18);

export const forever21 = ifElse(gte(__, 21), always(21), inc);

export const alwaysDrivingAge = unless(gte(__, 16), always(16));

export const water = cond([
  [equals(0), always("water freezes at 0C")],
  [equals(100), always("water boils at 100")],
  [T, temp => `nothing special happens at ${temp}`]
]);
