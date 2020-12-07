// Your code here
function saturdayFun(par){
if (typeof(par)==='undefined') par = "roller-skate";
return `This Saturday, I want to ${par}!`
}
saturdayFun();
saturdayFun("eat");


function mondayWork(par = "go to the office"){
return `This Monday, I will ${par}.`
}
saturdayFun("eat");


function wrapAdjective(par1="*")//1
{
  return function(par="special") //2
  {
    return `You are ${par1}${par}${par1}!`
  }
}
wrapAdjective("%")("a dedicated programmer");

const Calculator = {
  add: function(a,b) {
    return a + b;
  },
  subtract: function(a,b) {
    return a - b;
  },
  multiply: function(a,b) {
    return a * b;
  },
  divide: function(a,b) {
    return a / b;
  }
}


function actionApplyer (start, arr) {
  let start0=start;
  for (var i = 0; i < arr.length; i++) {
     start0=arr[i](start0)
  }
  return start0;
}
//actionApplyer(13);
