$(document).ready(function() {
  var buzzer = new Audio(
    "https://raw.githubusercontent.com/Grois333/Pomodoro-Clock/master/buzzer.mp3"
  );

  //buzzer.play();

  var count = parseInt($("#num").html());
  //console.log(count);
  
  var breakTime = parseInt($("#BreakNum").html());

  $("#reset").hide();
  
  $("#start").click(function(){
    
    var counter = setInterval(timer, 1000);
    
    count = count * 60;
    
    breakTime = breakTime * 60;
    
    function timer(){
      
      //hide variables
      $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #BreakNum, #title1, #title2 ").hide();
      
      $("#timeType").html("Session Time: ");
      
      $("#timeType").show();
      
      count = count - 1;
      
      if(count === 0){
        buzzer.play();
        clearInterval(counter);
        
        var startBreak = setInterval(breakTimer, 1000);
        $("#num, #timeType").hide();
      }
      
      if(count%60 >= 10){  //it is not a single digit number
         
        $("#num").html(Math.floor(count/60)+":"+count%60);
        
      }else{
         
        $("#num").html(Math.floor(count/60)+":"+"0"+count%60);
       }
      
      //$("#num").html(count);
      
       function breakTimer(){
      
      $("#timeType2").html("Break Time: ");
      $("#timeType2").show();
      $("#BreakNum").show();
      breakTime = breakTime - 1;
         
      if(breakTime === 0){
        clearInterval(startBreak);
        buzzer.play();
        $("#reset").show();
        $("#BreakNum, #timeType2").hide();
        //$("#BreakNum").hide();
      }
         if(breakTime%60 >= 10){  //it is not a single digit number
         
        $("#BreakNum").html(Math.floor(breakTime/60)+":"+breakTime%60);
        
      }else{
         
        $("#BreakNum").html(Math.floor(breakTime/60)+":"+"0"+breakTime%60);
       }
         
         //$("#BreakNum").html(breakTime);
     }
      
   }
    
  });
  
  
  $("#reset").click(function(){
    
    count = 25;
    
    breakTime = 5;
    
    $("#num").html(count);
    
    $("#BreakNum").html(breakTime);
    
    $("#reset, #timeType, #timeType2 ").hide();
    
    $("#start, #minus5Clock, #add5Clock, #minus5Break, #add5Break, #num, #BreakNum, #title1, #title2" ).show();
   //console.log("reset");
  });

  $("#minus5Clock").click(function() {
    if (count > 5) {
      count = count - 5;

      $("#num").html(count);

      //console.log(count);
    }
  });

  $("#add5Clock").click(function() {
    count = count + 5;

    $("#num").html(count);

    console.log(count);
  });
  
  
  $("#minus5Break").click(function() {
    if (breakTime > 5) {
      breakTime = breakTime - 5;

      $("#BreakNum").html(breakTime);

      //console.log(count);
    }
  });

  $("#add5Break").click(function() {
    breakTime = breakTime + 5;

    $("#BreakNum").html(breakTime);

  });
  
  
});
