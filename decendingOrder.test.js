const descendingOrder = require('./decendingOrder');

test(' take any non-negative integer as an argument and return it with its digits in descending order', () => {
    expect(descendingOrder(123456789)).toEqual(987654321)
})
test(' take any non-negative integer as an argument and return it with its digits in descending order', () => {
    expect(descendingOrder(1)).toEqual(1)
})
test(' take any non-negative integer as an argument and return it with its digits in descending order', () => {
    expect(descendingOrder(0)).toEqual(0)
})