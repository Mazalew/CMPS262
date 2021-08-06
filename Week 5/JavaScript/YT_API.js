var keyword = 'technology';
var video_num = 0;
var e = 0;
var pageToken = {};

$(document).ready(function() {
  $('#YT_Video_div').hide();
  $("#YT_Search_Submit").click(function () {
    searchYouTube();
    $('#YT_Video_div').show();
});

$("#NextYT").click(function () {
  if (video_num < 25){
    video_num++;
    $('#YT_video_num').text('Video Number: ' + (video_num + 1));
    searchYouTube();
  }
  else (
    alert("Only 25 videos are available at a time.")
  )
});

$("#PrevYT").click(function () {
  if (video_num > 0) {
    video_num--;
    $('#YT_video_num').text('Video Number: ' + (video_num + 1));
    searchYouTube();
  }
  else {
    alert("There is no video before this one.");
  }
});

function searchYouTube () {
  $.ajax({
    url:'https://www.googleapis.com/youtube/v3/search',
    dataType:'json',
    type:'GET',
    data: {
      key:'AIzaSyACOtPtfcuTcQa3PQ3NDm08FEldhbXUC88',
      q: $('#YT_Video_Search_txt').val(),
      part: 'snippet',
      maxResults: 25,
      pageToken: pageToken.current
    }
  }).done(function(data){

    pageToken.nextPage = data.nextPageToken;
    pageToken.prevPage = data.prevPageToken;
    console.log(data);
    if (data.items[video_num].id.kind === "youtube#video"){
      $('#YT_Video_Title').text(data.items[video_num].snippet.title);
      $('#YT_Channel').text('Channel: ' + data.items[video_num].snippet.channelTitle);
      $('#YT_Video_Thumbnail').attr('src', data.items[video_num].snippet.thumbnails.medium.url);
    }
    else {
      video_num++;
      searchYouTube();
    }
  })
}

function getArticle (docs, num) {
  $('#NYT_Headline').text(docs[num].headline.main);
  try {
    $('#NYT_Author').text('Author: ' + docs[num].byline.person[0].firstname + ' ' + docs[num].byline.person[0].lastname);
  }
  catch(e) {
    $('#NYT_Author').text('Author unknown');
    console.log(e);
  };
  $('#NYT_Snippet').text(docs[num].snippet);
  $('#NYT_leadPara').text(docs[num].lead_paragraph);
  $('#NYT_URL').text(docs[num].web_url);
  $('#NYT_URL').attr('href', docs[num].web_url);
}
});
