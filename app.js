"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 1] = "READONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var obj = {
    name: "Mehul Chaturvedi",
    age: 21,
    hobbies: ["coding", "gym", "Sleeping"],
    role: Role.ADMIN
};
console.log("Hoo");
console.log(obj);
for (var _i = 0, _a = obj.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
