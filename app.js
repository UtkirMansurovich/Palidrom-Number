let x = 121121;
const isPalidrom = function (x){
    let y = x.toString().split('');
    let newArray = [];
    for( let i = y.length - 1; i >= 0; i-- ){
        newArray.push(y[i]);
        newArray.join('');
    }
    if( y.join('') === newArray.join('') && x >=0 ){
        console.log(true);
        return true;
    }else {
        console.log(false);
        return  false;
    }
}
isPalidrom(x);