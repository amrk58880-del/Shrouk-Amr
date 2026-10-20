// =========================
// فتح حكايتنا بكلمة السر ❤️
// =========================

function unlockLove() {
    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("message");
    const loveLetter = document.getElementById("loveLetter");
    const musicplayer = document.getElementById("musicplayer");
    const loveCounter = document.getElementById("loveCounter");
    const surpriseGift = document.getElementById("surpriseGift");
    const audio = document.getElementById("myAudio");

    if (password === "shrouk") {
        message.textContent = "فتحت حكايتنا ❤️";

        loveLetter.hidden = false;
        musicplayer.hidden = false;
        loveCounter.hidden = false;
        surpriseGift.hidden = false;
document.getElementById("messagesEntry").hidden = false;
        startLoveCounter();

        // محاولة تشغيل الأغنية.
        // قد يحتاج المتصفح إلى ضغطة إضافية على زر التشغيل.
        if (audio) {
            audio.play().catch(() => {});
        }

    } else {document.getElementById("messagesEntry").hidden = true;
document.getElementById("messagesPage").hidden = true;
        message.textContent = "جربي كلمة السر تاني يا قلبي 💗";

        loveLetter.hidden = true;
        musicplayer.hidden = true;
        loveCounter.hidden = true;
        surpriseGift.hidden = true;

        document.getElementById("giftMessage").hidden = true;
    }
}


// =========================
// عداد حكايتنا ⏳
// بداية الحكاية: 5 يوليو 2026
// =========================

let loveCounterInterval = null;

function startLoveCounter() {
    const startDate = new Date(2026, 6, 5, 0, 0, 0);

    function updateCounter() {
        const now = new Date();
        let difference = now.getTime() - startDate.getTime();

        // لا نعرض وقتًا سالبًا إذا كان التاريخ في المستقبل.
        if (difference < 0) {
            difference = 0;
        }

        const totalSeconds = Math.floor(difference / 1000);

        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
    }

    updateCounter();

    if (loveCounterInterval !== null) {
        clearInterval(loveCounterInterval);
    }

    loveCounterInterval = setInterval(updateCounter, 1000);
}


// =========================
// فتح الهدية المفاجأة 🎁
// =========================

function openGift() {
    const giftMessage = document.getElementById("giftMessage");
    const giftButton = document.getElementById("giftButton");

    giftMessage.hidden = false;
    giftButton.textContent = "💝";

    giftMessage.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


// =========================
// الانتقال إلى صفحة الصور 📸
// =========================

function nextMessage() {
    const loveLetter = document.getElementById("loveLetter");
    const memories = document.getElementById("memories");

    if (loveLetter) {
        loveLetter.hidden = true;
    }

    if (memories) {
        memories.hidden = false;

        memories.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// =========================
// الانتقال إلى صفحة الفيديوهات 🎬
// =========================

function showVideos() {
    const memories = document.getElementById("memories");
    const videosPage = document.getElementById("videosPage");

    if (memories) {
        memories.hidden = true;
    }

    if (videosPage) {
        videosPage.hidden = false;

        videosPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// =========================
// الرجوع إلى صفحة الصور 📸
// =========================

function backToPhotos() {
    const videosPage = document.getElementById("videosPage");
    const memories = document.getElementById("memories");

    if (videosPage) {
        videosPage.hidden = true;
    }

    if (memories) {
        memories.hidden = false;

        memories.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


// =========================
// تكبير الصور 🖼️
// =========================

function openPhoto(src) {
    const viewer = document.getElementById("photoViewer");
    const expandedPhoto = document.getElementById("expandedPhoto");

    if (viewer && expandedPhoto) {
        expandedPhoto.src = src;
        viewer.style.display = "flex";
    }
}


// =========================
// إغلاق الصورة المكبرة
// =========================

function closePhoto() {
    const viewer = document.getElementById("photoViewer");

    if (viewer) {
        viewer.style.display = "none";
    }
}


// =========================
// التحكم في الموسيقى والفيديو 🎵
// =========================

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("myAudio");
    const videos = document.querySelectorAll(".video-gallery video");

    videos.forEach(function (video) {

        video.addEventListener("play", function () {
            if (audio) {
                audio.pause();
            }
        });

        video.addEventListener("ended", function () {
            // لا نشغل الأغنية تلقائيًا بعد انتهاء الفيديو.
            // يمكن لشروق تشغيلها من مشغل الموسيقى.
        });
    });
});


// =========================
// السماح بفتح الموقع بزر Enter
// =========================

document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");

    if (passwordInput) {
        passwordInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                unlockLove();
            }
        });
    }
});
// =========================
// صفحة رسائل من عمرو 💌
// =========================

let currentMood = "";
let currentMessageIndex = 0;

const moodMessages = {

    sad: {
        emoji: "🥺💗",
        messages: [
            "يا شوشو يا حبيبتي، متزعليش. نفسي أقدر أخد كل زعل من قلبك وأبدله بفرحة. إنتِ تستاهلي كل حاجة حلوة في الدنيا، وأنا نفسي أشوف ضحكتك دايمًا ❤️",

            "تعالي هنا يا أجمل حاجة في حياتي 🫂💗 حتى لو الدنيا ضايقتك، افتكري إن فيه حد بيتمنى يشوفك مبسوطة من قلبه. خدي نفس واهدي، وإن شاء الله بكرة يبقى أحلى.",

            "يا نور عيني، مش لازم تكوني قوية طول الوقت. من حقك تزعلي وتتعبي، وأنا بتمنى أكون سبب في راحتك وفرحتك، مش في زعلك أبدًا ❤️"
        ]
    },

    upset: {
        emoji: "🥹❤️",
        messages: [
            "يا شوشو، لو أنا زعلتك فحقك عليا. آخر حاجة أتمناها إني أكون سبب في دمعة من عيونك. يهمني أسمعك وأفهمك وأصلح اللي ضايقك، لأن مشاعرك غالية عندي جدًا ❤️",

            "أنا عارف إن كلمة آسف لوحدها مش كفاية دايمًا، وعشان كده نفسي أسمع منك إيه اللي وجعك وأحاول أصلحه. إنتِ مهمة عندي، وزعلك مش حاجة أستهون بيها 💗",

            "يا حبيبتي، حتى لو اختلفنا، نفسي نفضل نتكلم ونفهم بعض. مش لازم نتفق في كل حاجة، لكن مهم عندي إنك تحسي إني بسمعك وبحترم إحساسك ❤️"
        ]
    },

    happy: {
        emoji: "🥰💖",
        messages: [
            "يا سلام على ضحكتك يا شوشو! 🥹❤️ نفسي الفرحة دي تفضل معاكي طول العمر، ونفسي أكون موجود أشاركك اللحظات الحلوة واحدة واحدة.",

            "عارفة إيه اللي بيفرحني؟ إنك تكوني مبسوطة من قلبك. فرحتك غالية عندي، ونفسي دايمًا تلاقي أسباب جديدة تضحكي وتفرحي بيها يا أجمل بنت 💗",

            "طالما إنتِ مبسوطة، يبقى فيه حاجة حلوة في الدنيا تستاهل إننا نحتفل بيها! 😂💕 احكيلي بقى إيه اللي فرحك، أنا عايز أعرف كل التفاصيل."
        ]
    },

    miss: {
        emoji: "🥹💌",
        messages: [
            "وإنتِ كمان وحشتيني يا شوشو، حتى لو لسه كنا بنتكلم من شوية 😂❤️ فيه ناس وجودها بيخلّي اليوم أحلى، وإنتِ من الناس دي بالنسبالي.",

            "لو كنت جنبك دلوقتي، كنت هقولك قد إيه وجودك بيفرق معايا. لحد ما نتقابل، خلي الرسالة دي تفكرك إنك على بالي وليكي مكانة خاصة في قلبي 💗",

            "وحشتيني يا أجمل تفاصيل يومي 🥹💕 نفسي أحكيلك كل اللي حصل معايا وأسمع منك كل حاجة، حتى لو مجرد كلام عادي ملوش أي أهمية."
        ]
    },

    love: {
        emoji: "❤️💝",
        messages: [
            "يا شوشو، إنتِ غالية عندي بطريقة الكلام ساعات بيعجز يوصفها. بحب وجودك وضحكتك وكلامنا سوا، وبتمنى أكون دايمًا شخص يضيف لحياتك حب وراحة واطمئنان ❤️",

            "لو سألتيني إيه الأمنية اللي نفسي فيها؟ أتمنى نفضل نتعلم نفهم بعض ونفرح بعض، ونبني ذكريات حلوة نفتكرها ونضحك عليها بعد سنين طويلة 💍💗",

            "يا نور عيني، مش محتاج مناسبة علشان أقولك إنك شخص مميز عندي. أتمنى يومك يبقى جميل، وقلبك يبقى مرتاح، وتفضلي دايمًا شايفة قيمتك وجمالك ❤️"
        ]
    }

};


// فتح صفحة الرسائل
function openMessagesPage() {
    const sectionsToHide = [
        document.querySelector(".container"),
        document.getElementById("memories"),
        document.getElementById("videosPage")
    ];

    sectionsToHide.forEach(function (section) {
        if (section) {
            section.hidden = true;
        }
    });

    const messagesPage = document.getElementById("messagesPage");

    messagesPage.hidden = false;

    messagesPage.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


// اختيار الحالة المزاجية
function showMoodMessage(mood) {
    if (!moodMessages[mood]) {
        return;
    }

    currentMood = mood;
    currentMessageIndex = 0;

    displayMoodMessage();
}


// عرض الرسالة الحالية
function displayMoodMessage() {
    const mood = moodMessages[currentMood];

    if (!mood) {
        return;
    }

    document.getElementById("moodEmoji").textContent = mood.emoji;

    document.getElementById("moodText").textContent =
        mood.messages[currentMessageIndex];

    document.getElementById("moodMessage").hidden = false;
}


// عرض رسالة أخرى من نفس الحالة
function showAnotherMessage() {
    const mood = moodMessages[currentMood];

    if (!mood) {
        return;
    }

    currentMessageIndex =
        (currentMessageIndex + 1) % mood.messages.length;

    displayMoodMessage();
}


// الرجوع إلى الموقع
function closeMessagesPage() {
    document.getElementById("messagesPage").hidden = true;

    const container = document.querySelector(".container");

    if (container) {
        container.hidden = false;

        container.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}
// لعبة مين يعرف التاني أكتر ❤️

const loveQuizQuestions = [
    {
        question: "إيه أكتر حاجة بتفرحني؟ ❤️",
        options: [
            "كلامك الحلو",
            "الهدايا",
            "الخروج",
            "المفاجآت"
        ],
        answer: 0
    },
    {
        question: "إيه أكتر حاجة بحبها في علاقتنا؟ 💕",
        options: [
            "الضحك والهزار",
            "الاهتمام ببعض",
            "الخروجات",
            "كل اللحظات اللي بنعيشها سوا"
        ],
        answer: 3
    },
    {
        question: "لو كنت زعلان، إيه أكتر حاجة ممكن تراضيني؟ 🥹",
        options: [
            "كلمة حلوة",
            "حضن",
            "اهتمام وسؤال",
            "كل اللي فات"
        ],
        answer: 3
    },
    {
        question: "إيه أحلى حاجة ممكن نعملها سوا؟ 🌹",
        options: [
            "نتمشى سوا",
            "نتفرج على فيلم",
            "نتكلم بالساعات",
            "أي حاجة طول ما إحنا سوا"
        ],
        answer: 3
    },
    {
        question: "إيه أكتر حاجة بتخليني أبتسم؟ 😊",
        options: [
            "رسالة منك",
            "صورة لينا",
            "مكالمة منك",
            "كل حاجة تفكرني بيكي"
        ],
        answer: 3
    },
    {
        question: "لو هختار هدية ليكي، إيه الأهم عندي؟ 🎁",
        options: [
            "سعر الهدية",
            "إنها تكون على ذوقك",
            "إنها تكون من قلبي",
            "إنك تفرحي بيها"
        ],
        answer: 2
    },
    {
        question: "إيه اللي نفسي فيه لينا في المستقبل؟ 💍",
        options: [
            "نفضل قريبين من بعض",
            "نحقق أحلامنا",
            "نعيش أيام حلوة سوا",
            "كل اللي فات"
        ],
        answer: 3
    },
    {
        question: "مين الشخص اللي واخد مكان كبير في قلبي؟ ❤️",
        options: [
            "شوشو",
            "شوشو",
            "برضه شوشو",
            "أكيد شوشو 😍"
        ],
        answer: 3
    }
];

let currentQuizQuestion = 0;
let quizScore = 0;
let quizAnswered = false;

function openLoveQuiz() {
    document.querySelector(".container")?.setAttribute("hidden", "");
    document.getElementById("memories")?.setAttribute("hidden", "");
    document.getElementById("videosPage")?.setAttribute("hidden", "");
    document.getElementById("messagesPage")?.setAttribute("hidden", "");

    const quizPage = document.getElementById("loveQuizPage");

    if (quizPage) {
        quizPage.hidden = false;
        document.getElementById("quizStart").hidden = false;
        document.getElementById("quizGame").hidden = true;
        document.getElementById("quizResult").hidden = true;

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}

function startLoveQuiz() {
    currentQuizQuestion = 0;
    quizScore = 0;
    quizAnswered = false;

    document.getElementById("quizStart").hidden = true;
    document.getElementById("quizResult").hidden = true;
    document.getElementById("quizGame").hidden = false;

    document.getElementById("quizTotalQuestions").textContent =
        loveQuizQuestions.length;

    displayQuizQuestion();
}

function displayQuizQuestion() {
    const question = loveQuizQuestions[currentQuizQuestion];

    quizAnswered = false;

    document.getElementById("quizQuestionNumber").textContent =
        currentQuizQuestion + 1;

    document.getElementById("quizQuestion").textContent =
        question.question;

    document.getElementById("quizProgressFill").style.width =
        (currentQuizQuestion / loveQuizQuestions.length * 100) + "%";

    document.getElementById("quizFeedback").textContent = "";

    document.getElementById("quizNextButton").hidden = true;

    const optionsContainer = document.getElementById("quizOptions");
    optionsContainer.replaceChildren();

    question.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.textContent = option;

        button.addEventListener("click", () => {
            checkQuizAnswer(index, button);
        });

        optionsContainer.appendChild(button);
    });
}

function checkQuizAnswer(selectedIndex, selectedButton) {
    if (quizAnswered) return;

    quizAnswered = true;

    const question = loveQuizQuestions[currentQuizQuestion];
    const optionButtons = document.querySelectorAll("#quizOptions button");

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === question.answer) {
        quizScore++;

        selectedButton.classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            "برافو عليكي! إجابة صح ❤️😍";
    } else {
        selectedButton.classList.add("wrong");
        optionButtons[question.answer].classList.add("correct");

        document.getElementById("quizFeedback").textContent =
            "ولا يهمك يا قلبي، المرة الجاية هتكون أحسن 💗";
    }

    document.getElementById("quizProgressFill").style.width =
        ((currentQuizQuestion + 1) / loveQuizQuestions.length * 100) + "%";

    const nextButton = document.getElementById("quizNextButton");

    nextButton.textContent =
        currentQuizQuestion === loveQuizQuestions.length - 1
            ? "نشوف النتيجة ❤️"
            : "السؤال اللي بعده 💕";

    nextButton.hidden = false;
}

function nextQuizQuestion() {
    if (!quizAnswered) return;

    currentQuizQuestion++;

    if (currentQuizQuestion < loveQuizQuestions.length) {
        displayQuizQuestion();
    } else {
        showQuizResult();
    }
}

function showQuizResult() {
    document.getElementById("quizGame").hidden = true;
    document.getElementById("quizResult").hidden = false;

    document.getElementById("quizScore").textContent =
        "إجاباتك الصح: " + quizScore + " من " +
        loveQuizQuestions.length + " 💖";

    let message;

    if (quizScore === loveQuizQuestions.length) {
        message = "يا سلام! إنتوا فاهمين بعض أوي.. ربنا يديم الحب بينكم ❤️👑";
    } else if (quizScore >= 6) {
        message = "جامد جدًا! واضح إن بينكم تفاصيل حلوة كتير 💕";
    } else if (quizScore >= 4) {
        message = "حلو أوي! ولسه قدامكم تفاصيل أكتر تعرفوها عن بعض 🥰";
    } else {
        message = "دي فرصة حلوة تتكلموا وتعرفوا بعض أكتر.. وأحلى حاجة إنكم سوا ❤️";
    }

    document.getElementById("quizFinalMessage").textContent = message;
}

function closeLoveQuiz() {
    document.getElementById("loveQuizPage").hidden = true;

    // الرجوع لصفحة الرسائل لو كانت هي اللي فتحت اللعبة
    const messagesEntry = document.getElementById("messagesEntry");

    if (messagesEntry && !messagesEntry.hidden) {
        document.getElementById("messagesPage").hidden = false;
        return;
    }

    // الرجوع للصفحة الرئيسية
    document.querySelector(".container")?.removeAttribute("hidden");
}