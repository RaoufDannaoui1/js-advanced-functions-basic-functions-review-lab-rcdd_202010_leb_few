// Your code here
function saturdayFun(par){
  if (typeof(par)==='undefined') par = "roller-skate";

return `This Saturday, I want to ${par}!`
}
saturdayFun();
saturdayFun("eat");


function mondayWork(par = "roller-skate"){


return `This Monday, I will ${par}.`
}

saturdayFun("eat");
