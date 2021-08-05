var apikey = 'AMKbGRakiNoTSOP0CTMGfPDMOlb5hPSk';
var urlbase = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
var keyword = 'technology';
var query = 'q=';
var apikeyidentity = 'api-key=';



var article_num = 0;

var e = 0;
$(document).ready(function() {
  $("#NYT_Search_Submit").click(function () {
    keyword = $('#NYT_Article_txt').val();
    var url = urlbase + query + keyword + '&' + apikeyidentity + apikey;
    t(url);
});

function t (url) {
  $.ajax({
    url: url,
    dataType:'json',
    type:'GET',
  }).done(function (data) {
    var docs = data.response.docs;
    $('#NYT_Headline').text(docs[article_num].headline.main);
    $('#NYT_Snippet').text(docs[article_num].snippet);
    $('#NYT_leadPara').text(docs[article_num].lead_paragraph);
    $('#NYT_URL').text(docs[article_num].web_url);
    $('#NYT_URL').attr('href', docs[article_num].web_url);
    }
  );
}

});
