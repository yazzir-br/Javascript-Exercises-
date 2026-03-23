// spread oprator 

let num1 = [1,2,3,]

let num2 = [ ... num1, 5,6,7]
console.log( num2)


// return oprator 
function multiply (...tiro){
    return tiro.reduce( (multiply,num) => multiply * num)
}
console.log( multiply( 20,60,3))
