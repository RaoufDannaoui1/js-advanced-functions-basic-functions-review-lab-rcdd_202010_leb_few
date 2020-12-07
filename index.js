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
    return `You are ${par1}`
  }
}
wrapAdjective("%")("a dedicated programmer")
