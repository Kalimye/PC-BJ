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
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 3,
    name: "皓霖导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 4,
    name: "木子导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 5,
    name: "心怡导师",
    title: "女性心理与行为侧写师",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 6,
    name: "泊乔导师",
    title: "国家首批情感挽回专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 7,
    name: "文琪导师",
    title: "高级两性心理学专家",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
}, {
    id: 8,
    name: "文心导师",
    title: "婚姻恋爱咨询师",
    intro: "擅长感情修复与挽回，情感维系、恋爱狙击等。对于当前社会大环境下的一个情感变化发展趋势有独到了解，有自己一套专业的系统理论。",
    message: "爱情是人生必不可少的一部分，没有了爱情的人生谈不上完整，学会去爱，才会拥有美丽完整的人生。",
    image: "/pc/images/tutor/block-tutor-01.png"
},];


// 弹出层的背景
var layerBox = document.querySelector(".layer-box");


// 弹出层模态框
var btn = document.querySelectorAll(".more-tutor ul li");

// 弹出层中的导师头像
var tutorImg = layerBox.querySelector(".con-l img");

// 点击弹出
for (i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].onclick = function () {
        console.log(this.index);
        layerBox.style.display = "flex";
        document.querySelector(".con-l img").src = tutorBlock[this.index].image;
        // 未解决

        // tutorImg.setAttribute("src",tutorBlock[this.index].image);
    }
}
// for (var i = 0; i < textObj.length; i++) {
//     textObj[i].index = i;
//     textObj[i].onclick = function () {
//         alert(this.index + 1);
//     }
// }

// btn.onclick = function () {
// }

// btn.forEach((item, index) => {
//     item.onclick = function () {
//         // tutorImg.src = tutorBlock[index].image;
//         // console.log(tutorBlock[index]);
//     }
// })


var closeBtn = document.querySelector(".closeBtn");
closeBtn.onclick = function () {
    layerBox.style.display = "none";
}







