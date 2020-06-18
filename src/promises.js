const myPromise = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve('Succes')
        }, 1000);
    } else {
        reject('Failed');
    }
})

myPromise
.then(value => value + "!!!")
.then(newValue => console.log(newValue))
.catch(rejectValue => console.log(rejectValue));

//this is a promise
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(json => console.log(json))