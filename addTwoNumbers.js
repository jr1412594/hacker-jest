// l1 = [2,4,3], l2 = [5,6,4];
l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

const addTwoNumbers = function(l1, l2) {
    let newL1 = l1.reverse().join('');
    let newL2 = l2.reverse().join('');
    
    let l3 = +newL1 + +newL2;
    
    let newL3 = String(l3).split('').reverse();
    return newL3.map(num => +num)
};

console.log(addTwoNumbers(l1, l2))