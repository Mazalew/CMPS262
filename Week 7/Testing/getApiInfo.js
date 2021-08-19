fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=knicks&api-key=AMKbGRakiNoTSOP0CTMGfPDMOlb5hPSk')
.then (response => {
  return response.json()
})
.then (data => {
  console.log(data.response.docs[0].headline.main)
  console.log(data.response.docs[0].snippet)
})
.catch(err => {
  console.log("error")
})
