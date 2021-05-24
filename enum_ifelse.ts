enum weekdays {SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THRUSDAY,FRIDAY,SATURDAY}
 
var date = new Date();
var day = date.getDay();
 
if(day == weekdays.SUNDAY){
    console.log("today is sunday");
}else if(day == weekdays.MONDAY){
    console.log("today is monday");
}else if(day == weekdays.TUESDAY){
    console.log("today is tuesday");
}else if(day == weekdays.WEDNESDAY){
    console.log("today is wednesday");
}else if(day == weekdays.THRUSDAY){
    console.log("today is thrusday");
}else if(day == weekdays.FRIDAY){
    console.log("today is friday");
}else if(day == weekdays.SATURDAY){
    console.log("today is saturday");
}