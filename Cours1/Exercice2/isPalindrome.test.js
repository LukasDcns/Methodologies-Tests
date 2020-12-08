const isPalindrome = require('./isPalindrome');

test(`isPalindrome 'racecar' return -> true`, () => {
    expect(isPalindrome('racecar')).toBeTruthy()
    

});

test(`isPalindrome 'hello' return -> false`, () => {
    expect(isPalindrome('hello')).toBeFalsy()
});