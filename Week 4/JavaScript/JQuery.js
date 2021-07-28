$(document).ready(function() {
  $("#Next").click(function () {
    next($('img').attr('src'));
  });

  $("#Prev").click(function () {
    previous($('img').attr('src'));
  });
});

function next(current) {
  if (current === "img/cookie.jpg") {
    fade('img/What.png');
  }
  if (current === "img/What.png") {
    fade('img/win 10 background.png');
  }
  if (current === "img/win 10 background.png") {
    fade('img/cookie.jpg');
  }
};

function previous(current) {
  if (current === "img/cookie.jpg") {
  fade("img/win 10 background.png");
  }
  if (current === "img/What.png") {
    fade('img/cookie.jpg');
  }
  if (current === "img/win 10 background.png") {
    fade('img/What.png');
  }
}

function fade (img) {
  $("#img").fadeOut(400, function () {
    $('#img').attr('src', img);
    $("#img").fadeIn(400)
  });
}
