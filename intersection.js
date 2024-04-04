// type User = {
//   name: string;
//   age: number;
// };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var combineUserAndAccount = function (user, account) {
    return __assign(__assign({}, user), account);
};
var user = {
    id: 5,
    name: "roy",
    email: "roy@mail.com",
};
var account = {
    accountId: 3,
    accountType: "saving",
    balance: 3200,
};
var results = combineUserAndAccount(user, account);
console.log(results);
