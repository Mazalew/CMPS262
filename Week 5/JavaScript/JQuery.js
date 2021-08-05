$(document).ready(function() {

  $("#Home").click(function () {
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#NYT_Page").hide();
    $("#Homepage").show();
  });

  $("#Table").click(function () {
    $("#Homepage").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#NYT_Page").hide();
    $("#Table_Page").show();
  });

  $("#Styles").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Animation_Page").hide();
    $("#Portfolio_Page").hide();
    $("#NYT_Page").hide();
    $("#Styles_Page").show();
  });

  $("#Animation").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Portfolio_Page").hide();
    $("#NYT_Page").hide();
    $("#Animation_Page").show();
  });
  $("#Portfolio").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#NYT_Page").hide();
    $("#Portfolio_Page").show();
  });
  $("#API_Section").click(function () {
    $("#API_Dropdown").slideDown('slow');
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

//For buttons to get to other works.
  $("#Music").click(function () {
    fade('img/Playlist.jpg')
    toDefault();
    $('p#Project_Desc').text('Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.');
  });

  $("#Stock").click(function () {
    fade('img/Stocks.jpg')
    toDefault();
    $('p#Project_Desc').text('This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now.');
  });

function next(current) {

//Music Part
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

//Stocks Part
  if (current === "img/Stocks.jpg") {
    fade('img/Stocks_Program_01.jpg');
    toStock();
    var text = "And here we are the main code of the whole procedure.  Anything under the 'robot' package is a class I custom made and we will go into later.  The rest of the imports are Java's and I just utilized them.  We start off with assigning the classes to be objects so they can be used later.  There is also a list of tickers I used to watch for one reason or another.  The JFrame part is setup early and is used to get an input later.  Continue to the next image."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_01.jpg") {
    fade('img/Stocks_Program_02.jpg');
    var text = "After the JFrame is setup, I add a button listener to get the text when pressed.  It then opens Excel, goes to cell A1 and prompts the user for which cell is empty.  It then moves there and the program begins... It will type the date in the first row cell and then move down a row.  If it is the first ticker, it realizes it needs to open Firefox before searching.  It then finds which format the stock was. Weirdly enough there was only a few different formats.  By formats, I mean the coordinates.  It then highlights the price and copies it.  This is where the JFrame comes in.  It will then past the price per stock (PPS) into the field and press the button itself.  Continue to next image...";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_02.jpg") {
    fade('img/Stocks_Program_03.jpg');
    var text = "Once the button is pressed, it will check the previous PPS (price per stock) and make sure it is not the same (it miscopied) or if it copied text instead.  If it did, it will go back a few stock and redo them.  That is the very simplified version of what this encompasses.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_03.jpg") {
    fade('img/Stocks_Program_04.jpg');
    var text = "Now lets get to some of the helper classes.  The first one is Actions.  This one is fairly simple.  It uses a robot class to mimic human button presses.  Actions from pressing buttons like 'alt', 'control,' clicking, or 'windows button' are created here into subfunctions to save on code.  This was used for many of my projects that had automation.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_04.jpg") {
    fade('img/Stocks_Program_05.jpg');
    var text = "Now lets move on to the Excel class.  This is another helper class that deals with Excel related functions.  The first function just opens Excel using x, y coordinates.  The second opens the Stocks file.  Honestly, I don't remember the Open_Excel_Tab one.  Continue to next image.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_05.jpg") {
    fade('img/Stocks_Program_06.jpg');
    var text = "While the first few functions of this Excel class were simple.  This one is one of the most complicated and confusing functions in the program.  I don't even know how I even went through the thought process to make this becuase it is just plain weird.  The idea was to turn letters into numbers to determine how many times the right arronw key needed pressed.  For example, it starts at A1 and needs to get to C1.  It would press right two times.  But for whatever reason, I decided to just make this more difficult on myself and go out to three letters.  Lets go over how this works (if I can still remember).  It brings in the letter(s) that it needs to go to (Ex 'c').  It will then get the index of the letter in a list of letters and add one.  Simple for one number right?  Well, it gets a little more complicated for two.  To get each letter individually, it will split the string into two with one letter each.  For the double letter ('AA') it will get its location as if it were a single number and then multiply by 26.  The reason is becuase if it was 'B-' then it would have to go through all the single letters and then through all A's before getting to 'B-'.  Hope that makes sense becase it only gets more complicated.  After it does the muliplication it will add the letter to the total (Ex: BB = 54 because B- = 52 and -B = 2).  Continue to the next image for the headache.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_06.jpg") {
    fade('img/Stocks_Program_07.jpg');
    var text = "So for three letters, going from 'A' to 'AAA' is 676 cells away.  I don't even remember how I came to this conclusion.  I went through so many different math problems.  I believe it was something around the lines of multiplying 26 by 26 (the amount of letters in the alpabet x how many times it will need to go through 2 letters).  I really don't understand the logic anymore, but it worked at one time.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_07.jpg") {
    fade('img/Stocks_Program_08.jpg');
    var text = "Move to cell x, y, and xy are self explanitory as to what they do.  Move to cell arrow uses those functions to figure out how many times the arrow button needs to be pressed and which way."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_08.jpg") {
    fade('img/Stocks_Program_09.jpg');
    var text = "A better view of move to cell arrow."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_09.jpg") {
    fade('img/Stocks_Program_10.jpg');
    var text = "The final function in Excel that moves to a cell and clicks it."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_10.jpg") {
    fade('img/Stocks_Program_11.jpg');
    var text = "Type is a helper class that allows my program to mimic key presses for numbers, letters, and symbols.  It a large amount of code but it all looks the same.  It just goes through all uppercase and lowercase letters, numbers, and symbols as I just mentioned.  All together it is just shy of 1000 lines of code (its 940 lines).";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_11.jpg") {
    fade('img/Stocks_Program_12.jpg');
    var text = "Firefox is a helper class that has functions all related to Firefox like Excel.  The one shown here just figures out where the new tab is depending on how many tabs are open using x, y coordinates.  Probably does not work anymore due to Firefox updating the location.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_12.jpg") {
    fade('img/Stocks_Program_13.jpg');
    var text = "And we are at the final stop of the tour.  Here are some more Firefox functions.  Search_Bar just goes to the search bar and presses it.  Search_String uses the same code as Search_Bar (not sure why I just didn't call it) and searches a string.  Open_and_Search_String has a similar process but it opens Firefox.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_13.jpg") {
    fade('img/Stocks.jpg');
    toDefault();
    var text = "This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now."
    $('p#Project_Desc').text(text);
  }
};

function previous(current) {
//Music Part
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

//Stocks part
  if (current === "img/Stocks.jpg") {
    fade('img/Stocks_Program_13.jpg');
    toStock();
    var text = "And we are at the final stop of the tour.  Here are some more Firefox functions.  Search_Bar just goes to the search bar and presses it.  Search_String uses the same code as Search_Bar (not sure why I just didn't call it) and searches a string.  Open_and_Search_String has a similar process but it opens Firefox.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_01.jpg") {
    fade('img/Stocks.jpg');
    toDefault();
    var text = "This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_02.jpg") {
    fade('img/Stocks_Program_01.jpg');
    var text = "And here we are the main code of the whole procedure.  Anything under the 'robot' package is a class I custom made and we will go into later.  The rest of the imports are Java's and I just utilized them.  We start off with assigning the classes to be objects so they can be used later.  There is also a list of tickers I used to watch for one reason or another.  The JFrame part is setup early and is used to get an input later.  Continue to the next image."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_03.jpg") {
    fade('img/Stocks_Program_02.jpg');
    var text = "After the JFrame is setup, I add a button listener to get the text when pressed.  It then opens Excel, goes to cell A1 and prompts the user for which cell is empty.  It then moves there and the program begins... It will type the date in the first row cell and then move down a row.  If it is the first ticker, it realizes it needs to open Firefox before searching.  It then finds which format the stock was. Weirdly enough there was only a few different formats.  By formats, I mean the coordinates.  It then highlights the price and copies it.  This is where the JFrame comes in.  It will then past the price per stock (PPS) into the field and press the button itself.  Continue to next image...";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_04.jpg") {
    fade('img/Stocks_Program_03.jpg');
    var text = "Once the button is pressed, it will check the previous PPS (price per stock) and make sure it is not the same (it miscopied) or if it copied text instead.  If it did, it will go back a few stock and redo them.  That is the very simplified version of what this encompasses.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_05.jpg") {
    fade('img/Stocks_Program_04.jpg');
    var text = "Now lets get to some of the helper classes.  The first one is Actions.  This one is fairly simple.  It uses a robot class to mimic human button presses.  Actions from pressing buttons like 'alt', 'control,' clicking, or 'windows button' are created here into subfunctions to save on code.  This was used for many of my projects that had automation.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_06.jpg") {
    fade('img/Stocks_Program_05.jpg');
    var text = "Now lets move on to the Excel class.  This is another helper class that deals with Excel related functions.  The first function just opens Excel using x, y coordinates.  The second opens the Stocks file.  Honestly, I don't remember the Open_Excel_Tab one.  Continue to next image.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_07.jpg") {
    fade('img/Stocks_Program_06.jpg');
    var text = "While the first few functions of this Excel class were simple.  This one is one of the most complicated and confusing functions in the program.  I don't even know how I even went through the thought process to make this becuase it is just plain weird.  The idea was to turn letters into numbers to determine how many times the right arronw key needed pressed.  For example, it starts at A1 and needs to get to C1.  It would press right two times.  But for whatever reason, I decided to just make this more difficult on myself and go out to three letters.  Lets go over how this works (if I can still remember).  It brings in the letter(s) that it needs to go to (Ex 'c').  It will then get the index of the letter in a list of letters and add one.  Simple for one number right?  Well, it gets a little more complicated for two.  To get each letter individually, it will split the string into two with one letter each.  For the double letter ('AA') it will get its location as if it were a single number and then multiply by 26.  The reason is becuase if it was 'B-' then it would have to go through all the single letters and then through all A's before getting to 'B-'.  Hope that makes sense becase it only gets more complicated.  After it does the muliplication it will add the letter to the total (Ex: BB = 54 because B- = 52 and -B = 2).  Continue to the next image for the headache.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_08.jpg") {
    fade('img/Stocks_Program_07.jpg');
    var text ="So for three letters, going from 'A' to 'AAA' is 676 cells away.  I don't even remember how I came to this conclusion.  I went through so many different math problems.  I believe it was something around the lines of multiplying 26 by 26 (the amount of letters in the alpabet x how many times it will need to go through 2 letters).  I really don't understand the logic anymore, but it worked at one time.";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_09.jpg") {
    fade('img/Stocks_Program_08.jpg');
    var text ="Move to cell x, y, and xy are self explanitory as to what they do.  Move to cell arrow uses those functions to figure out how many times the arrow button needs to be pressed and which way."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_10.jpg") {
    fade('img/Stocks_Program_09.jpg');
    var text ="A better view of move to cell arrow."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_11.jpg") {
    fade('img/Stocks_Program_10.jpg');
    var text = "A better view of move to cell arrow."
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_12.jpg") {
    fade('img/Stocks_Program_11.jpg');
        var text = "Type is a helper class that allows my program to mimic key presses for numbers, letters, and symbols.  It a large amount of code but it all looks the same.  It just goes through all uppercase and lowercase letters, numbers, and symbols as I just mentioned.  All together it is just shy of 1000 lines of code (its 940 lines).";
    $('p#Project_Desc').text(text);
  }
  if (current === "img/Stocks_Program_13.jpg") {
    fade('img/Stocks_Program_12.jpg');
    var text = "Firefox is a helper class that has functions all related to Firefox like Excel.  The one shown here just figures out where the new tab is depending on how many tabs are open using x, y coordinates.  Probably does not work anymore due to Firefox updating the location.";
    $('p#Project_Desc').text(text);
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
  $('#img').removeClass("Stock");
}

function toDefault() {
  $('#img').addClass("default");
  $('#img').removeClass("long");
  $('#img').removeClass("Stock");
}

function toStock() {
  $('#img').addClass("Stock");
  $('#img').removeClass("default");
  $('#img').removeClass("long");
}
});
