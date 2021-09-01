const obj = {
    name: 'Oscar',
    age: 32,
    country: 'MX'
}

let { name, ...all }  = obj; // Extrae los valores de un objeto que aun no se ha construido
console.log(name, all);

const obj = {    
    name: 'Oscar',
    age: 32
}

const obj1 = {
    ...obj,
    country: 'PASS'
}

console.log(obj1);


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('hello world'), 3000)
            : reject(new Error('test error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))


    const regexData = /([0-9]{4})-((0-9){2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20');
    const year = match[1];
    const month = match[2]
    const day = match[3]

    console.log(year, month, day);