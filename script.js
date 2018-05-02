//-- var time = function () {
  //prompt("Time Out Boys!")
//}
//setTimeout(time, 3000);

 //var r = 1;
//var print = function () {
  //console.log("Это просто потрясно" +  r  + "тик-так");
  //r++; 

};
//var interval = setInterval(print, 1000);


var getRandomNumber = function (size) {
  return Math.floor(Math.random()* size);
};

var getDistance = function (event, target) {
  var diffX = event.offsetX - target.x;
  var diffY = event.offsetY - target.y;
  return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

var getDistanceHint = function (distance) {
  if (distance < 10) {
    return "Umbelible hot!! =)";
  } else if (distance < 20) {
    return "Really hot, baby";
  } else if (distance < 40) {
    return "Hot, try agane";
  } else if (distance < 100) {
    return "Not bad, go go go";
  } else if (distance < 300) {
    return "Cold and Hot";
  } else {
    return "Freeeeeez this police!!";
  }
};


var width = 800;
var height = 600;
var clicks = 0;

var target = {
  x: getRandomNumber(width),
  y: getRandomNumber(height)
};

$("#map").click(function (event) {
  clicks++;
  var distance = getDistance (event, target);
  var distanceHint = getDistanceHint(distance);
  $("#distance").text(distanceHint);
  if (distance < 7) {
    alert(" You found the GOLD in " + clicks + " clicks! ")
  }
});

















