function callPromise(){
    return new Promise((resolve , reject) => {
        let min = new Date().getSeconds();

        setTimeout(() => {
            if(min % 2 == 0){
                return resolve(min);
            }      
             return reject(min);
        } , 10000)
    })
}
let prm = callPromise();
prm.then(res => {
    console.log(res , 'Correct');
}).catch(err => {
    console.log(err , 'inccorect');
})