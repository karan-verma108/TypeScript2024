// type User = {
//   name: string;
//   age: number;
// };

// type MyLocation = {
//   city: string;
//   country: string;
// };

// const createUserProfile = (user: User, location: MyLocation): string => {
//   const { name, age } = user;
//   const { city, country } = location;
//   return `The name of user is ${name}, from the city of ${city} and is a citizen of the great nation of ${country}`;
// };

// console.log(
//   createUserProfile(
//     { name: "Karan", age: 32 },
//     { city: "Pune", country: "India" }
//   )
// );

type User = {
  id: number;
  name: string;
  email: string;
};

type Account = {
  accountId: number;
  accountType: string;
  balance: number;
};

const combineUserAndAccount = (
  user: User,
  account: Account
): User & Account => {
  return { ...user, ...account };
};

const user: User = {
  id: 5,
  name: "roy",
  email: "roy@mail.com",
};

const account: Account = {
  accountId: 3,
  accountType: "saving",
  balance: 3200,
};

let results: User & Account = combineUserAndAccount(user, account);
console.log(results);
