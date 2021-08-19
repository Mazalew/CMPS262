var apikey = 'AMKbGRakiNoTSOP0CTMGfPDMOlb5hPSk'
var urlbase = ''
var keyword = 'technology'
var query = 'q='
var apikeyidentity = 'api-key='

var url = urlbase + query + keyword + '&' + apikeyidentity + apikey;

function setup() {
  noCanvas();
  loadJSON(url, getData);
}

function getData(data) {
  var articles = data.response.docs;

  //Loop to get alll results from articlesearch
  for (var i = 0; i < articles.length; i++) {
    createElement('h1', articles[i].headline.main);
    createP(articles[i].snippet);
    createP(articles[i].lead_paragraph);
    createP(articles[i].web_url);
    console.log(work);
  }
}
