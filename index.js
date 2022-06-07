function receivesAFunction(shba){
    return shba()
}
receivesAFunction(shba())


function returnsANamedFunction(){
    return function shabs(){
        console.log ("shabs");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Anonymou")
    }
}
