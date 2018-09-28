var tutorBlock = [{
    id: 1,
    name: "谧沙导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 2,
    name: "孑然导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-02.png"
}, {
    id: 3,
    name: "皓霖导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-03.png"
}, {
    id: 4,
    name: "木子导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-04.png"
}, {
    id: 5,
    name: "心怡导师",
    title: "女性心理与行为侧写师",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-05.png"
}, {
    id: 6,
    name: "泊乔导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-06.png"
}, {
    id: 7,
    name: "文琪导师",
    title: "高级两性心理学专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-07.png"
}, {
    id: 8,
    name: "文心导师",
    title: "婚姻恋爱咨询师",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-08.png"
}, ];



// 渲染更多导师列表

var tutorListWrap = document.querySelector(".more-tutor ul");

for (var i = 0; i < tutorBlock.length; i++) {
    var li = document.createElement("li");

    // 图片外面的包裹层
    var divImg = document.createElement("div");
    divImg.classList.add("img");

    // 导师图片
    var img = document.createElement("img");
    img.src = tutorBlock[i].image;
    img.alt = tutorBlock[i].name;

    // 查看更多
    var divMore = document.createElement("div");
    divMore.classList.add("tutor-layer");
    divMore.textContent = "查看更多";

    // 导师名字
    var strong = document.createElement("strong");
    strong.textContent = tutorBlock[i].name;

    // 导师简介
    var p = document.createElement("p");
    p.textContent = tutorBlock[i].title;

    divImg.appendChild(img);
    divImg.appendChild(divMore);
    li.appendChild(divImg);
    li.appendChild(strong);
    li.appendChild(p);
    tutorListWrap.appendChild(li);
}

// 弹出层的背景
var layerBox = document.querySelector(".layer-box");

// 显示弹出层
function openLayer() {

    // 弹出层模态框
    var btn = document.querySelectorAll(".more-tutor ul li");

    // 弹出层中的导师头像
    var tutorImg = layerBox.querySelector(".con-l img"); //头像
    var tutorName = layerBox.querySelector(".con-l strong"); //名字
    var tutorTitle = layerBox.querySelector(".con-l p"); // 标题
    var tutorIntro = layerBox.querySelector(".con-intro"); // 简介
    var tutorMessage = layerBox.querySelector(".con-message"); //寄语
    // 点击弹出
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function () {

            // 显示弹出层
            layerBox.style.display = "flex";

            // 导师头像
            tutorImg.src = tutorBlock[this.index].image;

            // 导师名字
            tutorName.textContent = tutorBlock[this.index].name;

            // 导师标题
            tutorTitle.textContent = tutorBlock[this.index].title;

            // 导师简介
            tutorIntro.textContent = tutorBlock[this.index].intro;

            // 导师寄语
            tutorMessage.textContent = tutorBlock[this.index].message;
        }
    }
}
openLayer();

// 关闭弹出层
var closeBtn = document.querySelector(".closeBtn");
closeBtn.onclick = function () {
    layerBox.style.display = "none";
}