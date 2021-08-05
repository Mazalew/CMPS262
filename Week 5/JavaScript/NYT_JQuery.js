var apikey = 'AMKbGRakiNoTSOP0CTMGfPDMOlb5hPSk';
var urlbase_Article = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
var urlbase_Books = "https://api.nytimes.com/svc/books/v3/"
var keyword = 'technology';
var query = 'q=';
var apikeyidentity = 'api-key=';
var article_num = 0;
var docs;

var e = 0;
$(document).ready(function() {
  $("#NYT_Search_Submit").click(function () {
    keyword = $('#NYT_Article_txt').val();
    var url = urlbase_Article + query + keyword + '&' + apikeyidentity + apikey;
    docs = Example(url);
});

$("#NextNYT").click(function () {
  if (article_num < 9){
    article_num++;
  }
  else (
    alert("Only 10 articles are available at a time.")
  )
});

$("#PrevNYT").click(function () {
  if (article_num > 0) {
    article_num--;
  }
  else {
    alert("There is no article before this one.");
  }
});

function Example (url) {
  $.ajax({
    url: url,
    dataType:'json',
    type:'GET',
  }).done(function (data) {
    var docs = data.response.docs;
    getArticle(docs, article_num);
    return data;
    });
}

function getArticle (docs, num) {
  $('#NYT_Headline').text(docs[num].headline.main);
  $('#NYT_Author').text('Author: ' + docs[num].byline.person[0].firstname + ' ' + docs[num].byline.person[0].lastname);
  $('#NYT_Snippet').text(docs[num].snippet);
  $('#NYT_leadPara').text(docs[num].lead_paragraph);
  $('#NYT_URL').text(docs[num].web_url);
  $('#NYT_URL').attr('href', docs[num].web_url);
}
});
