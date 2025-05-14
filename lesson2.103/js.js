const userComp = {
    name: "Maksim",
    age: 23,
    city: "Moscow",
    greet: function(name) {
        return `Hello ${name}`;
    }
}

console.log(userComp.greet(userComp.name));


const users = [
    { name: "Мария", age: 25, Admin: false },
    { name: "Пётр", age: 30, Admin: true },
    { name: "Анна", age: 22, Admin: false },
    { name: "Дмитрий", age: 35, Admin: false },
    { name: "Ольга", age: 28, Admin: true },
    { name: "Крилл", age: 28, Admin: false },
    { name: "Света", age: 28, Admin: true },
    { name: "Игнат", age: 28, Admin: false },
    { name: "Юра", age: 28, Admin: false },
    { name: "Алена", age: 28, Admin: false }
];

let i = 0; 

for (const user of users) {
    if (!user.Admin) {
        i++; 
    }
}

console.log(`Количество обычных пользователей: ${i}`); 