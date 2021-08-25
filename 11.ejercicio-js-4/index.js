const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

const newNames = [];
const myObj = [];

names.forEach((el) => {
    if (!(el in myObj)) {
        myObj[el] = true;
        newNames.push(el);
    }
});
console.log(names);
console.log(myObj);
