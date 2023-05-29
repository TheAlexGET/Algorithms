const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function shortPath(graph, start, end){
    const costs = {}
    const proccesed = []
    let neighbors = {}
    Object.keys(graph).forEach(node => {
        if(node !== start){
            let value = graph[start][node]
            costs[node] = value || 1000000
        }
    })
    let node = findLowestNode(costs, proccesed)
    while(node){
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]){
                costs[neighbor] = newCost
            }
        })
        proccesed.push(node)
        node = findLowestNode(costs, proccesed)
    }
    return costs
}

function findLowestNode(costs, proccesed){
    let lowestCost = 1000000
    let lowestNode;
    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if(cost < lowestCost && !proccesed.includes(node)){
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'))