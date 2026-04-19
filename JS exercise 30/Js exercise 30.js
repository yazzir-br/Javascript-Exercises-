
function operate ( a,b, callback){
    return callback ( a,b)
}

function add ( a,b){
    return a+b
};
 
function subsctruct ( a,b){
    return a-b
};


function multiply ( a,b){
    return a*b
};

function divide ( a,b){
    return a/b
};

console.log ( 'iskugayn ', operate (4,5, add))
console.log ( 'kala jaris ', operate (4,91, subsctruct))


console.log ( 'Natiijada isku dhufashadu waa :', operate(20,5, multiply))
console.log('Natiijada isku qaybintu waa :', operate(21,7,divide) )