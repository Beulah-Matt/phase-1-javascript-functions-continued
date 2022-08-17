// code your solution here
function saturdayFun(string = 'roller-skate'){
    return `This Saturday, I want to ${string}!`
} 
 saturdayFun();

 const mondayWork = (function(string = 'go to the office'){
    return `This Monday, I will ${string}.`;
 });
 mondayWork();

 function wrapAdjective(string){
    return function(adjective= 'special'){
        return `You are ${string}${adjective}${string}!`
    }
 }
