const reverseString = require('./reverseString');

test(`reverseString 'Hello World' return -> 'dlroW olleH'`, () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH')
});