console.info('============== problem 1 starts from here ==============')
class user {
    constructor(name, email, age, isActive) {
        this.name = name
        this.email = email
        this.age = age
        this.isActive = isActive
    }
    greeting(){
        console.log('welcom everyone')
    }
}

let usersArr = [
    new user('asad', 'asad28d@gmail.com', 18, true),
    new user('ali', 'ali@gmail.com', 10, true),
    new user('mahir', 'mahir@gmail.com', 19, true),
    new user('hashim', 'hashim321@gmail.com', 28, false),
    new user('momin', 'momin@gmail.com', 15, true),
    new user('abdulala', 'abdul678@gmail.com', 50, false),
    new user('humaiyun', 'humaiyun20@gmail.com', 32, true)
]

console.log(usersArr)

let inAcativeUsers = usersArr.filter(user => user.isActive === false);

console.log('inactive user : ', inAcativeUsers)

let adult = usersArr.filter(user => user.age >= 18);
let teenager = usersArr.filter(user => user.age < 18 && user.age >= 13);
let child = usersArr.filter(user => user.age < 13);

console.log('Adults : ', adult)
console.log('teenagers : ', teenager)
console.log('childs : ', child)

let namesArr = [];
for (let names of usersArr) {
    let { name } = names
    namesArr.push(name)
}
console.log(namesArr)

