//MAP
const map = new Map()

map.set('Alex', 'Sucevan') //String key
console.log(map.get('Alex')) //Getting value

const testObj = {
    name: 'Alisa',
    age: 21,
}

map.set(testObj, 'aadff') //Object key
console.log(map.get(testObj)) //Getting value

//SET
const set = new Set()

set.add(5)
set.add(5)
set.add(5)
set.add(2)
set.add(7)
console.log(set[0])