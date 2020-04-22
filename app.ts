enum Role  {ADMIN, READONLY, AUTHOR};

const obj = {
    name: "Mehul Chaturvedi",
    age: 21,
    hobbies:["coding", "gym", "Sleeping"],
    role: Role.ADMIN
}

console.log("Hoo")
console.log(obj);

for (const hobby of obj.hobbies) {
    console.log(hobby);
}