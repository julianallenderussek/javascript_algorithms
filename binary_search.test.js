const binarySearch = require('./binary_search');

test('Binary Search Function', () => {
    expect(binarySearch([2,5,6,9,13,15,28,30], 15)).toBe(5);
    expect(binarySearch([2,5,6,9,13,15,28,30], 50)).toBe(-1);
    }
);