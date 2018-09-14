var btn = document.querySelectorAll(".excellent-btn li");
var con = document.querySelectorAll(".excellent-con-list");

btn.forEach((item, index) => {
    item.onclick = function () {
        for (var j = 0; j < btn.length; j++) {
            btn[j].classList.remove("active");
            con[j].classList.remove("active");
        }
        btn[index].classList.add("active");
        con[index].classList.add("active")
    }
});