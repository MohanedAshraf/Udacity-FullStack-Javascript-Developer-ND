type Person = {
  firstName: string;
  readonly lastName: string;
};
type Person2 = Person & {
  age: number;
};
const person1: Person2 = { firstName: "mohaned", lastName: "ashraf", age: 25 };

if (person1.age === 21) {
  console.log("s");
}

const mohaned = "mohaned";

console.log(person1);
