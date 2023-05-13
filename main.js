// Bai 1
var btn = document.getElementById('btnS').onclick = function () {
    var workingDay = +document.getElementById('workingDay').value;
    var result
    result = workingDay * 100 * 1000;
    document.getElementById("total").innerHTML = result;
}
// Bai 2:
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

// Bai 3:
var btnC = document.getElementById('btnC').onclick = function () {
    var Exchange = +document.getElementById('Exchange').value;
    var ValueVnd
    var result
    ValueVnd = 23.500;
    result = Exchange * ValueVnd * 1000;
    document.getElementById("total3").innerHTML = result;
}

// Bai 4:
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

// Bài 5:
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