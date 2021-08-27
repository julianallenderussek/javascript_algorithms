const linearSearch = require('./linear_search');


test( 'Checking Linear Search Function', () => {
    expect(linearSearch([10,15,20,25,30], 15)).toBe(1);
    expect(linearSearch([9,8,7,6,5,4,3,2,1], 4)).toBe(5);
    expect(linearSearch([100], 100)).toBe(0);
    expect(linearSearch([100], 200)).toBe(-1);

    }
)