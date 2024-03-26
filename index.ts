const english = 80;
const urdu = 80;
const math = 70;
const physics = 70;
const chemistry = 70;

const totalMarks = 500;
console.log('totalMarks: ', totalMarks);

const obtainedMarks = english + urdu + math + physics + chemistry;
console.log('obtainedMarks: ', obtainedMarks);

const percentage = obtainedMarks / totalMarks *100;
console.log('percentage: ', percentage);

if (percentage >= 90){
    console.log("Your Obtained Percentage is ${percentage} % Contgratulation you got Grade 'A")
}
else if (percentage >= 80){
    console.log("Your Obtained Percentage is ${percentage} %  Congratulation you got Grade 'B")
}
else if (percentage >= 70){
    console.log("Your Obtained Percentage is ${percentage} %  Congratulation you got Grade 'C")
}
else if (percentage >= 60){
    console.log("Your Obtained Percentage is ${percentage} % Congratulation you got Grade 'D")
}
else {
    console.log("You Are Passed")
};