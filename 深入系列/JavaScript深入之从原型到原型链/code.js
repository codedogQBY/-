function Person(){}

var person = new Person()
person.name = 'beal'
console.log(person.name);

// prototype是函数才拥有的属性
Person.prototype.name = 'beal1'

var person1 = new Person()
var person2 = new Person()

console.log(person1.name);
console.log(person2.name);
console.log(person1.__proto__.constructor.name);


// 原型对象、实例、构造函数之间的关系
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true



function Person() {

}

Person.prototype.name = 'Kevin';
Person.prototype.age = 15;

var person = new Person();
person.age = 18

console.log(person.name) // Kevin
console.log(person.age) // 18