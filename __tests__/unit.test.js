// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// testing valid phone numbers
test('check if (123)456-7890 is is valid', () => {
    expect(functions.isPhoneNumber('(123)456-7890')).toBe(true);

});
test('check if (098)765-4321 is is valid', () => {
    expect(functions.isPhoneNumber('(098)765-4321')).toBe(true);
});
test('check if 5-4321 is is valid', () => {
    expect(functions.isPhoneNumber('5-4321')).toBe(false);
});
test('check if 123456789 is is valid', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

//testing valid emails
test('check if sshetye@ucsd.edu is a valid email', () => {
    expect(functions.isEmail('sshetye@ucsd.edu')).toBe(true);
});
test('check if johndoe@gmail.com is a valid email', () => {
    expect(functions.isEmail('johndoe@gmail.com')).toBe(true);
});
test('check if johndoegmailcom is a valid email', () => {
    expect(functions.isEmail('johndoegmailcom')).toBe(false);
});
test('check if sshetye@ucsd.educ is a valid email', () => {
    expect(functions.isEmail('sshetye@ucsd.educ')).toBe(false);
});

//testing strong password
test('check if cse110iscool is a valid strong password', () => {
    expect(functions.isStrongPassword('cse110iscool')).toBe(true);
});
test('check if krakatoa is a valid strong password', () => {
    expect(functions.isStrongPassword('krakatoa')).toBe(true);
});
test('check if hi is a strong password', () => {
    expect(functions.isPhoneNumber('hi')).toBe(false);
});
test('check if pneumenoultramicroscopicsilicovolcanoconiosis is a strong password', () => {
    expect(functions.isStrongPassword('pneumenoultramicroscopicsilicovolcanoconiosis')).toBe(false);
});

//testing valid dates
test('check if 12/25/2023 is a valid date', () => {
    expect(functions.isDate('12/25/2024')).toBe(true);
});
test('check if 1/22/2001 is a valid date', () => {
    expect(functions.isDate('1/22/2001')).toBe(true);
});
test('check if 123/456/7890 is a valid date', () => {
    expect(functions.isDate('123/456/7890')).toBe(false);
});
test('check if 11/22/123 is a valid date', () => {
    expect(functions.isDate('11/22/123')).toBe(false);
});

//testing valid hex codes
test('check if #fc9 is a valid hex code color', () => {
    expect(functions.isHexColor('#fc9')).toBe(true);
});
test('check if #ffcc99 is a valid hex code color', () => {
    expect(functions.isHexColor('#ffcc99')).toBe(true);
});
test('check if #zc9 is a valid hex code color', () => {
    expect(functions.isHexColor('#zc9')).toBe(false);
});
test('check if #zzcc99 is a valid hex code color', () => {
    expect(functions.isHexColor('#zzcc99')).toBe(false);
});
