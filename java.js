var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", function() {
    navigator.vibrate(200);
});

var btn2 = document.getElementById("btn2");
btn2.addEventListener("click", function() {
    setTimeout( ()=>{
        navigator.vibrate([20, 500, 20, 500, 20, 500, 20, 500, 20, 500]);
    }, 3000)
});