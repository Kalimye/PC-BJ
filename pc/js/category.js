var btnWrap = document.querySelector(".category-left ul"); // 获取左侧按钮
var btnWrap = document.querySelector(".category-left ul");

article.forEach(item => {

    var btnLi = document.createElement("li");
    var btnLink = document.createElement("a");

    btnLink.href = item.link;
    btnLink.textContent = item.name;

    btnLi.appendChild(btnLink);

    btnWrap.appendChild(btnLi);
});

var btn_item = btnWrap.getElementsByTagName("li");

// 获取后缀名
let pathname = window.location.pathname;
const pathnameArr = pathname.split('/');
pathname = pathnameArr[pathnameArr.length - 1];
pathname = pathname.split('.')[0];

// 根据路径名字进行判断，给li加样式
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
        btn_item[1].classList.add("active");
        break;
}


