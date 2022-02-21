window.onload = function () {
  const loading = document.getElementById("loading");
  loading.classList.add("loaded");
};

// スクロールフェードイン

$(function () {
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight =
        $(
          window
        ).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});

// タイトルのアニメーションCSS
$(window).scroll(function () {
  $(".fadeInUpTrigger").each(function () {
    //fadeInUpTriggerというクラス名が
    var elemPos = $(this).offset().top - 50; //要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      console.log("スクロールできたよ");
      $(this).addClass("animate__animated animate__fadeInUp animate__slow");
      // 画面内に入ったらanimate__animatedとanimate__fadeInUpというクラス名を追記
    } else {
      $(this).removeClass("animate__animated animate__fadeInUp animate__slow");
      // 画面外に出たらanimate__animatedとanimate__fadeInUpというクラス名を外す
    }
  });
});

ページ内ナビゲーション;
$(function () {
  $(window).scroll(function () {
    //hyggeからatHomeの間
    if (
      $(window).scrollTop() > $("#hygge").offset().top &&
      $(window).scrollTop() < $("#atHome").offset().top
    ) {
      $("navlist_sec ul li").addClass("_on");
    } //atHomeからcandleの間
    if (
      $(window).scrollTop() > $("#atHome").offset().top &&
      $(window).scrollTop() < $("#candle").offset().top
    ) {
      $("navlist_sec ul li").addClass("_on");
    } //candle から Foodの間
    if (
      $(window).scrollTop() > $("#candle").offset().top &&
      $(window).scrollTop() < $("#food").offset().top
    ) {
      $("navlist_sec ul li").addClass("_on");
    } //foodからoutDoorの間
    if (
      $(window).scrollTop() > $("#food").offset().top &&
      $(window).scrollTop() < $("#outDoor").offset().top
    ) {
      $("navlist_sec ul li").addClass("_on");
    }
  });
});
