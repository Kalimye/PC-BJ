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
    intro: "帮助近万例客户把握住至关重要的“升温”节点，具有丰富的分手挽回经验，接受众多分手挽回案例，善于设计各种偏门方法技巧，帮助客户搞定目标，受到业内一致好评。",
    message: "我知道你们跟我一样，每天面对这不同的压力不同的挑战，或许你在拍视频，或许你在做设计，或许你朝九晚五在上班，但是anyway，如果你前面还有路的话，答应我一定要跑下去。",
    image: "/pc/images/tutor/block-tutor-02.png"
}, {
    id: 3,
    name: "皓霖导师",
    title: "国家首批情感挽回专家",
    intro: "实战型挽回专家，擅长长期关系状态维护，婚姻家庭关系巩固，分离小三，擅长修正性格缺陷，挖掘伴侣的情感需求，通过沟通唤起对方情绪，夸大吸引力。针对异地异国恋、情感缺失类有独到见解。",
    message: "一段稳定的感情需要爱与被爱的人都拥用爱的能力，爱别人，首先要学会爱自己。",
    image: "/pc/images/tutor/block-tutor-03.png"
}, {
    id: 4,
    name: "木子导师",
    title: "国家首批情感挽回专家",
    intro: "擅长恋爱分析把控、狙击恋爱目标，擅长运用男女思维的不同换位思考，分析问题。对于亲密关系保持、亲子关系、分离小三等当今中国普遍的情感问题，有着独到的解决方法。",
    message: "爱情不是占有，不是支配，而是你愿意拿出生命中最好的时光，不问将来，不问结果，只想一起度过。",
    image: "/pc/images/tutor/block-tutor-04.png"
}, {
    id: 5,
    name: "心怡导师",
    title: "女性心理与行为侧写师",
    intro: "对于安全感缺失、情感疲惫型分手、两性关系信任不足、婚前焦虑、家庭关系（婆媳关系、亲子关系）、失恋及离婚后心理调适等普遍情感问题有着独到的高效解决办法。        ",
    message: "我习惯了给人向导生活，所以我见不得你迷茫。",
    image: "/pc/images/tutor/block-tutor-05.png"
}, {
    id: 6,
    name: "泊乔导师",
    title: "国家首批情感挽回专家",
    intro: "精准把握女性心理，帮助学员分析目标的心理，擅长心态建设，通过与目标的聊天互动建立吸引力。能够帮助学员在挽回过程中进行心态调整和魅力提升，已有数百狙击挽回成功案例，深受学员爱戴。      ",
    message: "感情中，每颗心都是炙热的，不要让爱的方式改变爱的长度。",
    image: "/pc/images/tutor/block-tutor-06.png"
}, {
    id: 7,
    name: "文琪导师",
    title: "高级两性心理学专家",
    intro: "专攻目标的心理分析和行为侧写，擅长从细微处洞察目标的情绪状态，找到关系破裂的核心问题点，修复学员的情感关系以及错误的相处模式，进行二次全面吸引，内涵以及心灵全面提升，快速挽回。            ",
    message: "你要知道，这世界上有一个人是永远等着你的，不管是在什么时候，不管你在什么地方，反正你知道，总有这样一个人。",
    image: "/pc/images/tutor/block-tutor-07.png"
}, {
    id: 8,
    name: "文心导师",
    title: "婚姻恋爱咨询师",
    intro: "两性关系解读专家，擅长情感关系的修复和维护，时下情感热点问题撰稿，男女两性平衡关系研究，8年行业教学经验，通过培养学员爱的五种能力，完成目标的吸引以及稳固长期关系的发展。            ",
    message: "每一段感情都值得你拼尽全力去珍惜，但你只用蛮力，感情就碎了，力气用错了方向，人就丢了，我始终在前方的迷雾中，为你指引方向。",
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