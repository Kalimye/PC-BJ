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

function phone() {
    var phone_number = document.querySelectorAll(".phone-number");
    for (var i = 0; i < phone_number.length; i++) {
        phone_number[i].textContent = 'xxxx-xxx-xxx';
    }
}
phone();


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
        name: "挽回爱情",
        class: "save-love",
        link: "/pc/save-love.html"
    },
    {
        name: "挽救婚姻",
        class: "marriage",
        link: "/pc/marriage.html"
    },
    {
        name: "情感专栏",
        class: "category",
        link: "/pc/category.html"
    },
    {
        name: "权威专家",
        class: "tutor",
        link: "/pc/tutor.html"
    },
    {
        name: "免费咨询",
        class: "server",
        link: "/pc/server.html"
    },
    {
        name: "关于我们",
        class: "about",
        link: "/pc/about.html"
    },
];

// 渲染导航

function navigation() {
    var nav = document.querySelector(".nav-list");
    for (var i = 0; i < navArray.length; i++) {
        var nav_item = document.createElement("li");
        var nav_a = document.createElement("a");

        nav_item.classList.add(navArray[i].class);
        nav_a.href = navArray[i].link;
        nav_a.textContent = navArray[i].name;

        nav_item.appendChild(nav_a);
        nav.appendChild(nav_item);
    }
}
navigation();

// 文章分类标题部分
var article = [{
        name: "感情淡化",
        link: "#article-02"
    },
    {
        name: "婚姻破裂",
        link: "#article-07"
    },
    {
        name: "恋人劈腿",
        link: "#article-12"
    },
    {
        name: "矛盾积累",
        link: "#article-17"
    },
    {
        name: "挽回干货",
        link: "#article-22"
    },
    {
        name: "性格不合",
        link: "#article-27"
    },
    {
        name: "异地恋情",
        link: "#article-32"
    }
];

// 优质干货标题，封面图，时间，日期，描述，链接
var art_info = [{
        type: "01",
        category: "感情淡化",
        author: "小鱼情感",
        list: [{
            id: "article-01",
            title: "新鲜感褪去后，爱情该何去何从？",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-02-01",
            href: "/pc/article/article-01-01.html",
            cover: "/pc/images/article/cover/cover-01.png"
        }, {
            id: "article-02",
            title: "情侣间新鲜感殆尽，除了分手我们还能做什么？",
            description: "爱情如果能够始终维持在最初的甜蜜该多好，那就该省却了很多日后的争吵和烦恼。乍见之欢有多美好？那美好用语言是形容不出万一的。那时候，你们好像是两座宝矿，等待着对方开采。你们之间有着说不完的话，聚在一起聊天只嫌时间太短，不够你发挥。",
            date: "2018-05-20",
            href: "/pc/article/article-01-02.html",
            cover: "/pc/images/article/cover/cover-02.png"
        }, {
            id: "article-03",
            title: "七年感情一朝散，我们的爱情“过期”了",
            description: "“我们在一起七年了，除了没领证，我们就和夫妻一样，可如今她说走就走了。”小鱼情感新来的学员刘天（化名）为我们讲述了他和女友的情感经历。",
            date: "2018-06-15",
            href: "/pc/article/article-01-03.html",
            cover: "/pc/images/article/cover/cover-03.png"
        }, {
            id: "article-04",
            title: "爱情没有新鲜感 恩爱情侣告诉你需要三种“距离感”来拯救",
            description: "他们的分开让很多朋友难以置信，曾经令人羡慕的模范夫妻，如今也已经各奔东西。他们在一起的2年吵过的架屈指可数，该有的仪式感他们也从不落下。最终如普通情侣一样分手成了结局。",
            date: "2018-07-25",
            href: "/pc/article/article-01-04.html",
            cover: "/pc/images/article/cover/cover-04.png"
        }, {
            id: "article-05",
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
            id: "article-06",
            title: "男人你听我说，你所追求的是“保姆式妻子”和“守寡式婚姻”",
            description: "她是一个电视台的主持人，身边难免会有很多追求者，虽然我们已经结婚了，但我一直对她很不放心，借着家里让生孩子的机会，想让她换一份普通的工作，毕竟成了家的女人又要生孩子了，在外面这样抛头露面也不大好。",
            date: "2018-01-26",
            href: "/pc/article/article-02-01.html",
            cover: "/pc/images/article/cover/cover-06.png"
        }, {
            id: "article-07",
            title: "傻女人，你真以为用孩子就能留住婚姻？！",
            description: "早在2016年，朋友的老公出轨了公司助理。去年，朋友为了挽留老公，又养了二胎，本以为两人找回了恩爱，谁知前几天她又找我倾诉，抱怨上天的不公平。",
            date: "2018-01-27",
            href: "/pc/article/article-02-02.html",
            cover: "/pc/images/article/cover/cover-07.png"
        }, {
            id: "article-08",
            title: "老公爱聊骚，我除了忍别无他法",
            description: "第一次发现他和前女友联系的时候，我以为是这个前女友主动勾引他，冲动之下发信息去说了对方，但是没有辱骂。他前女友是个很果断的人，表示会拉黑我老公永不联系——我不知道的是，从那时起，我老公就开始记恨我了。",
            date: "2018-01-26",
            href: "/pc/article/article-02-03.html",
            cover: "/pc/images/article/cover/cover-08.png"
        }, {
            id: "article-09",
            title: "原配实力虐小三，男人想复婚只能靠跪舔吗？",
            description: "当年我也是因为一念之差走错了路，当初妻子和我结婚的时候，我一穷二白什么都没有，她一直做我背后的女人鼓励我，后来开始创业了，用五年的时间赚了很多钱，换了大房子，也要了第二胎，本来生活小康，一双儿女，家庭也是很幸福的。",
            date: "2018-01-31",
            href: "/pc/article/article-02-04.html",
            cover: "/pc/images/article/cover/cover-09.png"
        }, {
            id: "article-10",
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
            id: "article-11",
            title: "女朋友出轨了，还有必要挽回吗？",
            description: "男女交往的过程其实是一个相互吸引的过程，如果你对她不再具有吸引力，她又怎么会一直留在你身边？当她对这段感情越来越失望的时候，眼前出现了比你更优秀的男人，她会选择出轨也就不难理解了。面对出轨的女朋友还有必要挽回吗？又该如何挽回？",
            date: "2018-01-09",
            href: "/pc/article/article-03-01.html",
            cover: "/pc/images/article/cover/cover-11.png"
        }, {
            id: "article-12",
            title: "只有上了床才叫出轨吗？这里有你想要的答案",
            description: "女人是天生容易嫉妒的种群，在各种各样咨询的案例中，很多女人提出分手，都是因为男人没有拿捏好和其他女性相处的“界线”，令女人在疑似出轨或是实锤出轨的怀疑中选择了分手。",
            date: "2018-01-11",
            href: "/pc/article/article-03-02.html",
            cover: "/pc/images/article/cover/cover-12.png"
        }, {
            id: "article-13",
            title: "出轨的男人如何挽回爱情？",
            description: "在两性关系中，很多男人出轨并不是因为自己移情别恋了，只是出于一种生理上的渴求，抵制不住外界诱惑而犯了错误。然而不管背后的原因如何，背叛就是对感情的最极致的伤害，连基本的忠诚都做不到，",
            date: "2018-01-18",
            href: "/pc/article/article-03-03.html",
            cover: "/pc/images/article/cover/cover-13.png"
        }, {
            id: "article-14",
            title: "游走于两个女人间的劈腿男，竟然是不满足的受害者？",
            description: "提到恋爱关系中的劈腿，每个人脑海里浮现的，都是背叛感情的一方太渣，然而奇怪的是，主动劈腿的一方却以受害者形象自居，认为自己之所以会爱上伴侣以外的人，都是伴侣不够好，逼的自己另寻新欢，对此大家怎么看？",
            date: "2018-06-22",
            href: "/pc/article/article-03-04.html",
            cover: "/pc/images/article/cover/cover-14.png"
        }, {
            id: "article-15",
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
            id: "article-16",
            title: "冷战，只会让矛盾长期积压",
            description: "当爱情褪去最初火热的温度，逐渐向平淡中走去，爱情究竟是走向了细水长流、返璞归真，还是“不在沉默中爆发，就在沉默中灭亡”？对于杜昊来说，他的爱情，显然是走向了后者。因为就在他和女朋友相爱的第三年零五个月后，他们和平分手了。",
            date: "2018-01-01",
            href: "/pc/article/article-04-01.html",
            cover: "/pc/images/article/cover/cover-16.png"
        }, {
            id: "article-17",
            title: "小矛盾堆积成大问题，分手来的猝不及防",
            description: "小夏是个做事很有条理，对人对事比较严格的姑娘，什么事情都喜欢提前计划好，可刘亮不同，觉得这计划赶不上变化，没必要事事都预先安排好，因为刘亮的“变化”，导致小夏好几次被放了鸽子。",
            date: "2018-08-30",
            href: "/pc/article/article-04-02.html",
            cover: "/pc/images/article/cover/cover-17.png"
        }, {
            id: "article-18",
            title: "“破窗效应”告诉你：小事背后隐藏分手本质",
            description: "在小鱼情感从事挽回行业多年，接触到的学员中，有60%的人是因为小事爆发争吵而分手，很多学员也疑惑为什么伴侣会因为鸡毛蒜皮的小事就毅然决然提出分手。",
            date: "2018-09-02",
            href: "/pc/article/article-04-03.html",
            cover: "/pc/images/article/cover/cover-18.png"
        }, {
            id: "article-19",
            title: "小矛盾膨胀激化，最终引发分手，你做错了什么？",
            description: "我们两个恋爱大约有3年了，本来是准备明年夏天结婚的，那时候她送走了毕业班，压力会减小很多，也有时间来筹备婚礼。但从今年夏天开始，我们两个之间时有矛盾发生，完全没有了曾经水乳交融的那种融洽感。",
            date: "2018-09-03",
            href: "/pc/article/article-04-04.html",
            cover: "/pc/images/article/cover/cover-19.png"
        }, {
            id: "article-20",
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
            id: "article-21",
            title: "情侣分手后复合的概率是82%，你为什么失败了？",
            description: "心理动机会影响人的行为模式，很多人在自行挽回的途中会迷失方向，以至于忘记了自己最初挽回的原因，由此就产生了很多错误的挽回方式。比如无下限的纠缠，讨好和自残等，没想到对方非但不领情，反而在你的仓促挽回中毫不留情的拉黑你，选择逃离你",
            date: "2018-01-22",
            href: "/pc/article/article-05-01.html",
            cover: "/pc/images/article/cover/cover-21.png"
        }, {
            id: "article-22",
            title: "当爱情被直男癌症状击垮 我该如何挽回？",
            description: "一些在事业和财富都小有成绩的人经常会找到小鱼情感倾诉：老天将稳定富足的生活带给他们，同时也将他们的感情生活变得面目全非，很多原本如胶似漆的情侣逐渐变得感情淡漠、双方越走越远直至最后分手，而直到分手以后，很多人都还不知道问题出在哪，更不知道如何挽回，要么死缠烂打、要么冷战到底，结果最后的结局都是一样：彻底分手",
            date: "2018-01-27",
            href: "/pc/article/article-05-02.html",
            cover: "/pc/images/article/cover/cover-22.png"
        }, {
            id: "article-23",
            title: "当心了！男人只想玩暧昧的几种表现，女生必看！",
            description: "最近有个男生主动接近她，表现得很殷勤。姑娘最怕自作多情，对号入座，就没往感情那方面考虑，只是把他的关心当做朋友的好意而已。",
            date: "2018-02-11",
            href: "/pc/article/article-05-03.html",
            cover: "/pc/images/article/cover/cover-23.png"
        }, {
            id: "article-24",
            title: "因“依恋损伤”而分手，如何快速走出心理创伤？",
            description: "除了安全型的恋人，其它三种都不属于健康的成人依恋关系，回忆一下你在一段恋爱中的表现，如果你经常敏感多疑，无法相信另一半的话，怀疑对方会随时背叛自己，时常陷入没有安全感的恐慌状态中，这说明，你曾经在感情中遭受过一些伤害，让你产生了心理防御机制，无法真心的去信任亲密关系，因此陷入了“依恋损伤”中",
            date: "2018-03-22",
            href: "/pc/article/article-05-04.html",
            cover: "/pc/images/article/cover/cover-24.png"
        }, {
            id: "article-25",
            title: "谈了100次恋爱屡战屡败？因为你陷入了“低自尊型恋爱”",
            description: "在心理学上，有一种解释为，你的心理状态会驱动你的言语和行为，这也是很多感情无疾而终的原因，也许你会觉得自己没什么问题，没犯什么出轨之类的原则性错误，但爱情偏偏就不眷顾你。",
            date: "2018-04-04",
            href: "/pc/article/article-05-05.html",
            cover: "/pc/images/article/cover/cover-25.png"
        }, ]
    }, {
        type: "06",
        category: "性格不合",
        author: "小鱼情感",
        list: [{
            id: "article-26",
            title: "面对“性格不合 对你没感觉”的分手，我该如何挽回？",
            description: "王斌和方瑜曾是同在一个职场工作的同事，社交圈其实不太广的小斌在看到美丽贤淑的方瑜后马上就认定了对方就是自己要找的人，随后便展开了热烈的攻势，方瑜虽然第一眼看上去觉得小斌显得并不出众，但由于他诚恳的态度再加一直以来很踏实的工作作风，也很快便和小斌确定了恋爱关系，一时间甜蜜的恋情让周围所有人都艳羡不已。",
            date: "2018-01-24",
            href: "/pc/article/article-06-01.html",
            cover: "/pc/images/article/cover/cover-26.png"
        }, {
            id: "article-27",
            title: "优柔寡断的男人如何改善性格成功挽回？",
            description: "余先生这个人性格很好，平易近人，身边的朋友同事都特别喜欢他。而这样的性格也让他找到了女友。按照一般的想象，跟平和的男人在一起生活应该会平淡而幸福，虽说没有什么大的波动但贵在稳定，过过安稳的小日子。",
            date: "2018-05-24",
            href: "/pc/article/article-06-02.html",
            cover: "/pc/images/article/cover/cover-27.png"
        }, {
            id: "article-28",
            title: "分手了，都怪我性格太内向了！",
            description: "说起人的性格，首先浮现在你脑海里的，也无非就是“内向”、“外向”两种。不同的性格有各自的优势劣势，但性格本身没有高下之别。然而，我们小鱼情感曾接手的一位学员却将自己错失爱情的原因，一股脑归咎于“内向性格”，下面来看看他的情感经历吧。",
            date: "2018-07-16",
            href: "/pc/article/article-06-03.html",
            cover: "/pc/images/article/cover/cover-28.png"
        }, {
            id: "article-29",
            title: "别真信了“性格不合”的分手理由，你必须要看清这背后隐藏的问题",
            description: "这可能是最烂大街的分手理由了，许多人在听到这样的话以后也会彻底丧失挽回的信心，觉得这种深层次的问题是没办法改变的。可他们却忘了应该跳出这句抽象的理由，去真正找出两人的关系当中存在的问题。",
            date: "2018-07-24",
            href: "/pc/article/article-06-04.html",
            cover: "/pc/images/article/cover/cover-29.png"
        }, {
            id: "article-30",
            title: "性格偏执型恋人追求爱情完美 最终断送幸福",
            description: "董青（女化名）是我在小鱼情感最近接触的学员，正如微信中所言，她就是爱情中的“完美主义者”。董青对待爱情有自己的一套标准，既然两个人自愿选择在一起，那么为了心中完美的爱情，严格要求男友“服从”，特别是外表形象和交友方面。",
            date: "2018-07-26",
            href: "/pc/article/article-06-05.html",
            cover: "/pc/images/article/cover/cover-30.png"
        }, ]
    }, {
        type: "07",
        category: "感情淡化",
        author: "小鱼情感",
        list: [{
            id: "article-31",
            title: "异地恋分手：别把原因一味归咎给距离！",
            description: "学员英赫（化名）和女友银河（化名）感情基础其实是很坚实的，他们俩相识于大学校园，大一就确立了恋爱关系，大学这四年，他们正经谈了好一段甜蜜纯粹的恋爱。",
            date: "2018-01-05",
            href: "/pc/article/article-07-01.html",
            cover: "/pc/images/article/cover/cover-31.png"
        }, {
            id: "article-32",
            title: "两年异地恋，三个月见一面，找个小姐怎么了？",
            description: "我和女友已经在一起五年了，但最后两年是异地恋，因为一时糊涂，我出轨了，不，也不算出轨，就是因为生理需求，找了个小姐，没想到那个小姐对我纠缠不清，最后闹得让女友知道了，说我恶心，不肯原谅我。",
            date: "2018-02-05",
            href: "/pc/article/article-07-02.html",
            cover: "/pc/images/article/cover/cover-32.png"
        }, {
            id: "article-33",
            title: "异地恋是真的不容易，你看我这满满的火车票就知道了",
            description: "林明和女友菲菲大学时就在一起了，毕业之后，林明选择去外地发展，菲菲听从父母的安排考取了当地的公务员。两人开始了异地恋，林明每次休假就会买上一张车票去看菲菲。原本以为感情深厚，任何困难都能克服。可是没想到，菲菲还是提出了分手。",
            date: "2018-02-23",
            href: "/pc/article/article-07-03.html",
            cover: "/pc/images/article/cover/cover-33.png"
        }, {
            id: "article-34",
            title: "一段被包养的异地恋情，还有机会挽回吗？",
            description: "陈熙是我的一个朋友，也是我们小鱼情感的一位学员，最近他遇到了情感问题，大半夜和我一顿倾诉，我隐约记得两个人应该才谈了不到一年的时间，怎么就要闹分手了呢？",
            date: "2018-04-09",
            href: "/pc/article/article-07-04.html",
            cover: "/pc/images/article/cover/cover-34.png"
        }, {
            id: "article-35",
            title: "异地恋，到底有多煎熬？网友：累了，真的累了",
            description: "我叫王宇，前几天和女友分手后，意外在网上看到了小鱼情感关于挽回的文章，其中的异地挽回方案戳中了我的心窝，于是我迫不及待的找到了小鱼情感挽回团队，讲述了我和女友的异地故事。",
            date: "2018-05-18",
            href: "/pc/article/article-05-05.html",
            cover: "/pc/images/article/cover/cover-35.png"
        }]
    }
];

// 替换二维码中的文字
var footerQr = document.querySelector(".footer-top .qrcode-02");
footerQr.querySelector("p").textContent = "小鱼情感微信公众号";

// 公司名字
var companyName = document.querySelector(".footer-logo p"); 
companyName.textContent = "北京小鱼果果科技有限公司";

var copyright = document.querySelector(".copyright");
copyright.innerHTML = "<p>京ICP备18050673号-1</p><p>北京小鱼果果科技有限公司</p>"

// 修改底部导航内容
var footNav = document.querySelector(".footer-nav ul");

footNav.innerHTML = '<li><a href="/pc/about.html">关于小鱼情感</a></li><li><a href="/pc/server.html">咨询客服</a></li><li><a href="/pc/save-love.html">挽回爱情</a></li><li><a href="/pc/marriage.html">挽救婚姻</a></li><li><a href="/pc/category.html">情感专栏</a></li>';

// 根据设备判断跳转到移动端

var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (is_mobi) {
    window.location.href = "https://xiaoyuqinggan.com/im/";
}