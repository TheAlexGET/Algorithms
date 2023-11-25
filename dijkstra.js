const graph = {}
graph.a = {b: 2, c: 1}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2} 
graph.e = {f: 1} 
graph.f = {g: 1}
graph.g = {}  
 
function shortPath(graph, start){
    const costs = {}
    const proccesed = []
    let neighbors = {}
    //Searching fro possible paths from start position
    Object.keys(graph).forEach(node => {
        if(node !== start){
            let value = graph[start][node]
            costs[node] = value || 1000000
        }
    })
    let node = findLowestNode(costs, proccesed)
    //While node !== undefined
    while(node){
        const cost = costs[node]
        //getting neighbours graph['a'] == {d: 5, e: 2}
        neighbors = graph[node]

        //Summing path from node to neighbor and if its lower than previos value
        //then rewriting it, so at the end we will get fastest way to the point
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if(newCost < costs[neighbor]){
                costs[neighbor] = newCost
            }
        })
        //Setting node for proccesed so we will not check it again
        proccesed.push(node)
        node = findLowestNode(costs, proccesed)
    }
    return costs
}
//Find lowest node if its not proccesed
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

console.log(shortPath(graph, 'a'))
