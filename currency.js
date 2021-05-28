function commas(input, currency) {
    var x = input.toLocaleString();
    if (currency === "as-ruppee") {
        console.log("₹" + " " + x);
    }
    else {
        console.log("{currency} is not identify ");
    }
}
var a = 123000;
commas(a, "as-ruppee");
