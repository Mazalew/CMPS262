$(document).ready(function() {

  $("#Home").click(function () {
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#Homepage").show();
  });

  $("#Table").click(function () {
    $("#Homepage").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#Table_Page").show();
  });

  $("#Styles").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#Styles_Page").show();
  });

  $("#Animation").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Portfolio_Page").hide();
    $("#Animation_Page").show();
  });
  $("#Portfolio").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").show();
  });

  $("#IMG_SHOW_HIDE").click(function () {
    if ( $("#Me").is(":visible")) {
      $("#Me").hide();
      $("#Image_Hidden_Space").show();
    }
    else {
      $("#Me").show();
      $("#Image_Hidden_Space").hide();
    }
  });

  $("#submit").click(function () {
    if ($('#FontChoice1').is(':checked')) {
      $("#Styles_Page_Text").css("font-family", "Times New Roman");
    }
    if ($('#FontChoice2').is(':checked')) {
      $("#Styles_Page_Text").css("font-family", "Georgia");
    }
    if ($('#FontChoice3').is(':checked')) {
      $("#Styles_Page_Text").css("font-family", "Century Schoolbook");
    }


    if ($('#Number').val() === undefined) {
      $('#Number').val() = 1;
    }
    var size = $("#Number").val() + "em";
    $("#Styles_Page_Text").css("font-size", size);


    if ($('#Selection_Colors').val() === ('Red')) {
      $("#Styles_Page_Text").css("color", "red");
    }
    if ($('#Selection_Colors').val() === ('Blue')) {
      $("#Styles_Page_Text").css("color", "blue");
    }
    if ($('#Selection_Colors').val() === ('Green')) {
      $("#Styles_Page_Text").css("color", "green");
    }
    if ($('#Selection_Colors').val() === ('Orange')) {
      $("#Styles_Page_Text").css("color", "orange");
    }
    return false;
  });

//Using the script you used in your lab video.  Don't feel too confident with CSS enough yet to
//expiement too much with animating much more.
  function rgt() {
    $("#bird").animate({ left: "250"}, 10000, hider);
  }
  rgt();
  function hider() {
    $("#bird").css("left", "0px");
      rgt();
  }


//The following is for the buttons under the portfolio page.
  $("#Next").click(function () {
    next($('#img').attr('src'));
  });

  $("#Prev").click(function () {
    previous($('#img').attr('src'));
  });

function next(current) {
  if (current === "img/Playlist.jpg") {
    fade('img/Discord-Music-Program_01.jpg');
    toLong();
    $('p#Project_Desc').text('Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.');
  }
  if (current === "img/Discord-Music-Program_01.jpg") {
    fade('img/Discord-Music-Program_02.jpg');
  }
  if (current === "img/Discord-Music-Program_02.jpg") {
    fade('img/Discord-Music-Program_03.jpg');
    toDefault();
    $('p#Project_Desc').text('This is the prompt when the program is ran.');
  }
  if (current === "img/Discord-Music-Program_03.jpg") {
    fade('img/Discord-Music-Program_04.jpg');
    $('p#Project_Desc').text('This is what the current note looks like before the program is ran.');
  }
  if (current === "img/Discord-Music-Program_04.jpg") {
    fade('img/Discord-Music-Program_05.jpg');
    $('p#Project_Desc').text('For this example I entered the max, 49.');
  }
  if (current === "img/Discord-Music-Program_05.jpg") {
    fade('img/Discord-Music-Program_06.jpg');
    $('p#Project_Desc').text('Now the note is filled with a bunch of songs I can copy to YouTube or Discord.');
  }
  if (current === "img/Discord-Music-Program_06.jpg") {
    fade('img/Playlist.jpg');
    var text = "This was a smaller project I did back when Youtube had a hard time with longer playlists.  The main goal was to make a program that shuffles a bunch of music I like and give me the url's.  Although, I also wanted to use this for a bot in Discord so, as you will see later, that is where the '>play' comes in.  That was the prefix and command for the bot to play a song.  Continue to the next image.";
    $('p#Project_Desc').text(text);
    }
};

function previous(current) {
  if (current === "img/Playlist.jpg") {
    fade('img/Discord-Music-Program_06.jpg');
    $('p#Project_Desc').text('Now the note is filled with a bunch of songs I can copy to YouTube or Discord.');
  }
  if (current === "img/Discord-Music-Program_01.jpg") {
    fade('img/Playlist.jpg');
    toDefault();
    var text = "This was a smaller project I did back when Youtube had a hard time with longer playlists.  The main goal was to make a program that shuffles a bunch of music I like and give me the url's.  Although, I also wanted to use this for a bot in Discord so, as you will see later, that is where the '>play' comes in.  That was the prefix and command for the bot to play a song.  Continue to the next image.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Discord-Music-Program_02.jpg") {
    fade('img/Discord-Music-Program_01.jpg');

  }
  if (current === "img/Discord-Music-Program_03.jpg") {
    fade('img/Discord-Music-Program_02.jpg');
    toLong();
    $('p#Project_Desc').text('Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.');
  }
  if (current === "img/Discord-Music-Program_04.jpg") {
    fade('img/Discord-Music-Program_03.jpg');
    $('p#Project_Desc').text('This is the prompt when the program is ran.');
  }
  if (current === "img/Discord-Music-Program_05.jpg") {
    fade('img/Discord-Music-Program_04.jpg');
    $('p#Project_Desc').text('This is what the current note looks like before the program is ran.');
  }
  if (current === "img/Discord-Music-Program_06.jpg") {
    fade('img/Discord-Music-Program_05.jpg');
    $('p#Project_Desc').text('For this example I entered the max, 49.');
  }
}

function fade (img) {
  $("#img").fadeOut(400, function () {
    $('#img').attr('src', img);
    $("#img").fadeIn(400)
  });
}

function toLong() {
  $('#img').addClass("long");
  $('#img').removeClass("default");
}

function toDefault() {
  $('#img').addClass("default");
  $('#img').removeClass("long");
}
});
