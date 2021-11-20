console.log("JS IS READY");

// decla with var => gloabl => window => app 
//var a ="hello world";

// local
//let x = "hello world";

// We never declar type is pure JS
/*
console.log( typeof " hello" );
console.log( typeof 125 );
console.log( typeof 12.5 );
console.log( typeof ['test','test'] );
console.log( typeof new Date() );
console.log( typeof NaN );
console.log( typeof function(){} );
console.log( typeof null );
console.log( typeof false );
console.log( typeof { key:"value", username:"chourabi taher" } );*/

 

function somme(){
    let inputX = document.getElementById("x");
    let inputY = document.getElementById("y");

    let xValue = Number(inputX.value) ; // convert to number
    let yValue = Number( inputY.value);

    console.log(typeof xValue);

    res = xValue + yValue;

    let blocRes= document.getElementById('res');

    // can play two roles 1 GET 2 SET
    blocRes.innerHTML = res;
    
}




