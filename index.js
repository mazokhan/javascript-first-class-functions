function recievesafunction(callback){
    callback();
}

function returnsANamedFunction(){
    const hello = function(){};
    return hello;
}

function returnsAnAnonymousFunction(){
    return function(){
        return``;
    };
}