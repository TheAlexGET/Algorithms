//Graphes

const graph = {}

graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

console.log(graph)
function breadthSearch(graph, start, end){
    let queue = []
    let path = []
    queue.push(start)
    while(queue.length > 0){
        const current = queue.shift()
        if(!graph[current]){
            graph[current]  = []
        }
        if(graph[current].includes(end)){
            path.push(current + '->')
            path.push(end)
            return {path: path.toString().replace(/,/g,''), status: true}
        } else{
            path.push(current + '->')
            queue = [...queue, ...graph[current]]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'c'))


//Алгоритм Дейкстры для поиска кратчайшего пути
const matrix = [
    [0,1,1,0,0,0,0],
    [0,0,0,0,1,0,0],
    [0,0,0,1,0,1,0],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,1],
    [0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0],
]
