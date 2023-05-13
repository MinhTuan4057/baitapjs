// Bai 1: Tính lương một ngày của nhân viên
// Input: Lương một ngày là 100.000
// Process: lấy số ngày làm của người dùng nhập vào nhân cho 100.000
// Output: Tổng lương của số ngày người dùng nhập vào
var btn = document.getElementById('btnS').onclick = function () {
    var workingDay = +document.getElementById('workingDay').value;
    var result
    result = workingDay * 100 * 1000;
    document.getElementById("total").innerHTML = result;
}


// Bai 2: Tính giá trị trung bình của 5 số thực
// Input: 5 số thực người dùng nhập vào
// Process: Lấy tổng 5 số thực người dùng nhập vào chia cho 5
// Output: Giá trị trung bình của 5 số thực đó
var btnN = document.getElementById('btnN').onclick = function () {
    var InputTotal = +document.getElementById('InputTotal').value;
    var InputTotal2 = +document.getElementById('InputTotal2').value;
    var InputTotal3 = +document.getElementById('InputTotal3').value;
    var InputTotal4 = +document.getElementById('InputTotal4').value;
    var InputTotal5 = +document.getElementById('InputTotal5').value;
    var total
    var result
    total = InputTotal + InputTotal2 + InputTotal3 + InputTotal4 + InputTotal5;
    result = total / 5;
    document.getElementById("total2").innerHTML = result;
}


// Bai 3: Quy đổi tiền USD sang VND
// Input: Giá USD hiện nay có giá 23.500 VND
// Process: Lấy số USD người dùng nhập vào nhân cho 23.500
// Output: Xuất ra số tiền quy đổi được từ USD sang VND
var btnC = document.getElementById('btnC').onclick = function () {
    var Exchange = +document.getElementById('Exchange').value;
    var ValueVnd
    var result
    ValueVnd = 23.500;
    result = Exchange * ValueVnd * 1000;
    document.getElementById("total3").innerHTML = result;
}

// Bai 4: Tính diện tích, chu vi hình chữ nhật
// Input: Giá trị của chiều dài và chiều rộng mà người dùng nhập vào
// Process: Ta có công thức tính như sau
// 1: Diện tích = dài * rộng
// 2: Chu vi = (dài + rộng) * 2
// Output: Ta xuất ra kết quả của diện tích và chu vi
var btnD = document.getElementById('btnD').onclick = function() {
    var LongInput = +document.getElementById('LongInput').value;
    var WidthInput = +document.getElementById('WidthInput').value;
    var AcRea 
    var PeriMeter
    AcRea = LongInput * WidthInput;
    PeriMeter = (LongInput + WidthInput) * 2;
    document.getElementById("total4").innerHTML = AcRea;
    document.getElementById("total5").innerHTML = PeriMeter;
}


// Bài 5: Tính tổng hai ký số
// Input: nhập một số có hai chữ số (vd: 12,23,34) và tính tổng hai ký số vùa nhập vào
// Process: Để tính được tổng hai ký số, ta phải tách hai chữ số đó ra thành hàng đơn vị và hàng chục
// 1: Lây số hàng đơn vị = số % 10;
// 2: Lấy số hàng chục = số / 10;
// 3: cộng hai số hàng đơn vị và hàng chục lại với nhau để tính tổng hai số đó(ta dung thuộc tính Math.floor để làm tròn số xuống
// Output: Ta xuất ra tổng của hai ký số vừa nhập
var btnA = document.getElementById('btnA').onclick = function () {
    var Number = +document.getElementById('Number').value;
    var Units
    var Dozens
    var total
    Units = Number % 10;
    Dozens = Number / 10;
    total = Math.floor(Units + Dozens);
    document.getElementById("total6").innerHTML = total;
}