(function () {
    // 获取侧边栏
    var side_bar = document.querySelector(".side-bar");

    // 创建广告位
    var ad = document.createElement("div");
    ad.classList.add("ad");

    // 设置广告位图片
    var adImg = document.createElement("img");
    //adImg.src = "/pc/images/article/common/ad.jpg";
    adImg.alt = "广告位";
    adImg.src = "/pc/images/article/public/ad.jpg";

    // 图片插入
    ad.appendChild(adImg);

    // 广告位插入
    side_bar.appendChild(ad);
})()