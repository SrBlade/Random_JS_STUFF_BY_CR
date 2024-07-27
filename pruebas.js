/* const x = 5
const y = 3

function suma(x, y) {
    x = 5
    y = 5
    return (x + y)
}

console.log(`la suma es:`, suma())

const z = x + y

console.log(z)
*/


const car = {
    brand: 'Tesla',
    model: 'S',
    color: 'Black',
    topSpeed: '290km/h',
    quality: 'Excellent car'

}



for (info in car) {
    console.log(`${info} : ${car[info]}`)
}