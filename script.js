var time = function () {
  prompt("Time Out Boys!")
}
setTimeout(time, 3000);

var r = 1;
var print = function () {
  console.log("Это просто потрясно" +  r  + "тик-так");
  r++;
  
};
var interval = setInterval(print, 1000);