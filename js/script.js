// 부드러운 스크롤 + 로딩 제거 + 메뉴 하이라이트
document.addEventListener("DOMContentLoaded", () => {
  // 부드러운 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 로딩 스피너 제거
  window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    if (preloader) {
        preloader.style.display = "none";
  }
});

  // 메뉴 active 하이라이트
  const navLinks = document.querySelectorAll("nav ul li a");
  window.addEventListener("scroll", () => {
    let current = "";
    document.querySelectorAll("main section").forEach(section => {
      const sectionTop = section.offsetTop - 60;
      if (scrollY >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
});
