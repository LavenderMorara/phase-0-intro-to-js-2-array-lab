const cats=["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name)
}
// console.log(destructivelyAppendCat("Ralph"))

function destructivelyPrependCat(name){
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}

function destructivelyRemoveFirstCat(){
return cats.shift()
}

function  prependCat(name){
    return [name].concat(cats)
}

function appendCat(name){
    return cats.concat(name)
}
 
console.log(cats.length)

function removeLastCat(){
    return cats.slice(0, -1)
}

function removeFirstCat(){
    return cats.slice(1)
}