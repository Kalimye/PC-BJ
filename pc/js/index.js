// console.log(article);


var article_tab = article.filter(function (item) {
    return item.name != "全部文章";
});


console.log(article_tab);

var btnWrap = document.querySelector(".excellent-btn ul");

article_tab.forEach(item => {

    var btnLi = document.createElement("li");
    var btnLink = document.createElement("a");

    btnLink.href = "javascript:;";
    btnLink.textContent = item.name;

    btnLi.appendChild(btnLink);

    btnWrap.appendChild(btnLi);
    // console.log(item)
});

// 给第一个li加上class
btnWrap.firstElementChild.classList.add("active");

// 优质干货tab切换 

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