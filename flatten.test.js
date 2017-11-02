const flatten = require('./flatten')

test('flatten [[1,2,[3]],4] to [1,2,3,4]', () => {
    expect(flatten([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
})

test('flatten [] to []', () => {
    expect(flatten([])).toEqual([]);
})

test('flatten [[1,\'a\',[{}]],2] to [1,2]', () => {
    expect(flatten([[1, 'a', [{}]], 2])).toEqual([1, 2]);
})

test('flatten [1,2,3,4] to [1,2,3,4]', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
});

test('flatten \'foo\' to []', () => {
    expect(flatten('foo')).toEqual([]);
});