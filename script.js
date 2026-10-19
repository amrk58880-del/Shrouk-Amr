function unlockLove() {
const password = document.getElementById("password").value.trim();
const message = document.getElementById("message");
const loveLetter = document.getElementById("loveLetter");
const musicplayer = document.getElementById("musicplayer");
const audio = document.getElementById("myAudio");

if (password === "shrouk") {
    message.textContent = "فتحت حكايتنا ❤️";

    loveLetter.hidden = false;
    musicplayer.hidden = false;

    if (audio) {
        audio.play().catch(() => {});
    }
} else {
    message.textContent = "جربي كلمة السر تاني يا قلبي 💗";
    loveLetter.hidden = true;
    musicplayer.hidden = true;
}

}

// عرض الصور والفيديوهات عند الضغط على Next
// الانتقال إلى صفحة الصور
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

// الانتقال إلى صفحة الفيديوهات
function showVideos() {
    document.getElementById("memories").hidden = true;

    const videosPage = document.getElementById("videosPage");
    videosPage.hidden = false;

    videosPage.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// الرجوع إلى صفحة الصور
function backToPhotos() {
    document.getElementById("videosPage").hidden = true;

    const memories = document.getElementById("memories");
    memories.hidden = false;

    memories.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// تكبير الصورة
function openPhoto(src) {
const viewer = document.getElementById("photoViewer");
const expandedPhoto = document.getElementById("expandedPhoto");

if (viewer && expandedPhoto) {
    expandedPhoto.src = src;
    viewer.style.display = "flex";
}

}

// إغلاق الصورة المكبرة
function closePhoto() {
const viewer = document.getElementById("photoViewer");

if (viewer) {
    viewer.style.display = "none";
}

}

// إيقاف الموسيقى عند تشغيل الفيديو
document.addEventListener("DOMContentLoaded", function () {
const audio = document.getElementById("myAudio");
const videos = document.querySelectorAll(".video-gallery video");

videos.forEach(function (video) {
    video.addEventListener("play", function () {
        if (audio) {
            audio.pause();
        }
    });

    video.addEventListener("pause", function () {
        if (audio && !video.ended) {
            audio.play().catch(() => {});
        }
    });

    video.addEventListener("ended", function () {
        if (audio) {
            audio.play().catch(() => {});
        }
    });
});

});