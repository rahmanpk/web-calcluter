var exist =0;
function insertNumber(value){
   var existingValue = $("#result").val();
   if(value == '+' || value == '-' || value == '*' || value == '/'){
        exist =0;
   }
   if(exist == 1 ){
        existingValue = '';
        exist =0;
   }
   if(value == '*'){
    value = 'x';
   }
   $("#result").val(existingValue + value);
}
function calculate(){
    var display = $("#result").val();
    if( display.search("x") >= 0){
        display = display.replace("x", "*");
    }
    $("#result").val(eval(display));
    exist =1;
}

function deleteNumber(){
    display = $("#result").val();
    if(display!= '0'){
        display = display.slice(0, -1);
        $("#result").val(display);
    }
}
function clearResult(){
    $("#result").val('');
}