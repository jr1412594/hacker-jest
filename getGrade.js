// Objective

// In this challenge, we learn about if-else statements. Check out the attached tutorial for more details.

// Task

// Complete the getGrade(score) function in the editor. It has one parameter: an integer, , denoting the number of points Julia earned on an exam. It must return the letter corresponding to her  according to the following rules:

// If 25< score <= 30, then grade = a.
// If 20,25 then b.
// If 15,20 then c.
// If 10,15 then d.
// If 5,10 then e.
// If 0,5 then f.



function getGrade(score) {
    let grade;
        if ( score > 25 ){
            grade = 'A';
        } else if (( score >20) && (score <= 25)){
            grade = 'B';
        } else if (( score > 15) && (score <= 20)) {
            grade = 'C';
        } else if (( score > 10) && (score <= 15 )) {
            grade = 'D';
        } else if (( score > 5) && (score <= 10)) {
            grade = 'E';
        } else {    
            grade = 'F'
        }
    return grade
}

module.exports = getGrade;