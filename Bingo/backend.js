$(document).ready(function () { 
  
    $("#getCardID").click(function () { 
        var inputString = $("#cardID").val(); 
        $.get(`test.js`, function(data,status){
            if(data == 0){
                alert("Game not found");
            }else{
                alert("Game found");
            }
        });
    }); 
}); 
