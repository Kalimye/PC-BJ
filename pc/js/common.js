// 禁止用户做一些事情

(function () {
    /* 禁用右键菜单 */
    document.oncontextmenu = function () {
        event.returnValue = false;
    };
    /* 禁用选中功能 */
    document.onselectstart = function () {
        event.returnValue = false;
    };
    /* 禁用复制功能 */
    document.oncopy = function () {
        event.returnValue = false;
    };
    /* 禁用鼠标的左右键 */
    document.onmousedown = function () {
        if (event.which == 1) { //鼠标左键
            return false;
        }

        if (event.which == 3) { //鼠标右键
            return false;
        }
    };
})()

// 电话号码设置

var phone_number = document.querySelectorAll(".phone-number");
phone_number.forEach(item => {
    item.textContent = '4006-299-520';
});

// 页面导航



var navArray = [{
        name: "首页",
        class: "index",
        link: "/"
    },
    {
        name: "权威专家",
        class: "famous-expert",
        link: "/pc/famous-expert.html"
    },
    {
        name: "服务介绍",
        class: "server",
        link: "/pc/server.html"
    },
    {
        name: "关于我们",
        class: "about",
        link: "/pc/about.html"
    },
    {
        name: "全部文章",
        class: "category",
        link: "/pc/category/category-00.html"
    },
];

var nav = document.querySelector(".nav-list");
navArray.forEach(item => {
    var nav_item = document.createElement("li");
    var nav_a = document.createElement("a");

    nav_item.classList.add(item.class);
    nav_a.href = item.link;
    nav_a.textContent = item.name;

    nav_item.appendChild(nav_a);
    nav.appendChild(nav_item);
});