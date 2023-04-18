
//Bài 1: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng


function number(array) {
  let maxnumber = array[0];
  let maxIndex = 0;

  for (let i = 0; i < array.length; ++i) {
    if (maxnumber < array[i]) {
      maxnumber = array[i];
      maxIndex = i;
    }
  }
  console.log("so lon nhat la:", maxnumber);
}
let num = [1, 2, 4, 6, 89];
number(num);
