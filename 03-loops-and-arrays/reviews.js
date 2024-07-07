var reviews = [5, 2, 3.5, 8, 1];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avearge = total / reviews.length;
console.log("Review average = " + avearge);
