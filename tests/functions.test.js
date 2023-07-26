const stringLength = require('../modules/functions')

test('Number returned is equal to string length', () => {
    expect(stringLength('Koala')).toBe(5);
});

test('String length must be at least 1 character long and no more than 10', () => {
    expect(stringLength('Koala')).toBeGreaterThan(0);
    expect(stringLength('Koala')).toBeLessThanOrEqual(10);
});