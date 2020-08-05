//convert Feet To Mile
function feetToMile(feet){
    return (feet <= 0 ? 'Please Input Positive Value or more then zero.' : (feet * 0.000189394) + ' Mile.');
}
console.log(feetToMile(1));

//wood calculator for furniture
function woodCalculator(chair, table, bed){
    return (chair * 1) + (table * 3) + (bed * 5);
}
console.log(woodCalculator(3,1,2) + ' qubic feet wood required for your furniture.');

//brick calculator for floors
function breakCalculator(noOfFloor){
    if (noOfFloor > 20){
        return ( (10 * 15 * 1000) + (10 * 12 * 1000) + ( (noOfFloor - 20) * 10 * 1000 ) );
    } else if (noOfFloor > 10){
        return ( (10 * 15 * 1000) + ( (noOfFloor - 10) * 12 * 1000 ) );
    } else if (noOfFloor > 0) {
        return (noOfFloor * 15 * 1000);
    } else {        
        return ('please input positive value and more then zero');
    }
}
console.log(breakCalculator(11));

//tiny Friend Function
function tinyFriend(minLength){
    let tiny = minLength[0];
    for(let i = 0; i<tiny.length; i++){
        if(minLength[i] < tiny){
            tiny = minLength[i];
        }
    }
    return tiny;
}
console.log(tinyFriend(['abir','nayeem','abul','bi']));