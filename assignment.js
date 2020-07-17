//feetToMile
function feetToMile(feet){
    if(feet<0){
        return 'Negative length is not valied';
    }
    else{
        mile = feet/5280;
        return mile;
    }
}
console.log(feetToMile(5));
//woodCalculator
function woodCalculator(chair,table,bed){
    if((chair<0)||(Math.ceil(chair)!==Math.floor(chair))){
        return 'Ammount of Chair can not be a negative or a fraction number,Please input a positive integer value';
    }
    else if((table<0)||(Math.ceil(table)!==Math.floor(table))){
        return 'Ammount of Table can not be a negative or a fraction number,Please input a positive integer value';
    }
    else if((bed<0)||(Math.ceil(bed)!==Math.floor(bed))){
        return 'Ammount of Bed can not be a negative or a fraction number,Please input a positive integer value';
    }
    else{
        amountOfWood = chair+table*3+bed*5;
        return amountOfWood;
    }
}
console.log(woodCalculator(3,5,3));
//brickCalculator
function brickCalculator(n){
    if (n <=10 && n >=1){
    var brick = n * 15000;
    return brick;
    }
    else if (n > 10 && n <= 20) {
    var brick = ((12000*(n - 10) ) + 150000);
    return brick;
    }
    else {
    var brick =((10000*(n - 20) ) + 270000);
    return brick;
    }
    }
    var result = brickCalculator(7);
    console.log(result);

    //tinyFrinend
    function tinyFrinend(name){
        var frinendName = name[0];
        var frinendNameLength = frinendName.length;
        for(var i =0;i<name.length;i++){
            var allName =name[i];
            var allNameLength =allName.length;

            if(allNameLength<frinendNameLength){
                frinendName=allName;
                frinendNameLength=allNameLength;
            }
        } 
        return frinendName;
    }
    var frinendsName =["Hasibul","Hassain","malik","jabed","rana","raj"];
    var tinyFrinendName = tinyFrinend(frinendsName);
    console.log(tinyFrinendName);
    
    
    