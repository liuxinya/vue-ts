import { UBehaviorSubject } from "./behavior";

test('UBehaviorSubject测试', async () => {
    let subject = new UBehaviorSubject<number>(0);
    let count = 0;
    let val: number;
    subject.subscribe((_val: number) => {
        val = _val;
        count++;
    })
    subject.next(1);
    subject.next(2);
    subject.next(3);
    expect(count).toBe(4);
    expect(val).toBe(3);
})