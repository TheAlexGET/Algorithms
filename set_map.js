//MAP
const map = new Map()

map.set('test', 'string') //String key
console.log(map.get('test')) //Getting value

const testObj = {
    name: 'testObject',
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