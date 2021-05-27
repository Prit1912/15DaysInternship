setTimeout(()=>{
    console.log("It will run after n miliseconds")
},2000)

setInterval(() => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    console.log(time)
}, 1000);

setTimeout(() => {
  const fun1 = () => {
    console.log("fun1 called");
    const date = new Date();
    const time = date.toLocaleTimeString();
    console.log(time);
  }
  setInterval(fun1, 3000);
},2000);
