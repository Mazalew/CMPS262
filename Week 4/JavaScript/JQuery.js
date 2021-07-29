$(document).ready(function() {

  $("#Home").click(function () {
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Homepage").show();
  });

  $("#Table").click(function () {
    $("#Homepage").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").hide();
    $("#Table_Page").show();
  });

  $("#Styles").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Animation_Page").hide();
    $("#Styles_Page").show();
  });

  $("#Animation").click(function () {
    $("#Homepage").hide();
    $("#Table_Page").hide();
    $("#Styles_Page").hide();
    $("#Animation_Page").show();
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
});
