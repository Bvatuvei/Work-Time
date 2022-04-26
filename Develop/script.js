var currentDate = moment().format('MM/DD/YYYY');
var input1 = document.getElementById("input-1");
var input2 = document.getElementById("input-2");
var input3 = document.getElementById("input-3");
var input4 = document.getElementById("input-4");
var input5 = document.getElementById("input-5");
var input6 = document.getElementById("input-6");
var input7 = document.getElementById("input-7");
var input8 = document.getElementById("input-8");
var input9 = document.getElementById("input-9");
$("#currentDay").append(currentDate);


$("#btn-1").on("click", function () {
    localStorage.setItem("task-input-1", input1.value);
});

$("#btn-2").on("click", function () {
    localStorage.setItem("task-input-2", input2.value);
});

$("#btn-3").on("click", function () {
    localStorage.setItem("task-input-3", input3.value);
});

$("#btn-4").on("click", function () {
    localStorage.setItem("task-input-4", input4.value);
});

$("#btn-5").on("click", function () {
    localStorage.setItem("task-input-5", input5.value);
});

$("#btn-6").on("click", function () {
    localStorage.setItem("task-input-6", input6.value);
});

$("#btn-7").on("click", function () {
    localStorage.setItem("task-input-7", input7.value);
});

$("#btn-8").on("click", function () {
    localStorage.setItem("task-input-8", input8.value);
});

$("#btn-9").on("click", function () {
    localStorage.setItem("task-input-9", input9.value);
});

function() {

};


