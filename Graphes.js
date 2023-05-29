//Graphes

const graph = {}

graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']


function breadthSearch(graph, start, end){
    let queue = []
    queue.push(start)
    while(queue.length > 0){
        const current = queue.shift()
        if(!graph[current]){
            graph[current]  = []
        }
        if(graph[current].includes(end)){
            return true
        } else{
            queue = [...queue, ...graph[current]]
            console.log(queue)
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'f'))


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
