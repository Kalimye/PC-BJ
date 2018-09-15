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

// 页面logo
var logo = document.querySelector(".logo img");
logo.src = "/pc/images/common/logo.png";


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


// 优质干货分类部分
var article = [{
        name: "全部文章",
        link: "/pc/category/category-00.html"
    },
    {
        name: "感情淡化",
        link: "/pc/category/category-01.html"
    },
    {
        name: "婚姻破裂",
        link: "/pc/category/category-02.html"
    },
    {
        name: "恋人劈腿",
        link: "/pc/category/category-03.html"
    },
    {
        name: "矛盾积累",
        link: "/pc/category/category-04.html"
    },
    {
        name: "挽回干货",
        link: "/pc/category/category-05.html"
    },
    {
        name: "挽回干货",
        link: "/pc/category/category-06.html"
    },
    {
        name: "异地恋情",
        link: "/pc/category/category-07.html"
    }
];

// 优质干货标题，封面图，时间，日期，描述,链接
var art_info = [{
        type: "01",
        category: "感情淡化",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }, {
            title: "情侣间新鲜感殆尽，除了分手我们还能做什么？",
            description: "爱情如果能够始终维持在最初的甜蜜该多好，那就该省却了很多日后的争吵和烦恼。乍见之欢有多美好？那美好用语言是形容不出万一的。那时候，你们好像是两座宝矿，等待着对方开采。你们之间有着说不完的话，聚在一起聊天只嫌时间太短，不够你发挥。",
            date: "2018-05-20",
            href: "/pc/article/article-01-02.html",
            cover: "/pc/images/article/cover/cover-02.png"
        }]
    },
    {
        type: "02",
        category: "婚姻破裂",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }, {
        type: "03",
        category: "恋人劈腿",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }, {
        type: "04",
        category: "矛盾积累",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }, {
            title: "情侣间新鲜感殆尽，除了分手我们还能做什么？",
            description: "爱情如果能够始终维持在最初的甜蜜该多好，那就该省却了很多日后的争吵和烦恼。乍见之欢有多美好？那美好用语言是形容不出万一的。那时候，你们好像是两座宝矿，等待着对方开采。你们之间有着说不完的话，聚在一起聊天只嫌时间太短，不够你发挥。",
            date: "2018-05-20",
            href: "/pc/article/article-01-02.html",
            cover: "/pc/images/article/cover/cover-02.png"
        }]
    }, {
        type: "05",
        category: "挽回干货",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }, {
        type: "06",
        category: "性格不合",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }, {
        type: "07",
        category: "感情淡化",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }, {
        type: "01",
        category: "异地恋情",
        author: "小鱼情感",
        list: [{
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }]
    }
];