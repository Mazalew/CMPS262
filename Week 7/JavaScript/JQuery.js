$(document).ready(function() {

  var player = document.getElementById("audio_player");
  player.volume = 0.3;

  $("#Home").click(function () {
    show_page('#Homepage');
  });

  $("#Table").click(function () {
    show_page('#Table_Page');
  });

  $("#Styles").click(function () {
    show_page('#Styles_Page');
  });

  $("#Animation").click(function () {
    show_page('#Animation_Page');
  });
  $("#Portfolio").click(function () {
    show_page('#Portfolio_Page');
  });
  $("#API_Section").click(function () {
    if ($('#API_Dropdown').is(':hidden')){
      $("#API_Dropdown").slideDown('slow');
    }
    else {
      $("#API_Dropdown").slideUp('slow');
    }
  });
  $("#API_Info_Page_Button").click(function () {
    show_page('#API_Info_Page');
  });
  $("#NYT_Page_Button").click(function () {
    show_page('#NYT_Page');
  });
  $("#YT_Page_Button").click(function () {
    show_page('#YouTube_Page')
  });
  $("#Last_YouTube_Video").click(function () {
    window.open('youtube.html');
  })

  $("#Music_Audio").click(function () {
    show_page('#Music_Audio_Page')
  })

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
    presentation('Playlist.jpg', changeFormatPortfolio("default"), 'Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.')
  });

  $("#Stock").click(function () {
    presentation('Stocks.jpg', changeFormatPortfolio("default"), 'This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now.');
  });

//For the Audio songs page buttons
  $("#Song_Next").click(function() {
    Next_Song($('#Song_Title').text());
  })

  $("#Song_Previous").click(function() {
    Prev_Song($('#Song_Title').text());
  })

  $("#Song_Play").click(function() {
    player.play();
  });

  $("#Song_Pause").click(function() {
    player.pause();
  });

  $("#Song_Selector_Button").click(function() {
    if ($("#Song_Selector_Button").text().includes("Open")) {
      $("#Song_Selector_Button").text("Close Song Selector");
      $("#Song_Buttons_div").css("padding-bottom", "0px");
      $("#Song_Selector").show();
    }
    else {
      $("#Song_Selector_Button").text("Open Song Selector");
      $("#Song_Buttons_div").css("padding-bottom", "335px");
      $("#Song_Selector").hide();
    }
  });

  $("#Song_Confirm_Button").click(function() {
    audio_to($("#Song_Selection").val());
    console.log("work");
  })

function next(current) {

//Music Part
  switch(current){
    case "img/Playlist.jpg":
      presentation('Discord-Music-Program_01.jpg', changeFormatPortfolio("long"), 'Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.');
      break;
    case "img/Discord-Music-Program_01.jpg":
      fade('img/Discord-Music-Program_02.jpg');
      break;
    case "img/Discord-Music-Program_02.jpg":
      presentation('Discord-Music-Program_03.jpg', changeFormatPortfolio("default"), 'This is the prompt when the program is ran.');
      break;
    case "img/Discord-Music-Program_03.jpg":
      presentation('Discord-Music-Program_04.jpg', changeFormatPortfolio("default"), 'This is what the current note looks like before the program is ran.');
      break;
    case "img/Discord-Music-Program_04.jpg":
      presentation('Discord-Music-Program_05.jpg', changeFormatPortfolio("default"), 'For this example I entered the max, 49.');
      break;
    case "img/Discord-Music-Program_05.jpg":
      presentation('Discord-Music-Program_06.jpg', changeFormatPortfolio("default"),  'Now the note is filled with a bunch of songs I can copy to YouTube or Discord.');
      break;
    case "img/Discord-Music-Program_06.jpg":
      presentation('Playlist.jpg', changeFormatPortfolio("default"), "This was a smaller project I did back when Youtube had a hard time with longer playlists.  The main goal was to make a program that shuffles a bunch of music I like and give me the url's.  Although, I also wanted to use this for a bot in Discord so, as you will see later, that is where the '>play' comes in.  That was the prefix and command for the bot to play a song.  Continue to the next image.");
      break;

//Stock Part
    case "img/Stocks.jpg":
      presentation('Stocks_Program_01.jpg', changeFormatPortfolio("Stock"), "And here we are the main code of the whole procedure.  Anything under the 'robot' package is a class I custom made and we will go into later.  The rest of the imports are Java's and I just utilized them.  We start off with assigning the classes to be objects so they can be used later.  There is also a list of tickers I used to watch for one reason or another.  The JFrame part is setup early and is used to get an input later.  Continue to the next image.");
      break;
    case "img/Stocks_Program_01.jpg":
      presentation('Stocks_Program_02.jpg', changeFormatPortfolio("Stock"), "After the JFrame is setup, I add a button listener to get the text when pressed.  It then opens Excel, goes to cell A1 and prompts the user for which cell is empty.  It then moves there and the program begins... It will type the date in the first row cell and then move down a row.  If it is the first ticker, it realizes it needs to open Firefox before searching.  It then finds which format the stock was. Weirdly enough there was only a few different formats.  By formats, I mean the coordinates.  It then highlights the price and copies it.  This is where the JFrame comes in.  It will then past the price per stock (PPS) into the field and press the button itself.  Continue to next image...");
      break;
    case "img/Stocks_Program_02.jpg":
      presentation('Stocks_Program_03.jpg', changeFormatPortfolio("Stock"), "Once the button is pressed, it will check the previous PPS (price per stock) and make sure it is not the same (it miscopied) or if it copied text instead.  If it did, it will go back a few stock and redo them.  That is the very simplified version of what this encompasses.");
      break;
    case "img/Stocks_Program_03.jpg":
      presentation('Stocks_Program_04.jpg', changeFormatPortfolio("Stock"), "Now lets get to some of the helper classes.  The first one is Actions.  This one is fairly simple.  It uses a robot class to mimic human button presses.  Actions from pressing buttons like 'alt', 'control,' clicking, or 'windows button' are created here into subfunctions to save on code.  This was used for many of my projects that had automation.");
      break;
    case "img/Stocks_Program_04.jpg":
      presentation('Stocks_Program_05.jpg', changeFormatPortfolio("Stock"), "Now lets move on to the Excel class.  This is another helper class that deals with Excel related functions.  The first function just opens Excel using x, y coordinates.  The second opens the Stocks file.  Honestly, I don't remember the Open_Excel_Tab one.  Continue to next image.");
      break;
    case "img/Stocks_Program_05.jpg":
      presentation('Stocks_Program_06.jpg', changeFormatPortfolio("Stock"), "While the first few functions of this Excel class were simple.  This one is one of the most complicated and confusing functions in the program.  I don't even know how I even went through the thought process to make this becuase it is just plain weird.  The idea was to turn letters into numbers to determine how many times the right arronw key needed pressed.  For example, it starts at A1 and needs to get to C1.  It would press right two times.  But for whatever reason, I decided to just make this more difficult on myself and go out to three letters.  Lets go over how this works (if I can still remember).  It brings in the letter(s) that it needs to go to (Ex 'c').  It will then get the index of the letter in a list of letters and add one.  Simple for one number right?  Well, it gets a little more complicated for two.  To get each letter individually, it will split the string into two with one letter each.  For the double letter ('AA') it will get its location as if it were a single number and then multiply by 26.  The reason is becuase if it was 'B-' then it would have to go through all the single letters and then through all A's before getting to 'B-'.  Hope that makes sense becase it only gets more complicated.  After it does the muliplication it will add the letter to the total (Ex: BB = 54 because B- = 52 and -B = 2).  Continue to the next image for the headache.");
      break;
    case "img/Stocks_Program_06.jpg":
      presentation('Stocks_Program_07.jpg', changeFormatPortfolio("Stock"), "So for three letters, going from 'A' to 'AAA' is 676 cells away.  I don't even remember how I came to this conclusion.  I went through so many different math problems.  I believe it was something around the lines of multiplying 26 by 26 (the amount of letters in the alpabet x how many times it will need to go through 2 letters).  I really don't understand the logic anymore, but it worked at one time.");
      break;
    case "img/Stocks_Program_07.jpg":
      presentation('Stocks_Program_08.jpg', changeFormatPortfolio("Stock"), "Move to cell x, y, and xy are self explanitory as to what they do.  Move to cell arrow uses those functions to figure out how many times the arrow button needs to be pressed and which way.");
      break;
    case "img/Stocks_Program_08.jpg":
      presentation('Stocks_Program_09.jpg', changeFormatPortfolio("Stock"), "A better view of move to cell arrow.");
      break;
    case "img/Stocks_Program_09.jpg":
      presentation('Stocks_Program_10.jpg', changeFormatPortfolio("Stock"), "The final function in Excel that moves to a cell and clicks it.");
      break;
    case "img/Stocks_Program_10.jpg":
      presentation('Stocks_Program_11.jpg', changeFormatPortfolio("Stock"), "Type is a helper class that allows my program to mimic key presses for numbers, letters, and symbols.  It a large amount of code but it all looks the same.  It just goes through all uppercase and lowercase letters, numbers, and symbols as I just mentioned.  All together it is just shy of 1000 lines of code (its 940 lines).");
      break;
    case "img/Stocks_Program_11.jpg":
      presentation('Stocks_Program_12.jpg', changeFormatPortfolio("Stock"), "Firefox is a helper class that has functions all related to Firefox like Excel.  The one shown here just figures out where the new tab is depending on how many tabs are open using x, y coordinates.  Probably does not work anymore due to Firefox updating the location.");
      break;
    case "img/Stocks_Program_12.jpg":
      presentation('Stocks_Program_13.jpg', changeFormatPortfolio("Stock"), "And we are at the final stop of the tour.  Here are some more Firefox functions.  Search_Bar just goes to the search bar and presses it.  Search_String uses the same code as Search_Bar (not sure why I just didn't call it) and searches a string.  Open_and_Search_String has a similar process but it opens Firefox.");
      break;
    case "img/Stocks_Program_13.jpg":
      presentation('Stocks.jpg', changeFormatPortfolio("default"), "This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now.");
      break;
  }
};

function previous(current) {
//Music Part
  switch (current){
    case "img/Playlist.jpg":
      presentation('Discord-Music-Program_06.jpg', changeFormatPortfolio("default"), 'Now the note is filled with a bunch of songs I can copy to YouTube or Discord.');
      break;
    case "img/Discord-Music-Program_01.jpg":
      presentation('Playlist.jpg', changeFormatPortfolio("default"), "This was a smaller project I did back when Youtube had a hard time with longer playlists.  The main goal was to make a program that shuffles a bunch of music I like and give me the url's.  Although, I also wanted to use this for a bot in Discord so, as you will see later, that is where the '>play' comes in.  That was the prefix and command for the bot to play a song.  Continue to the next image.");
      break;
    case "img/Discord-Music-Program_02.jpg":
      fade('img/Discord-Music-Program_01.jpg');
      break;
    case "img/Discord-Music-Program_03.jpg":
      presentation('Discord-Music-Program_02.jpg', changeFormatPortfolio("long"), 'Here we can see the main code.  What the program does in a nutshell is open a file and delete all contents contained within it.  It will keep getting random number and check if that song has already been recomended.  If not, it will add it to the list.');
      break;
    case "img/Discord-Music-Program_04.jpg":
      presentation('Discord-Music-Program_03.jpg', changeFormatPortfolio("default"), 'This is the prompt when the program is ran.');
      break;
    case "img/Discord-Music-Program_05.jpg":
      presentation('Discord-Music-Program_04.jpg', changeFormatPortfolio("default"), 'This is what the current note looks like before the program is ran.');
      break;
    case "img/Discord-Music-Program_06.jpg":
      presentation('Discord-Music-Program_05.jpg', changeFormatPortfolio("default"), 'For this example I entered the max, 49.');
      break;

//Stocks part
    case "img/Stocks.jpg":
      presentation('Stocks_Program_13.jpg', changeFormatPortfolio("Stock"), "And we are at the final stop of the tour.  Here are some more Firefox functions.  Search_Bar just goes to the search bar and presses it.  Search_String uses the same code as Search_Bar (not sure why I just didn't call it) and searches a string.  Open_and_Search_String has a similar process but it opens Firefox.");
      break;
    case "img/Stocks_Program_01.jpg":
      presentation('Stocks.jpg', changeFormatPortfolio("default"), "This was one of my first large scale programs and... oh boy... it took a long time to make and a lot of frustration was had making it.  Overall I am happy the way it came out with the little knowledge I had.  Sadly it does not work anymore since the way it was formatted relied on coordinates and the locations changed.  Still a great work to look at.  I will say there are a lot of images for this project and I will try to describe everything as this is over 2-3 years old now.");
      break;
    case "img/Stocks_Program_02.jpg":
      presentation('Stocks_Program_01.jpg', changeFormatPortfolio("Stock"), "And here we are the main code of the whole procedure.  Anything under the 'robot' package is a class I custom made and we will go into later.  The rest of the imports are Java's and I just utilized them.  We start off with assigning the classes to be objects so they can be used later.  There is also a list of tickers I used to watch for one reason or another.  The JFrame part is setup early and is used to get an input later.  Continue to the next image.");
      break;
    case "img/Stocks_Program_03.jpg":
      presentation('Stocks_Program_02.jpg', changeFormatPortfolio("Stock"), "After the JFrame is setup, I add a button listener to get the text when pressed.  It then opens Excel, goes to cell A1 and prompts the user for which cell is empty.  It then moves there and the program begins... It will type the date in the first row cell and then move down a row.  If it is the first ticker, it realizes it needs to open Firefox before searching.  It then finds which format the stock was. Weirdly enough there was only a few different formats.  By formats, I mean the coordinates.  It then highlights the price and copies it.  This is where the JFrame comes in.  It will then past the price per stock (PPS) into the field and press the button itself.  Continue to next image...");
      break;
    case "img/Stocks_Program_04.jpg":
      presentation('Stocks_Program_03.jpg', changeFormatPortfolio("Stock"), "Once the button is pressed, it will check the previous PPS (price per stock) and make sure it is not the same (it miscopied) or if it copied text instead.  If it did, it will go back a few stock and redo them.  That is the very simplified version of what this encompasses.");
      break;
    case "img/Stocks_Program_05.jpg":
      presentation('Stocks_Program_04.jpg', changeFormatPortfolio("Stock"), "Now lets get to some of the helper classes.  The first one is Actions.  This one is fairly simple.  It uses a robot class to mimic human button presses.  Actions from pressing buttons like 'alt', 'control,' clicking, or 'windows button' are created here into subfunctions to save on code.  This was used for many of my projects that had automation.");
      break;
    case "img/Stocks_Program_06.jpg":
      presentation('Stocks_Program_05.jpg', changeFormatPortfolio("Stock"), "Now lets move on to the Excel class.  This is another helper class that deals with Excel related functions.  The first function just opens Excel using x, y coordinates.  The second opens the Stocks file.  Honestly, I don't remember the Open_Excel_Tab one.  Continue to next image.");
      break;
    case "img/Stocks_Program_07.jpg":
      presentation('Stocks_Program_06.jpg', changeFormatPortfolio("Stock"), "While the first few functions of this Excel class were simple.  This one is one of the most complicated and confusing functions in the program.  I don't even know how I even went through the thought process to make this becuase it is just plain weird.  The idea was to turn letters into numbers to determine how many times the right arronw key needed pressed.  For example, it starts at A1 and needs to get to C1.  It would press right two times.  But for whatever reason, I decided to just make this more difficult on myself and go out to three letters.  Lets go over how this works (if I can still remember).  It brings in the letter(s) that it needs to go to (Ex 'c').  It will then get the index of the letter in a list of letters and add one.  Simple for one number right?  Well, it gets a little more complicated for two.  To get each letter individually, it will split the string into two with one letter each.  For the double letter ('AA') it will get its location as if it were a single number and then multiply by 26.  The reason is becuase if it was 'B-' then it would have to go through all the single letters and then through all A's before getting to 'B-'.  Hope that makes sense becase it only gets more complicated.  After it does the muliplication it will add the letter to the total (Ex: BB = 54 because B- = 52 and -B = 2).  Continue to the next image for the headache.");
      break;
    case "img/Stocks_Program_08.jpg":
      presentation('Stocks_Program_07.jpg', changeFormatPortfolio("Stock"), "So for three letters, going from 'A' to 'AAA' is 676 cells away.  I don't even remember how I came to this conclusion.  I went through so many different math problems.  I believe it was something around the lines of multiplying 26 by 26 (the amount of letters in the alpabet x how many times it will need to go through 2 letters).  I really don't understand the logic anymore, but it worked at one time.");
      break;
    case "img/Stocks_Program_09.jpg":
      presentation('Stocks_Program_08.jpg', changeFormatPortfolio("Stock"), "Move to cell x, y, and xy are self explanitory as to what they do.  Move to cell arrow uses those functions to figure out how many times the arrow button needs to be pressed and which way.");
      break;
    case "img/Stocks_Program_10.jpg":
      presentation('Stocks_Program_09.jpg', changeFormatPortfolio("Stock"), "A better view of move to cell arrow.");
      break;
    case "img/Stocks_Program_11.jpg":
      presentation('Stocks_Program_10.jpg', changeFormatPortfolio("Stock"), "The final function in Excel that moves to a cell and clicks it.");
      break;
    case "img/Stocks_Program_12.jpg":
      presentation('Stocks_Program_11.jpg', changeFormatPortfolio("Stock"), "Type is a helper class that allows my program to mimic key presses for numbers, letters, and symbols.  It a large amount of code but it all looks the same.  It just goes through all uppercase and lowercase letters, numbers, and symbols as I just mentioned.  All together it is just shy of 1000 lines of code (its 940 lines).");
      break;
    case "img/Stocks_Program_13.jpg":
      presentation('Stocks_Program_12.jpg', changeFormatPortfolio("Stock"), "Firefox is a helper class that has functions all related to Firefox like Excel.  The one shown here just figures out where the new tab is depending on how many tabs are open using x, y coordinates.  Probably does not work anymore due to Firefox updating the location.");
      break;
  }
}

//Used for the song page to get the next song.  Only decides which song is next.
function Next_Song (current) {
  switch (current) {
    case "Hungry Like The Wolf":
      audio_to("Every Time I Look for You");
      break;
    case "Every Time I Look for You":
      audio_to("Leaving On a Jet Plane");
      break;
    case "Leaving On a Jet Plane":
      audio_to("One Day");
      break;
    case "One Day":
      audio_to("The Reckless and the Brave");
      break;
    case "The Reckless and the Brave":
      audio_to("Superman");
      break;
    case "Superman":
      audio_to("Fly Me To The Moon Cover");
      break;
    case "Fly Me To The Moon Cover":
      audio_to("The Judge");
      break;
    case "The Judge":
      audio_to("Hungry Like The Wolf");
      break;
  }
}

function Prev_Song (current) {
  switch (current) {
    case "Hungry Like The Wolf":
      audio_to("The Judge");
      break;
    case "Every Time I Look for You":
      audio_to("Hungry Like The Wolf");
      break;
    case "Leaving On a Jet Plane":
      audio_to("Every Time I Look for You");
      break;
    case "One Day":
      audio_to("Leaving On a Jet Plane");
      break;
    case "The Reckless and the Brave":
      audio_to("One Day");
      break;
    case "Superman":
      audio_to("The Reckless and the Brave");
      break;
    case "Fly Me To The Moon Cover":
      audio_to("Superman");
      break;
    case "The Judge":
      audio_to("Fly Me To The Moon Cover");
      break;
  }
}

function fade (img) {
  $("#img").fadeOut(400, function () {
    $('#img').attr('src', img);
    $("#img").fadeIn(400);
  });
}

function changeFormatPortfolio(clas) {
  $('#img').removeClass("long");
  $('#img').removeClass("default");
  $('#img').removeClass("Stock");
  $('#img').addClass(clas);
}

function presentation (img, format, text) {
  fade('img/' + img);
  format;
  $('p#Project_Desc').text(text);
}

//All the back end to change the song.
function audio_to (song) {
  player.pause(); //Pauses current song
  player.currentTime = 0; //Sets the time to 0:00
  console.log("work4")
  switch(song) { //Figues out which song needs to play.
    case ("Hungry Like The Wolf"):
      $('#audio_player').attr('src', 'audio/Hungry Like The Wolf.mp3'); //Changes the song
      $('#Song_Title').text("Hungry Like The Wolf"); //Changes the Title
      $('#Song_Artist').text("Duran Duran"); //Changes the Author
      break;
    case ("Every Time I Look for You"):
      $('#audio_player').attr('src', 'audio/Every Time I Look for You.mp3');
      $('#Song_Title').text("Every Time I Look for You");
      $('#Song_Artist').text("Blink-182");
      break;
    case ("Leaving On a Jet Plane"):
      $('#audio_player').attr('src', 'audio/Leaving On a Jet Plane.mp3');
      $('#Song_Title').text("Leaving On a Jet Plane");
      $('#Song_Artist').text("John Denver");
      break;
    case ("One Day"):
      $('#audio_player').attr('src', 'audio/One Day.mp3');
      $('#Song_Title').text("One Day");
      $('#Song_Artist').text("Matisyahu");
      break;
    case ("The Reckless and the Brave"):
      $('#audio_player').attr('src', 'audio/The Reckless and the Brave.mp3');
      $('#Song_Title').text("The Reckless and the Brave");
      $('#Song_Artist').text("All Time Low");
      break;
    case ("Superman"):
      $('#audio_player').attr('src', 'audio/Superman.mp3');
      $('#Song_Title').text("Superman");
      $('#Song_Artist').text("GoldFinger");
      break;
    case ("Fly Me To The Moon Cover"):
        $('#audio_player').attr('src', 'audio/Fly Me To The Moon Cover.mp3');
        $('#Song_Title').text("Fly Me To The Moon Cover");
        $('#Song_Artist').text("TheDoo (Ft. Marcus Veltri & GBSN)");
        break;
    case ("The Judge"):
        $('#audio_player').attr('src', 'audio/The Judge.mp3');
        $('#Song_Title').text("The Judge");
        $('#Song_Artist').text("Twenty-One Pilots");
        break;
  }
  player.load(); //Preloads the song.
  player.volume = 0.3;
  player.play(); //Plays the song.
}

function show_page (page) {
  $("#Homepage").hide();
  $("#Table_Page").hide();
  $("#Styles_Page").hide();
  $("#Animation_Page").hide();
  $("#Portfolio_Page").hide();
  $("#API_Dropdown").hide();
  $("#API_Info_Page").hide();
  $("#NYT_Page").hide();
  $("#YouTube_Page").hide();
  $("#Music_Audio_Page").hide();
  $(page).show();
}
});
