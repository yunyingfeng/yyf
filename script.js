// 动态生成云雾粒子
function createInkMist() {
    // 原createInkMist函数内容
}

// 初始化
window.addEventListener('DOMContentLoaded', () => {
    createInkMist();
});

// script.js 增加移动端适配
function checkMobile() {
    if (window.innerWidth < 768) {
        document.body.classList.add('mobile');
    }
}
window.addEventListener('resize', checkMobile);