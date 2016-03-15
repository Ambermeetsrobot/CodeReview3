var pingpong = function(number) {
  var text = "";
  for (var i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      text += "pingpong";
    } else if (i % 5 === 0) {
      text += "pong";
    } else if (i % 3 === 0) {
      text += "ping";
    } else {
      text += i;
    }
  }
     return text;
};

$(document).ready(function() {
 $("form#pingpong").submit(function(event) {
   var number = parseInt($("input#number").val());
   var answer = pingpong(number);

   $(".answer").append(answer);
   $("#result").show();
  //  $("ul#results").append

   event.preventDefault();

  });
});
