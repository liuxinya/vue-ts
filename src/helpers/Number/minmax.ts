export function getMinMax(val1: number, val2: number) {
    return {
        min: val1 < val2 ? val1 : val2,
        max: val1 < val2 ? val2 : val1
    }
}