// Bai 1:
// let arr = [3, 5, 6, 88, 44, 345, 43, 54, 67, 433, 75];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log('Phần tử lớn nhất của mảng là', max);

// Bai 2:

// let str = '  heLlo riKkei academy  ';
// let arr = str.trim().split(' ');
// for (let i = 0; i < arr.length; i++) {
//     let a = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
//     arr[i] = a;
// }
// let result = arr.join(' ');
// console.log(result);

// Bai 3:
// function getNumberOfDays(month, year) {
//     return new Date(year, month, 0).getDate();
// }

// let month = parseInt(prompt('Nhập tháng (1-12): '));
// let year = parseInt(prompt('Nhập năm: '));

// let numberOfDays = getNumberOfDays(month, year);
// console.log(
//     'Số ngày của tháng ' + month + ' năm ' + year + ' là: ' + numberOfDays
// );

// Bai 4:
// Khong su dung ham sort

// su dung ham sort
let arr = [234, 234, 23, 2, 42, 5, 12];
arr.sort(function (a, b) {
    return b - a;
});

console.log(arr);
