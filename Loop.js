var array1 = [1, 4, 9, 16];
var array2 = [];
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var arr = array1_1[_i];
    var a = arr * 2;
    array2.push(a);
}
console.log("array2", array2);
console.log(array2[1]);
var array3 = [3, 4, 5, -5, 0, 12];
var sum = 0;
// iterating through each element of the array 
for (var _a = 0, array3_1 = array3; _a < array3_1.length; _a++) {
    var arr = array3_1[_a];
    sum = sum + arr;
}
console.log("Sum is:-", sum);
function E_mail(mail_id) {
    console.log("Email Id: ", mail_id);
}
var b = "abc@gmail.com";
E_mail(b);
var weekdays;
(function (weekdays) {
    weekdays[weekdays["SUNDAY"] = 0] = "SUNDAY";
    weekdays[weekdays["MONDAY"] = 1] = "MONDAY";
    weekdays[weekdays["TUESDAY"] = 2] = "TUESDAY";
    weekdays[weekdays["WEDNESDAY"] = 3] = "WEDNESDAY";
    weekdays[weekdays["THRUSDAY"] = 4] = "THRUSDAY";
    weekdays[weekdays["FRIDAY"] = 5] = "FRIDAY";
    weekdays[weekdays["SATURDAY"] = 6] = "SATURDAY";
})(weekdays || (weekdays = {}));
var date = new Date();
var day = date.getDay();
if (day == weekdays.SUNDAY) {
    console.log("today is sunday");
}
else if (day == weekdays.MONDAY) {
    console.log("today is monday");
}
else if (day == weekdays.TUESDAY) {
    console.log("today is tuesday");
}
else if (day == weekdays.WEDNESDAY) {
    console.log("today is wednesday");
}
else if (day == weekdays.THRUSDAY) {
    console.log("today is thrusday");
}
else if (day == weekdays.FRIDAY) {
    console.log("today is friday");
}
else if (day == weekdays.SATURDAY) {
    console.log("today is saturday");
}
