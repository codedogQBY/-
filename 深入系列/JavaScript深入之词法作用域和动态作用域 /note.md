## 作用域

在 JavaScript 中, 作用域为可访问变量，对象，函数的集合。

作用域规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。

JavaScript 采用词法作用域(lexical scoping)，也就是静态作用域

## 静态作用域与动态作用域

什么是静态作用域呢？静态作用域是指函数在定义时作用域就已经决定了。

与之相对的则是动态作用域，动态作用域就是在函数调用时才决定的。

下面举个例子：

```javascript
let value = 1

function fn1(){
    console.log(value);
}

function fn2(){
    let value = 2
    fn1();
}
```