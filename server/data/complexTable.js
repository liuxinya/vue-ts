// const fs = require('fs');
// function initComplexTable() {
//     let tableLen = Math.ceil(10 - Math.random() * 4);  // 6 - 10
//     let data = {};
//     let tables = [];
//     let allAttr = ['A', 'B', 'C', 'D', 'E', 'F'];
//     for (let i = 0; i < tableLen; i++) {
//         let item = {};
//         let attrLen = Math.ceil(6 - Math.random() * 4); // 属性个数 2 - 6
//         // 循环添加属性
//         for(let j = 0; j < attrLen; j++) {
//             let random = j == 0? '' : Math.ceil(Math.random() * 3);
//             item[allAttr[j].toLowerCase()] = `${allAttr[j]}`;
//         }
//         tables.push(item);
//     }
//     data.head = initHead();
//     data.data = tables;
//     data.taskId = Math.random().toString(36).substr(2);
//     data.data.forEach(item1 => {
//         data.head.forEach(item2 => {
//             item1[item2] = Math.ceil(Math.random() * 100)
//         })
//     })
//     fs.writeFileSync('./complexTable.json', JSON.stringify(data, null, 4));
// }
// function initHead() {
//     let headLen = Math.ceil(5 - Math.random() * 2);   // 3- 5
//     let headArr = []
//     for(let i = 0; i < headLen; i++ ) {
//         let item = `h${i}`;
//         headArr.push(item)
//     }
//     return headArr;
// }
// initComplexTable();