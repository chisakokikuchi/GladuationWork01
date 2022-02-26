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
      // console.log("スクロールできたよ");
      $(this).addClass("animate__animated animate__fadeInUp animate__slow");
      // 画面内に入ったらanimate__animatedとanimate__fadeInUpというクラス名を追記
    } else {
      $(this).removeClass("animate__animated animate__fadeInUp animate__slow");
      // 画面外に出たらanimate__animatedとanimate__fadeInUpというクラス名を外す
    }
  });
});

// ページ内ナビゲーション;

$(function () {
  $(window).on("load scroll resize", function () {
    var st = $(window).scrollTop();
    var wh = $(window).height();

    $(".all_sub_follow_sec").each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr("id");

      if (st > tg - wh + wh / 2) {
        $(".list").removeClass("_on");
        var link = $(".list[href *= " + id + "]");
        $(link).addClass("_on");
      }
    });
    if (st == 0) {
      $(".list").eq(0).addClass("_on");
      $(".list").eq(1).removeClass("_on");
      $(".list").eq(2).removeClass("_on");
      $(".list").eq(3).removeClass("_on");
      $(".list").eq(4).removeClass("_on");
    }
  });
});

// TOPボタン
$("#pageTop > a").on("click", function () {
  console.log("クリックしたよ");
  $("html").animate({
    scrollTop: 0,
  });
});

$(window).on("scroll", function () {
  // console.log("スクロールしたよ");
  var dy = $(this).scrollTop();
  if (dy > 200) {
    console.log("200超えたよ");
    $("#pageTop").addClass("fade-in");
  } else {
    $("#pageTop").removeClass("fade-in");
  }
});

// ハンバーガーメニュー
$(function () {
  $("#menuButton").on("click", function () {
    console.log("ハンバガーメニュークリック");
    $("#menuButton").toggleClass("active");
    $("#nav").toggleClass("active");
  });
});
