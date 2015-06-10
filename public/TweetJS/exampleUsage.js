
var config = {
  "id": '594657566862508032',
  "domId": 'MyTweets',
  "maxTweets": 5,
  "enableLinks": true,

  "showUser": true,
  "showTime": true,
  "dateFunction": momentDateFormatter,
  "showRetweet": false

};

function momentDateFormatter(date, dateString) {
  return moment(dateString).fromNow();
}

twitterFetcher.fetch(config);


