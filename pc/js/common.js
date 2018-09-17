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

// 优质干货标题，封面图，时间，日期，描述，链接
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
        }, {
            title: "七年感情一朝散，我们的爱情“过期”了",
            description: "“我们在一起七年了，除了没领证，我们就和夫妻一样，可如今她说走就走了。”小鱼情感新来的学员刘天（化名）为我们讲述了他和女友的情感经历。",
            date: "2018-06-15",
            href: "/pc/article/article-01-03.html",
            cover: "/pc/images/article/cover/cover-03.png"
        }, {
            title: "爱情没有新鲜感 恩爱情侣告诉你需要三种“距离感”来拯救",
            description: "他们的分开让很多朋友难以置信，曾经令人羡慕的模范夫妻，如今也已经各奔东西。他们在一起的2年吵过的架屈指可数，该有的仪式感他们也从不落下。最终如普通情侣一样分手成了结局。",
            date: "2018-07-25",
            href: "/pc/article/article-01-04.html",
            cover: "/pc/images/article/cover/cover-04.png"
        }, {
            title: "面对新鲜感缺失该怎么办？",
            description: "从当初的一见钟情，到现在的相伴携手，李超跟女友已经一起走过三个年头了。按理说，历经了三年的磨合，两人之间应该越来越契合，可事实上，最近一年里两人之间的矛盾和摩擦越来越多，一丁点风吹草动都会引发，两人之间的争吵。",
            date: "2018-07-27",
            href: "/pc/article/article-01-05.html",
            cover: "/pc/images/article/cover/cover-05.png"
        }]
    },
    {
        type: "02",
        category: "婚姻破裂",
        author: "小鱼情感",
        list: [{
            title: "男人你听我说，你所追求的是“保姆式妻子”和“守寡式婚姻”",
            description: "她是一个电视台的主持人，身边难免会有很多追求者，虽然我们已经结婚了，但我一直对她很不放心，借着家里让生孩子的机会，想让她换一份普通的工作，毕竟成了家的女人又要生孩子了，在外面这样抛头露面也不大好。",
            date: "2018-01-26",
            href: "/pc/article/article-02-01.html",
            cover: "/pc/images/article/cover/cover-06.png"
        }, {
            title: "傻女人，你真以为用孩子就能留住婚姻？！",
            description: "早在2016年，朋友的老公出轨了公司助理。去年，朋友为了挽留老公，又养了二胎，本以为两人找回了恩爱，谁知前几天她又找我倾诉，抱怨上天的不公平。",
            date: "2018-01-27",
            href: "/pc/article/article-02-02.html",
            cover: "/pc/images/article/cover/cover-07.png"
        }, {
            title: "老公爱聊骚，我除了忍别无他法",
            description: "第一次发现他和前女友联系的时候，我以为是这个前女友主动勾引他，冲动之下发信息去说了对方，但是没有辱骂。他前女友是个很果断的人，表示会拉黑我老公永不联系——我不知道的是，从那时起，我老公就开始记恨我了。",
            date: "2018-01-26",
            href: "/pc/article/article-02-03.html",
            cover: "/pc/images/article/cover/cover-08.png"
        }, {
            title: "原配实力虐小三，男人想复婚只能靠跪舔吗？",
            description: "当年我也是因为一念之差走错了路，当初妻子和我结婚的时候，我一穷二白什么都没有，她一直做我背后的女人鼓励我，后来开始创业了，用五年的时间赚了很多钱，换了大房子，也要了第二胎，本来生活小康，一双儿女，家庭也是很幸福的。",
            date: "2018-01-31",
            href: "/pc/article/article-02-04.html",
            cover: "/pc/images/article/cover/cover-09.png"
        }, {
            title: "你的面子值钱，爱人的尊严就分文不值吗？",
            description: "有一个回答说得很好，意思大致是这样的：你的婚姻之所以疲惫不堪，是因为你把最好的态度给了外人，最坏的态度给了爱人。",
            date: "2018-07-23",
            href: "/pc/article/article-02-05.html",
            cover: "/pc/images/article/cover/cover-10.png"
        }]
    }, {
        type: "03",
        category: "恋人劈腿",
        author: "小鱼情感",
        list: [{
            title: "女朋友出轨了，还有必要挽回吗？",
            description: "男女交往的过程其实是一个相互吸引的过程，如果你对她不再具有吸引力，她又怎么会一直留在你身边？当她对这段感情越来越失望的时候，眼前出现了比你更优秀的男人，她会选择出轨也就不难理解了。面对出轨的女朋友还有必要挽回吗？又该如何挽回？",
            date: "2018-01-09",
            href: "/pc/article/article-03-01.html",
            cover: "/pc/images/article/cover/cover-11.png"
        }, {
            title: "只有上了床才叫出轨吗？这里有你想要的答案",
            description: "女人是天生容易嫉妒的种群，在各种各样咨询的案例中，很多女人提出分手，都是因为男人没有拿捏好和其他女性相处的“界线”，令女人在疑似出轨或是实锤出轨的怀疑中选择了分手。",
            date: "2018-01-11",
            href: "/pc/article/article-03-02.html",
            cover: "/pc/images/article/cover/cover-12.png"
        }, {
            title: "出轨的男人如何挽回爱情？",
            description: "在两性关系中，很多男人出轨并不是因为自己移情别恋了，只是出于一种生理上的渴求，抵制不住外界诱惑而犯了错误。然而不管背后的原因如何，背叛就是对感情的最极致的伤害，连基本的忠诚都做不到，",
            date: "2018-01-18",
            href: "/pc/article/article-03-03.html",
            cover: "/pc/images/article/cover/cover-13.png"
        }, {
            title: "游走于两个女人间的劈腿男，竟然是不满足的受害者？",
            description: "提到恋爱关系中的劈腿，每个人脑海里浮现的，都是背叛感情的一方太渣，然而奇怪的是，主动劈腿的一方却以受害者形象自居，认为自己之所以会爱上伴侣以外的人，都是伴侣不够好，逼的自己另寻新欢，对此大家怎么看？",
            date: "2018-06-22",
            href: "/pc/article/article-03-04.html",
            cover: "/pc/images/article/cover/cover-14.png"
        }, {
            title: "精神出轨，我还能挽回吗？",
            description: "“饮食男女，人之大欲存焉”，人这一生离不开两件事：饮食、男女关系。提到男女关系，就不得不提男人出轨的事情，出轨也分两种，肉体出轨和精神出轨。",
            date: "2018-07-31",
            href: "/pc/article/article-03-05.html",
            cover: "/pc/images/article/cover/cover-15.png"
        }]
    }, {
        type: "04",
        category: "矛盾积累",
        author: "小鱼情感",
        list: [{
            title: "冷战，只会让矛盾长期积压",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-01-01",
            href: "/pc/article/article-04-01.html",
            cover: "/pc/images/article/cover/cover-16.png"
        },{
            title: "小矛盾堆积成大问题，分手来的猝不及防",
            description: "小夏是个做事很有条理，对人对事比较严格的姑娘，什么事情都喜欢提前计划好，可刘亮不同，觉得这计划赶不上变化，没必要事事都预先安排好，因为刘亮的“变化”，导致小夏好几次被放了鸽子。",
            date: "2018-08-30",
            href: "/pc/article/article-04-02.html",
            cover: "/pc/images/article/cover/cover-17.png"
        },{
            title: "“破窗效应”告诉你：小事背后隐藏分手本质",
            description: "在小鱼情感从事挽回行业多年，接触到的学员中，有60%的人是因为小事爆发争吵而分手，很多学员也疑惑为什么伴侣会因为鸡毛蒜皮的小事就毅然决然提出分手。",
            date: "2018-09-02",
            href: "/pc/article/article-04-03.html",
            cover: "/pc/images/article/cover/cover-18.png"
        },{
            title: "小矛盾膨胀激化，最终引发分手，你做错了什么？",
            description: "我们两个恋爱大约有3年了，本来是准备明年夏天结婚的，那时候她送走了毕业班，压力会减小很多，也有时间来筹备婚礼。但从今年夏天开始，我们两个之间时有矛盾发生，完全没有了曾经水乳交融的那种融洽感。",
            date: "2018-09-03",
            href: "/pc/article/article-04-04.html",
            cover: "/pc/images/article/cover/cover-19.png"
        },{
            title: "因为小事而分手？那是因为你不知道她忍了多久",
            description: "不少小鱼情感的学员在我们问及分手原因的时候，都说是女友太作，因为鸡毛蒜皮的小事就提了分手，其实这件小事的背后隐藏着她太久的隐忍和失望，看过了下面这两位学员的案例，可能你就对“那件分手的小事”有了新的认识。",
            date: "2018-09-04",
            href: "/pc/article/article-04-05.html",
            cover: "/pc/images/article/cover/cover-20.png"
        }]
    }, {
        type: "05",
        category: "挽回干货",
        author: "小鱼情感",
        list: [{
            title: "情侣分手后复合的概率是82%，你为什么失败了？",
            description: "心理动机会影响人的行为模式，很多人在自行挽回的途中会迷失方向，以至于忘记了自己最初挽回的原因，由此就产生了很多错误的挽回方式。比如无下限的纠缠，讨好和自残等，没想到对方非但不领情，反而在你的仓促挽回中毫不留情的拉黑你，选择逃离你",
            date: "2018-01-22",
            href: "/pc/article/article-05-01.html",
            cover: "/pc/images/article/cover/cover-21.png"
        },{
            title: "当爱情被直男癌症状击垮 我该如何挽回？",
            description: "一些在事业和财富都小有成绩的人经常会找到小鱼情感倾诉：老天将稳定富足的生活带给他们，同时也将他们的感情生活变得面目全非，很多原本如胶似漆的情侣逐渐变得感情淡漠、双方越走越远直至最后分手，而直到分手以后，很多人都还不知道问题出在哪，更不知道如何挽回，要么死缠烂打、要么冷战到底，结果最后的结局都是一样：彻底分手",
            date: "2018-01-27",
            href: "/pc/article/article-05-02.html",
            cover: "/pc/images/article/cover/cover-22.png"
        },{
            title: "当心了！男人只想玩暧昧的几种表现，女生必看！",
            description: "最近有个男生主动接近她，表现得很殷勤。姑娘最怕自作多情，对号入座，就没往感情那方面考虑，只是把他的关心当做朋友的好意而已。",
            date: "2018-02-11",
            href: "/pc/article/article-05-03.html",
            cover: "/pc/images/article/cover/cover-23.png"
        },{
            title: "因“依恋损伤”而分手，如何快速走出心理创伤？",
            description: "除了安全型的恋人，其它三种都不属于健康的成人依恋关系，回忆一下你在一段恋爱中的表现，如果你经常敏感多疑，无法相信另一半的话，怀疑对方会随时背叛自己，时常陷入没有安全感的恐慌状态中，这说明，你曾经在感情中遭受过一些伤害，让你产生了心理防御机制，无法真心的去信任亲密关系，因此陷入了“依恋损伤”中",
            date: "2018-03-22",
            href: "/pc/article/article-05-04.html",
            cover: "/pc/images/article/cover/cover-24.png"
        },{
            title: "谈了100次恋爱屡战屡败？因为你陷入了“低自尊型恋爱”",
            description: "在心理学上，有一种解释为，你的心理状态会驱动你的言语和行为，这也是很多感情无疾而终的原因，也许你会觉得自己没什么问题，没犯什么出轨之类的原则性错误，但爱情偏偏就不眷顾你。",
            date: "2018-04-04",
            href: "/pc/article/article-05-05.html",
            cover: "/pc/images/article/cover/cover-25.png"
        },]
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