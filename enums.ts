enum LoginRoles {
  user = "user",
  admin = "admin",
}

interface LoginDetails {
  name: string;
  email: string;
  password: string;
  role: LoginRoles;
}

const user1: LoginDetails = {
  name: "karan",
  email: "karan@mail.com",
  password: "123",
  role: LoginRoles.admin,
};

const user2: LoginDetails = {
  name: "roy",
  email: "roy@mail.com",
  password: "123",
  role: LoginRoles.user,
};

const checkUser = (user: LoginDetails): string => {
  const { name, role } = user;
  return role === "admin"
    ? `The user ${name} is alowed to edit the site`
    : `The user ${name} is not alowed to edit the site`;
};

console.log(checkUser(user1));
console.log(checkUser(user2));
