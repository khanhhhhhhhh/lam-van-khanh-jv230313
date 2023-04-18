
//Bài 2 : Viết 1 chương trình chuẩn hóa một câu: loại bỏ các khoảng trắng (space) ở đầu và cuối 
//câu, các từ cách nhau 1 khoảng trắng(space), ký tự đầu ở mỗi từ viết hoa, các ký tự khác 
//trong từ viết thường
function chuanHoaCau(text) {
  text = text.trim();

  text = text.toLowerCase().replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });

  text = text.replace(/\s+/g, " ");

  return text;
}
let cau = "      việT nAm vô địch   ";
let cauChuanHoa = chuanHoaCau(cau);
console.log("câu đã được chuẩn hóa là:",cauChuanHoa);
