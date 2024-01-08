var array;
array = [];

function addName(){
    var name;
    name = document.getElementById('Add').value;
    
    if(name!=""){
        array.push(name);
    }
    document.getElementById('Add').value = "";
}

function display(){

    document.getElementById('output').innerHTML = '';

    for (i=0;i<array.length;i++){

        document.getElementById('output').innerHTML += array[i] + '<br>';
    }
}

function wipe(){
    array=[];
    display();
}