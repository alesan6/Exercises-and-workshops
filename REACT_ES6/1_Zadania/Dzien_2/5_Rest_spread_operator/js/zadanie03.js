var people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
]

var setFunnyName = (...args) => {
    args.forEach((element) => {
        var obj = {};
        obj.person = element;
        obj.profession = 'trener';
        people.push(obj); //
    });
}
setFunnyName(
    {person: 'Hermenegilda',
    profession: 'szwaczka'};

console.log(people);
