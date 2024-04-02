var LoginRoles;
(function (LoginRoles) {
    LoginRoles["user"] = "user";
    LoginRoles["admin"] = "admin";
})(LoginRoles || (LoginRoles = {}));
var user1 = {
    name: "karan",
    email: "karan@mail.com",
    password: "123",
    role: LoginRoles.admin,
};
var user2 = {
    name: "roy",
    email: "roy@mail.com",
    password: "123",
    role: LoginRoles.user,
};
var checkUser = function (user) {
    var name = user.name, role = user.role;
    return role === "admin"
        ? "The user ".concat(name, " is alowed to edit the site")
        : "The user ".concat(name, " is not alowed to edit the site");
};
console.log(checkUser(user1));
console.log(checkUser(user2));
