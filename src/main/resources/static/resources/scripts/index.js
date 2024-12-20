const sectionContainer = document.getElementById('sectionContainer');
//초기화 함수
function clearSelection() {
    document.getElementById('headerContainer').querySelectorAll(':scope > [rel="menu"]').forEach(menu => menu.classList.remove('selected'));
}

//메뉴 클릭 시 메뉴 색깔 변화 및 해당 위치로 이동 함수
const headerContainer = document.getElementById('headerContainer');
headerContainer.querySelectorAll(':scope > [rel="menu"]').forEach(menu => {
    menu.addEventListener('click', () => {
        clearSelection();
        menu.classList.add('selected');
        window.document.body.scrollTo(0, document.querySelector(`[data-section="${menu.dataset.targetSection}"]`).offsetTop - 70);
    });
});

//data-section="${menu.dataset.targetSection}"
//-> intro를 클릭하면 data-target-section 에 intro가 들어가서 data-section="intro"가 됨
//그럼 data-section="intro"인 위치로 이동

//스크롤했을 때 해당 메뉴에 색깔 변경 함수
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            clearSelection();
            headerContainer.querySelector(`:scope > [rel="menu"][data-target-section="${entry.target.dataset.section}"]`).classList.add('selected');
        }
//img alt="" class="image" th:src="@{/resources/images/dios.png}"
    });
}, {
    root: document.body,
    threshold: 0.45, // 얼마나 보였을 때 해당 위치라고 인식할지
    rootMargin: '0px'
});

document.getElementById('sectionContainer').querySelectorAll(':scope > [rel="section"]').forEach(section => {
    observer.observe(section); //함수 사용
});

//화면 줄었을 때 세줄
// function menuToggle() {
//     document.getElementById('menu').classList.toggle('show');
// }
//
// document.getElementById('toggleBtn').addEventListener('click', menuToggle);

// const content = "신입\n 웹 개발자 \n 김현지입니다.";
// const text = document.querySelector(".textLetter");
// let i = 0;
//
// function typing(){
//     let txt = content[i++];
//     text.innerHTML += txt=== "\n" ? "<br/>": txt;
//     if (i > content.length) {
//         text.textContent = "";
//         i = 0;
//     }
// }
// setInterval(typing, 200)

