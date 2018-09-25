// 优质干货内容切换
var excellent_con = document.querySelector(".excellent-con");

function articleFun() {

    var excellent_con = document.querySelector(".excellent-con");
    for (var i = 0; i < art_info.length; i++) {
        // 先便利7个分类
        var excellent_con_list = document.createElement("div");
        excellent_con_list.classList.add("excellent-con-list");

        var itemWrap = document.createElement("ul");
       
        // 将7个分类下的文章渲染到页面
        for (var j = 0; j < art_info[i].list.length; j++) {
            var itemLi = document.createElement("li");

            var artLink = document.createElement("a");
            artLink.href = art_info[i].list[j].href;

            // 左边封面图部分
            var excellent_l = document.createElement("div");
            excellent_l.classList.add("excellent-list-left");

            var coverImg = document.createElement("img");
            coverImg.src = art_info[i].list[j].cover;
            coverImg.alt = art_info[i].list[j].title;

            excellent_l.appendChild(coverImg);

            // 右边文字部分

            var excellent_r = document.createElement("div");
            excellent_r.classList.add("excellent-list-right");

            var h2Title = document.createElement("h2");
            h2Title.textContent = art_info[i].list[j].title;

            var praDes = document.createElement("p");
            praDes.textContent = art_info[i].list[j].description;

            excellent_r.appendChild(h2Title);
            excellent_r.appendChild(praDes);

            artLink.appendChild(excellent_l);
            artLink.appendChild(excellent_r);
            itemLi.appendChild(artLink);
            itemWrap.appendChild(itemLi);
            excellent_con_list.appendChild(itemWrap);
        }

        excellent_con.appendChild(excellent_con_list);
    }
    excellent_con.firstElementChild.classList.add("active");
}
articleFun()
// 筛选 不显示 全部文章
// var article_tab = article.filter(function (item) {
//     return item.name != "全部文章";
// });

// 获取按钮外面的包裹层
var btnWrap = document.querySelector(".excellent-btn ul");

function artBtn() {
    // 筛选 不显示 全部文章

    var article_tab = article.filter(function (item) {
        return item.name != "全部文章";
    });

    // 渲染按钮到页面

    for (var i = 0; i < article_tab.length; i++) {
        var btnLi = document.createElement("li");
        var btnLink = document.createElement("a");

        btnLink.href = article_tab[i].link;
        btnLink.textContent = article_tab[i].name;

        btnLi.appendChild(btnLink);
        btnWrap.appendChild(btnLi);
    }
}
artBtn();


// 给第一个li加上class
btnWrap.firstElementChild.classList.add("active");

function indexTabbtn() {
    // 优质干货按钮切换
    var btn = document.querySelectorAll(".excellent-btn li");
    var con = document.querySelectorAll(".excellent-con-list");

    for (var i = 0; i < btn.length; i++) {
        (function (index) {
            btn[index].onmouseenter = function () {
                // 去掉所有的class
                for (var i = 0, len = btn.length; i < len; i++) {
                    btn[i].classList.remove('active');
                    con[i].classList.remove('active');
                }
                // 给鼠标经过的按钮加上class
                btn[index].classList.add("active");
                con[index].classList.add("active");
            }
        })(i);

    };
}
indexTabbtn();