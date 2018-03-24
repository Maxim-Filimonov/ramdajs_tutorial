import {
  alwaysDrivingAge,
  forever21,
  IPerson,
  isEligibleToVote,
  someMagicMath,
  square,
  water
} from "./part_4";

describe("Part 4", () => {
  it("#square makes things 3 times bigger", () => {
    expect(square(3)).toEqual(9);
  });
  it("#someMagicMath does weird things", () => {
    expect(someMagicMath(2, 3)).toEqual((2 * 3 + 1) * 7);
  });
  it("#isEligibleToVote filters youngsters", () => {
    let people: IPerson[];
    people = [
      { birthCountry: "Indonesia", age: 15 },
      { birthCountry: "Indonesia", age: 25 },
      { birthCountry: "Indonesia", age: 16 }
    ];
    expect(people.filter(isEligibleToVote).length).toEqual(1);
  });
  it("#isEligibleToVote filters foreigners", () => {
    let people: IPerson[];
    people = [
      { birthCountry: "Australia", age: 35 },
      { birthCountry: "Russia", age: 25 },
      { birthCountry: "Indonesia", age: 20 }
    ];
    expect(people.filter(isEligibleToVote).length).toEqual(1);
  });
  it("#forever21 returns 21 even if you are 30", () => {
    expect(forever21(30)).toEqual(21);
    expect(forever21(15)).toEqual(16);
  });
  it("#alwaysDrivingAge", () => {
    expect(alwaysDrivingAge(30)).toEqual(30);
    expect(alwaysDrivingAge(12)).toEqual(16);
  });

  it("#water descriptions are correct", () => {
    expect(water(0)).toContain("freezes");
    expect(water(100)).toContain("boils");
    expect(water(5)).toContain("nothing");
  });
});
