import { isString } from '../Type/basic';

export function Utrim(str: string) {
    return str.trim();
}
export function Ucapital(str: string) {
    return str.replace(/^\w/gi, (str: string) => {
        return str.toUpperCase();
    })
}
export function UtoLowerCase(str: string) {
    return isString(str) ? str.toLowerCase() : str;
}
export function UtoUpperCase(str: string) {
    return isString(str) ? str.toUpperCase() : str;
}