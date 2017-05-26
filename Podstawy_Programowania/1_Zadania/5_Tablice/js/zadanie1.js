var avg = [4, 4, 1, 2, 5, 40];
var avgSum = 0;
var avgValue = 0;

for (var i=0; i<avg.length; i++) {
    avgSum += avg[i];
}
avgValue = sum/avg.length;

console.log(avgValue);
