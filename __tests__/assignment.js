const Buffer = require('../assignment');

describe('Custom Buffer Tests', () => {
    test('defined', () => {
        expect(Buffer).toBeDefined();
    });

    test('empty buffer', () => {
        expect(() => { new Buffer(3).get(); }).toThrow();
    });

    test('Case 1: with simple put and get', () => {
        const b = new Buffer(3);
        expect(b.put(2)).to;
        expect(b.get()).toBe(2);
    });

    test('Case 2: Advanced', () => {
        const buffer111 = new Buffer(3);
        expect(buffer111.put(2)).toBeUndefined();
        expect(buffer111.put(4)).toBeUndefined();
        expect(buffer111.put(6)).toBeUndefined();
        expect(buffer111.put(8)).toBeUndefined();
        expect(buffer111.put(10)).toBeUndefined();
        expect(buffer111.put(12)).toBeUndefined();
        expect(buffer111.put(14)).toBeUndefined();
        expect(buffer111.get()).toBe(10);
        expect(buffer111.get()).toBe(12);
        expect(buffer111.get()).toBe(14);
        expect(() => { buffer111.get(); }).toThrow("No element in the memory");
        expect(buffer111.put(16)).toBeUndefined();
        expect(buffer111.get()).toBe(16);
    });

    test('Case 3: Advanced', () => {
        const buffer111 = new Buffer(4);
        expect(buffer111.put(2)).toBeUndefined();
        expect(buffer111.put(4)).toBeUndefined();
        expect(buffer111.put(6)).toBeUndefined();
        expect(buffer111.put(8)).toBeUndefined();
        expect(buffer111.put(10)).toBeUndefined();
        expect(buffer111.put(12)).toBeUndefined();
        expect(buffer111.put(14)).toBeUndefined();
        expect(buffer111.get()).toBe(8);
        expect(buffer111.get()).toBe(10);
        expect(buffer111.get()).toBe(12);
        expect(buffer111.get()).toBe(14);
        expect(buffer111.put(16)).toBeUndefined();
        expect(buffer111.get()).toBe(16);
    });
});