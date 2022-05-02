var currentDate = moment().format('MM/DD/YYYY');
var input1 = document.getElementById("9");
var input2 = document.getElementById("10");
var input3 = document.getElementById("11");
var input4 = document.getElementById("12");
var input5 = document.getElementById("13");
var input6 = document.getElementById("14");
var input7 = document.getElementById("15");
var input8 = document.getElementById("16");
var input9 = document.getElementById("17");
var currentTime = moment().hour();
//Displays current date
$("#currentDay").append("Today's date is " + currentDate);

//saves item to local storage based on the button to input connection
$("#btn-1").on("click", function () {
    localStorage.setItem("task-9", input1.value);
});

$("#btn-2").on("click", function () {
    localStorage.setItem("task-10", input2.value);
});

$("#btn-3").on("click", function () {
    localStorage.setItem("task-11", input3.value);
});

$("#btn-4").on("click", function () {
    localStorage.setItem("task-12", input4.value);
});

$("#btn-5").on("click", function () {
    localStorage.setItem("task-13", input5.value);
});

$("#btn-6").on("click", function () {
    localStorage.setItem("task-14", input6.value);
});

$("#btn-7").on("click", function () {
    localStorage.setItem("task-15", input7.value);
});

$("#btn-8").on("click", function () {
    localStorage.setItem("task-16", input8.value);
});

$("#btn-9").on("click", function () {
    localStorage.setItem("task-17", input9.value);
});


var getLocalStorage = function() {
    //gets the current hour
    const d = new Date()
    const hour = d.toLocaleTimeString('en-US', {
        // en-US can be set to 'default' to use user's browser settings
        hour: '2-digit',
        
      });
    console.log(hour);
    //gets the local storage from array and appends it to page
    const timeArr = [9, 10, 11, 12, 13, 14, 15, 16, 17,]
    for (let i = 1; i < 10; i++) { 
        var task = localStorage.getItem(`task-${i}`)
        if (task) {
            var input = $(`#${i}`)
            input.val(task);
        };
      };

      $("input").each(function () {
        var time = $(this).attr("id");
      
        if (time < currentTime) {
          $(this).addClass("past-time");
        } else if (time > currentTime) {
          $(this).addClass("future-time");
        } else {
          $(this).addClass("present-time");
        }
      });
};

getLocalStorage();


