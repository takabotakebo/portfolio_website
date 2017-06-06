$(function() {
    $('#navToggle').click(function(){//headerに .openNav を付加・削除
        $('header').toggleClass('openNav');
    });
});

$(function() {
    var topBtn = $('.scroll-top');
    topBtn.hide();
    //スクロールが100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function () {

    //フィルター機能の実装
    var $filters = $('.filter [data-filter]'),
        $boxes = $('.contents-1st [data-category]');


    $filters.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      $filters.removeClass('active');
      $this.addClass('active');

      var $filterColor = $this.attr('data-filter');

      console.log("click is ok. filter is " + $filterColor);

      if ($filterColor == 'genres-all') {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.addClass('is-animated').fadeIn();
          });
      } else {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.filter('[data-category = "' + $filterColor + '"]')
              .addClass('is-animated').fadeIn();
          });
      }
    });

    //ボタンを押したらスクロールの実装
    //ページ内スクロール
    $(".scroll-down-btn").click(function () {
        var i = $(".scroll-down-btn").index(this)
        var p = $("#profile").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 700);
        return false;
    });

    $(".scroll-up-btn").click(function () {
        var i = $(".scroll-up-btn").index(this)
        var p = $("#wrapper").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, 500);
        return false;
    });
});
