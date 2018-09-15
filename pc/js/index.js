// 优质干货内容切换
var excellent_con = document.querySelector(".excellent-con");

art_info.forEach(item => {
    var excellent_con_list = document.createElement("div");
    excellent_con_list.classList.add("excellent-con-list");

    var itemWrap = document.createElement("ul");
    item.list.forEach(content => {
        var itemLi = document.createElement("li");

        var artLink = document.createElement("a");
        artLink.href = content.href;

        // 左边封面图部分
        var excellent_l = document.createElement("div");
        excellent_l.classList.add("excellent-list-left");

        var coverImg = document.createElement("img");
        coverImg.src = content.cover;
        coverImg.alt = content.title;

        excellent_l.appendChild(coverImg);

        // 右边文字部分

        var excellent_r = document.createElement("div");
        excellent_r.classList.add("excellent-list-right");

        var h2Title = document.createElement("h2");
        h2Title.textContent = content.title;

        var praDes = document.createElement("p");
        praDes.textContent = content.description;

        excellent_r.appendChild(h2Title);
        excellent_r.appendChild(praDes);

        artLink.appendChild(excellent_l);
        artLink.appendChild(excellent_r);
        itemLi.appendChild(artLink);
        itemWrap.appendChild(itemLi);
        excellent_con_list.appendChild(itemWrap);
    })
    excellent_con.appendChild(excellent_con_list);
});

excellent_con.firstElementChild.classList.add("active");

// 筛选 不显示 全部文章
var article_tab = article.filter(function (item) {
    return item.name != "全部文章";
});

// 渲染按钮到页面
var btnWrap = document.querySelector(".excellent-btn ul");

article_tab.forEach(item => {

    var btnLi = document.createElement("li");
    var btnLink = document.createElement("a");

    btnLink.href = item.link;
    btnLink.textContent = item.name;

    btnLi.appendChild(btnLink);
    btnWrap.appendChild(btnLi);
});

// 给第一个li加上class
btnWrap.firstElementChild.classList.add("active");

function indexTabbtn() {
    // 优质干货按钮切换
    var btn = document.querySelectorAll(".excellent-btn li");
    var con = document.querySelectorAll(".excellent-con-list");
    btn.forEach((item, index) => {
        item.onmouseover = function () {
            for (var j = 0; j < btn.length; j++) {
                btn[j].classList.remove("active");
                con[j].classList.remove("active");
            }
            btn[index].classList.add("active");
            con[index].classList.add("active");
        }
    });
}
indexTabbtn();