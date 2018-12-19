
function getSeconds(){
    return new Promise((resolve , reject) => {
        let sec = new Date().getSeconds();
        setTimeout(() => {
            return resolve(sec);
        } , 1000)
    })
}
function getMinutes(){
    return new Promise((resolve , reject) => {
        let min = new Date().getMinutes();
        setTimeout(() => {
            return resolve(min);
        } , 2000)
    })
}
function getHours(){
    return new Promise((resolve , reject) => {
        let hours = new Date().getHours();
        setTimeout(() => {
            return resolve(hours);
        } , 2000)
    })
}

let seconds = getSeconds();

seconds.then((sec) => {
    let minutes = getMinutes(),
        hours = getHours();
    minutes.then(min => {
        hours.then(hours => {
            return console.log(sec  + min  + hours);
            
        })
    })
    
})