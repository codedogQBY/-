let value = 1

function fn1(){
    console.log(value);
}

function fn2(){
    let value = 2
    fn1();
}