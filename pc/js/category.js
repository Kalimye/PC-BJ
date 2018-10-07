var btnWrap = document.querySelector(".category-left ul");
// 获取左侧按钮
function categoryNav() {
    for (var i = 0; i < article.length; i++) {
        var btnLi = document.createElement("li");
        var btnLink = document.createElement("a");

        // 添加链接
        btnLink.href = "javascript:;";
        btnLink.textContent = article[i].name;

        btnLi.appendChild(btnLink);

        btnWrap.appendChild(btnLi);
    }
}

// 将侧边导航渲染到页面
categoryNav();
btnWrap.firstElementChild.classList.add("active");


// 根据后缀名给情感专栏列表页添加样式
function categoryNavStyle() {
    var btn_item = btnWrap.getElementsByTagName("li");

    // 获取后缀名
    var pathname = window.location.pathname;
    var pathnameArr = pathname.split('/');
    pathname = pathnameArr[pathnameArr.length - 1];
    pathname = pathname.split('.')[0];

    // 根据路径名字进行判断，给li加样式
    /*
        switch (pathname) {
            case 'category-00':
                btn_item[0].classList.add("active");
                break;
            case 'category-01':
                btn_item[1].classList.add("active");
                break;
            case 'category-02':
                btn_item[2].classList.add("active");
                break;
            case 'category-03':
                btn_item[3].classList.add("active");
                break;
            case 'category-04':
                btn_item[4].classList.add("active");
                break;
            case 'category-05':
                btn_item[5].classList.add("active");
                break;
            case 'category-06':
                btn_item[6].classList.add("active");
                break;
            case 'category-07':
                btn_item[7].classList.add("active");
                break;
            default:
                btn_item[0].classList.add("active");
                break;
        }
    */
}
// categoryNavStyle();

// 渲染到页面中的格式
var categoryWrap = document.querySelector(".category-con ul");

function toArtList(content) {
    var list = document.createElement("li");
    // list.id = content.id;
    var link = document.createElement("a");
    link.href = content.href;
    var imgWrap = document.createElement("div");
    imgWrap.classList.add("img");
    var img = document.createElement("img");
    img.src = content.cover;
    imgWrap.appendChild(img);
    // 左侧图片OK

    var con_r = document.createElement("div");
    con_r.classList.add("con");
    var title = document.createElement("h3");
    title.textContent = content.title;

    var infoWrap = document.createElement("div");
    var author = document.createElement("span");
    author.classList.add("user-name");
    author.textContent = "小鱼情感";
    var date = document.createElement("span");
    date.textContent = content.date;

    infoWrap.appendChild(author);
    infoWrap.appendChild(date);

    var description = document.createElement("p");
    description.textContent = content.description;


    con_r.appendChild(title);
    con_r.appendChild(infoWrap);
    con_r.appendChild(description);


    link.appendChild(imgWrap);
    link.appendChild(con_r);

    // 右边完成

    list.appendChild(link);
    categoryWrap.appendChild(list);
}

// 渲染内容到页面
function artToPage() {
    for (var i = 0; i < art_info.length; i++) {
        for (var j = 0; j < art_info[i].list.length; j++) {
            toArtList(art_info[i].list[j]);
        }
    }
}
artToPage();

// 获取到左侧
var artNavList = btnWrap.querySelectorAll("li");
var artItem = document.querySelector(".category-con li");


// 点击左侧导航按钮，右侧内容跟随滑动
function addNavStyle() {
    for (var i = 0; i < artNavList.length; i++) {
        artNavList[i].index = i;

        artNavList[i].onclick = function () {
            // 向下滚动的距离
            var scrollHeight = this.index * artItem.offsetHeight * 5;

            clearInterval(window.timer);

            window.timer = setInterval(function () {
                var speed = (scrollHeight - scroll().top) / 10;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                window.scrollTo(0, scroll().top + speed);
                if (scroll().top == scrollHeight) {
                    clearInterval(window.timer);
                }
            }, 15)

            // 移除所有的class
            for (var j = 0; j < artNavList.length; j++) {
                artNavList[j].classList.remove("active");
            }

            // 点击添加class
            this.classList.add("active");
        }
    }
}
addNavStyle();

// 右侧滑动，左侧导航切换选中
function artConScroll() {
    console.log(window.scrollY);
}
// artConScroll();

// 返回高度
function scroll() {
    return {
        "top": document.body.scrollTop + document.documentElement.scrollTop,
        "left": document.body.scrollLeft + document.documentElement.scrollLeft
    }
}

// 返回顶部

function goTop() {
    var gotop = document.querySelector(".gotop");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > window.screen.height) {
            gotop.style.opacity = 1;
        } else {
            gotop.style.opacity = 0;
        }
    }
    gotop.onclick = function () {
        document.documentElement.scrollTop = 0;
    }
}
goTop();