let reviews: number[] = [5, 2, 3.5, 8, 1];

let total : number = 0;

for(let i = 0; i < reviews.length; i++){
    console.log(reviews[i]);
    total += reviews[i];
}

let avearge: number = total / reviews.length;
console.log("Review average = " + avearge);