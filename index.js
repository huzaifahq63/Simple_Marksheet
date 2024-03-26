var english = 80;
var urdu = 80;
var math = 70;
var physics = 70;
var chemistry = 70;
var totalMarks = 500;
console.log('totalMarks: ', totalMarks);
var obtainedMarks = english + urdu + math + physics + chemistry;
console.log('obtainedMarks: ', obtainedMarks);
var percentage = obtainedMarks / totalMarks * 100;
console.log('percentage: ', percentage);
if (percentage >= 90) {
    console.log("Your Obtained Percentage is ${percentage} % Contgratulation you got Grade 'A");
}
else if (percentage >= 80) {
    console.log("Your Obtained Percentage is ${percentage} %  Congratulation you got Grade 'B");
}
else if (percentage >= 70) {
    console.log("Your Obtained Percentage is ${percentage} %  Congratulation you got Grade 'C");
}
else if (percentage >= 60) {
    console.log("Your Obtained Percentage is ${percentage} % Congratulation you got Grade 'D");
}
else {
    console.log("You Are Passed");
}
;
