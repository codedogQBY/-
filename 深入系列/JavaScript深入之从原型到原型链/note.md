## prototype

每一个构造函数（注意是`函数`）都拥有 `prototype` 这个属性，这个属性会指向一个对象，这个对象就是调用构造函数之后创造的实例的原型。

实例对象会继承原型上的属性，他们的对应关系如下：

![原型关系](https://camo.githubusercontent.com/02789d6806b75d34b2017021f58efa3aa7a2ee6be8a0c05fb3293438884b9ec0/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065312e706e67)

## __proto__

前面是构造函数与实例原型的对应关系，现在来看看实例对象与原型的关系。

每一个JavaScript对象(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。

![](https://camo.githubusercontent.com/3dde335faa15d03ffe3b907f6e5c2b5f4d2183caa4c47ac7486794bc407f663c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065322e706e67)

## constructor

constructor 是原型对象指向构造函数的属性。

```js
function Person() {

}
console.log(Person === Person.prototype.constructor); // true
```

现在的关系图如下：

![](https://camo.githubusercontent.com/0aaf005afda83d4e2fdd2bbe523df228b567a091317a2154181771b2706ea2ef/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065332e706e67)

```js

function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true


```

## 实例与原型

实例与原型的关系大致如下，当读取实例的某一属性时，如果在实例上查找不到，则会查找实例对象的原型，如果一直查找不到，则会查找到最顶层为止。

如下例子：

```js

function Person() {

}

Person.prototype.name = 'Kevin';
Person.prototype.age = 15;

var person = new Person();
person.age = 18

console.log(person.name) // Kevin
console.log(person.age) // 18

```

在例子中，我们的原型上有name和age两个属性，但是我们给实例对象person也添加了age属性，对于访问person对象没有的name属性会去person对象的原型上查找，对于访问得到的age属性则不会取用原型上的age属性。

## 原型的原型

但是当访问原型上也没有的属性呢？其实原型也是一个对象，那么他也有对应的原型。

```js
var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
```

其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 __proto__ 指向构造函数的 prototype ，所以我们再更新下关系图：

![](https://camo.githubusercontent.com/ad0ee0e2594c1ac471bbb42321963c130f4fe1ef9ec70389c8ced54544d3fd6c/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065342e706e67)

## 原型链
那 Object.prototype 的原型呢？`null` 可以理解为没有原型了，所以查找到Object.prototype时就停止寻找了

![](https://camo.githubusercontent.com/9a69b0f03116884e80cf566f8542cf014a4dd043fce6ce030d615040461f4e5a/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f6d717971696e6766656e672f426c6f672f496d616765732f70726f746f74797065352e706e67)

## 补充

### constructor

首先是 constructor 属性，我们看个例子：
```js
function Person() {

}
var person = new Person();
console.log(person.constructor === Person); // true
```

当获取 person.constructor 时，其实 person 中并没有 constructor 属性,当不能读取到constructor 属性时，会从 person 的原型也就是 Person.prototype 中读取，正好原型中有该属性，所以：

```js
person.constructor === Person.prototype.constructor
```

### __proto__
其次是 __proto__ ，绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 obj.__proto__ 时，可以理解成返回了 Object.getPrototypeOf(obj)。

