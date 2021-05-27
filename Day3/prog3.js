let promise = new Promise((resolve,reject)=>{
    const x = 10;
    const y = 10;

    if(x == y){
        resolve();
    }else{
        reject();
    }
})

promise.then(()=>{
    console.log("value matched")
}
).catch(()=>{
    console.log("value not matched")
})