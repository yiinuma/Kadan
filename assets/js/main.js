/* ====== ドロワメニュー ======*/
const body = document.querySelector('body');
const drawerBtn = document.querySelector('.c-burger');
const resBtn = document.querySelector('.c-reservation-btn');
const resIn = document.querySelector('.c-reservation');
const close = document.querySelector('.r-close');
const submit = document.querySelector('.c-submit-btn');
const drawer = document.getElementById('header-nav');
const filter = document.getElementById('filter');
const active = 'is_active';
const open = 'is_open';

drawerBtn.addEventListener('click', function () {
    drawerBtn.classList.toggle(active);
    drawer.classList.toggle(active);
});

resBtn.addEventListener('click', function () {
    drawerBtn.classList.remove(active);
    drawer.classList.remove(active);
});

const mediaQueryList = window.matchMedia("(min-width:768px)");
// イベントリスナー　
const listener = (event) => {
    // リサイズ時に行う処理
    if (event.matches) {
        // 768px以上
        drawerBtn.classList.remove(active);
        drawer.classList.remove(active);
    }
}
// リスナー登録
mediaQueryList.addListener(listener);
// 初期化処理
listener(mediaQueryList);


/* ====== 宿泊予約 ======　*/
// スクロールを禁止する関数
function noScroll(event) {
    event.preventDefault();
}
resBtn.addEventListener('click', function () {
    resIn.classList.toggle(open);
    filter.classList.toggle(active);
    // スクロール禁止(SP)
    document.addEventListener('touchmove', noScroll, {
        passive: false
    });
    // スクロール禁止(PC)
    document.addEventListener('mousewheel', noScroll, {
        passive: false
    });
});
filter.addEventListener('click', function () {
    resIn.classList.remove(open);
    filter.classList.remove(active);
    // スクロール禁止を解除(SP)
    document.removeEventListener('touchmove', noScroll, {
        passive: false
    });
    // スクロール禁止を解除(PC)
    document.removeEventListener('mousewheel', noScroll, {
        passive: false
    });
});

close.addEventListener('click', function () {
    resIn.classList.remove(open);
    filter.classList.remove(active);
    // スクロール禁止を解除(SP)
    document.removeEventListener('touchmove', noScroll, {
        passive: false
    });
    // スクロール禁止を解除(PC)
    document.removeEventListener('mousewheel', noScroll, {
        passive: false
    });
});

submit.addEventListener('click', function () {
    resIn.classList.remove(open);
    filter.classList.remove(active);
    // スクロール禁止を解除(SP)
    document.removeEventListener('touchmove', noScroll, {
        passive: false
    });
    // スクロール禁止を解除(PC)
    document.removeEventListener('mousewheel', noScroll, {
        passive: false
    });
});

/* ====== selectの文字色変更 ======　*/
function changeItem(obj) {
    if (obj.value == 0) {
        obj.style.color = '';
    } else {
        obj.style.color = '#000';
    }
};

/* ====== flatpickr ======　*/
// 日曜日始まり
flatpickr.l10ns.ja.firstDayOfWeek = 0;

const config = {
    locale: 'ja',
    minDate: "today",
    mode: "range",
    dateFormat: "Y-m-d"
}
flatpickr('.flatpickr', config);

