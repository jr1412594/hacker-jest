// Objective

// In this challenge, we practice creating objects. Check out the attached tutorial for more details.

// Task

// Complete the function in the editor. It has two parameters:  and . It must return an object modeling a rectangle that has the following properties:

// : length This value is equal to a.
// : width This value is equal to b.
// : perimeterThis value is equal to 2 * (a + b)
// : area This value is equal to a * b

function rectangle(a, b) {
    rectangleObject = {
        length: a,
        width: b,
        perimeter: 2 * (a + b),
        area: a * b,
    }
    return rectangleObject
}

module.exports = rectangle