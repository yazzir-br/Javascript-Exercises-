const teacher = [
  { name: "ali", Age: "23", city: "London" },
  { name: "muse", Age: "29", city: "New york" },
  { name: "abdi", Age: "31", city: "riyadh" }
];

for (const teachers of teacher) {
    
    for (const key in teachers) {
        console.log(key + ": " + teachers[key]);
    }
    console.log("----------------");
}
