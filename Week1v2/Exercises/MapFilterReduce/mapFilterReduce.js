const data = [
  {
    name: "robert",
    age: "29",
    residence: "amsterdam",
    siblings: 1,
    work: {
      title: "Lecturer",
      employer: "Hogeschool van Amsterdam",
    },
  },
  {
    name: "berend",
    age: "32",
    residence: "rotterdam",
    siblings: 0,
    work: {
      title: "Front-end Developer",
      employer: "DEPT",
    },
  },
  {
    name: "ubaida",
    age: "26",
    residence: "Amersfoort",
    siblings: 4,
    work: {
      title: "Project Manager",
      employer: "Clarify",
    },
  },
];

// Hulpfunctie die objecten uit array 'data' transformeert naar het gewenste formaat
function transformPerson(person) {
  return {
    name:
      person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase(),
    age: Number(person.age),
    siblings: person.siblings,
    residence:
      person.residence.charAt(0).toUpperCase() +
      person.residence.slice(1).toLowerCase(),
  };
}

// Transformatie van de data-array en filteren van personen ouder dan 26
const filteredData = data
  .map(transformPerson) // Transformeren van de data
  .filter((person) => person.age > 26); // Filteren op leeftijd

// Laat de getransformeerde personen zien en de som van siblings in één statement
console.log(filteredData);
console.log(filteredData.reduce((acc, item) => acc + item.siblings, 0));
