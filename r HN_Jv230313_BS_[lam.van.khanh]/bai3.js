
//Bài 3 : Viết một chương trình nhập vào tháng và năm và in ra số ngày của tháng đó
function ngaythang(month, year) {
  let date = new Date(year, month - 1, 1);

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  return lastDay.getDate();
}

let songaytrongthang = ngaythang(3, 2022);
console.log(songaytrongthang);
