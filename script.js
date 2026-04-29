// ===============================
// ハンバーガーメニュー
// ===============================
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// ===============================
// メニュークリックで閉じる
// ===============================
document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    if (hamburger) {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    }
  });
});

// ===============================
// スクロールでヘッダー影追加
// ===============================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// ===============================
// スムーススクロール
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ===============================
// ふわっと表示アニメーション
// ===============================
const targets = document.querySelectorAll(
  ".section-title, .work-item, .service-card, .about-box"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.15
});

targets.forEach(target => {
  observer.observe(target);
});