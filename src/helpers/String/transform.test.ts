import { Ucapital, Utrim, UtoLowerCase, UtoUpperCase } from "./transform";

test('captital方法(首字母大写)', () => {
    expect(Ucapital('abc')).toBe('Abc')
})
test('trim方法(去除空格)', () => {
    expect(Utrim('  aa  bb cc  ')).toBe('aa  bb cc');
})
test('UtoLowerCase方法(去除空格)', () => {
    expect(UtoLowerCase('aASDSADa  bbasdAKSM')).toBe('aasdsada  bbasdaksm');
})
test('UtoUpperCase方法(去除空格)', () => {
    expect(UtoUpperCase('aASDSADa  bbasdAKSM')).toBe('aasdsada  bbasdaksm'.toUpperCase());
})
