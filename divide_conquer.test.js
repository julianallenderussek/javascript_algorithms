const search = require('./divide_conquer');

test('Test Search Function - Binary Search', () => {
    expect(search([1,2,3,4], 5)).toBe(-1)
    expect(search([1,2,3,4,5,6,7,8,9], 3)).toBe(2)
    expect(search([1,2,3,4,5,6,7,8,9], 8)).toBe(7)
});