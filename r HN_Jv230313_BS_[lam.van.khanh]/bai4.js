//sap xep theo thu tu giam dan dung ham sort
let score = [5, 10, 1, 6, 35, 10];

score.sort(function (a, b) {
  return b - a;
});
document.getElementById("number2").innerHTML = score;



//sap xep theo thu tu giam dan ko dung ham sort
let array = [5, 10, 1, 6, 35, 10];
for (let i = 1; i < array.length; i++) {
  let key = array[i];
  let j = i - 1;
  while (j >= 0 && array[j] < key) {
    array[j + 1] = array[j];
    j = j - 1;
  }
  array[j + 1] = key;
}
console.log(array);
