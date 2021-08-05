const sum = require('../js/sum');

test('adds two numbers', () => {
    expect(sum(1)(3)).toBe(4);
});