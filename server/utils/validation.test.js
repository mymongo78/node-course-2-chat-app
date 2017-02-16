const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', ()=>{
    it('should reject non-string values',()=>{
        var nonStr = 12;
        expect(isRealString(nonStr)).toBe(false);
    });
    it('should reject string with only spaces',()=>{
        var emptyStr = '   ';
        expect(isRealString(emptyStr)).toBe(false);
    });
    it('should allow string with non-space characters',()=>{
        var realStr = 'Andrew';
        expect(isRealString(realStr)).toBe(true);
    });
});