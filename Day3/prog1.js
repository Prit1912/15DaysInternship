// Callback function


const fun1 = (name,cb)=>{
    console.log("Hello "+name);
    cb();
}

const callbackFun = ()=>{
    console.log("callback function called")
}

fun1("Prit",callbackFun);