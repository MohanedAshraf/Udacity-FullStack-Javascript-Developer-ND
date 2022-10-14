"use strict";
describe('Example 1', () => {
    it('describes the spec', () => {
        const myVar = true;
        expect(!myVar).not.toBe(true);
    });
});
describe('Example 2', () => {
    it('describes the spec', () => {
        const myVar = { firstname: 'mohaned', age: 25 };
        expect(myVar).toEqual({ firstname: 'mohaned', age: 25 });
    });
});
describe('Example 3', () => {
    it('describes the spec', () => {
        const myVar = { firstname: 'mohaned', age: 25 };
        const myVar2 = myVar;
        myVar2.lastname = 'ashraf';
        expect(myVar).toBe(myVar2);
    });
});
describe('Example 4', () => {
    it('describes the spec', () => {
        const myVar = { firstname: 'mohaned', age: 25 };
        expect(myVar).toBe({ firstname: 'mohaned', age: 25 });
    });
});
describe('Example 5', () => {
    it('describes the spec', () => {
        let myVar;
        expect(myVar).toBeNull(myVar);
    });
});
