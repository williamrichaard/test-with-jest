const { sum } = require('./calculator')
//shoud sum 2 and 2 and the result must be 4
it('houd sum 2 and 2 and the result must be 4', () => {
    expect(sum(2, 2)).toBe(4)
});
