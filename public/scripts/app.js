/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// console.log('im working')
// Document ready
$(function() {
  // var data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  //     },
  //     "created_at": 1461113796368
  //   }
  // ];


  function createTweetElement(tweet) {
    const { name, handle } = tweet.user;
    const html = `
      <article class="tweet">
        <header>
          <img src="${tweet.user.avatars.small}" class="userPic">
          <h3>${ name }</h3>
          <p>${ handle }</p>
        </header>
          <p>${ tweet.content.text }</p>
        <footer>
          <div class="icons">
          <i class="fa fa-flag"></i>
          <i class="fa fa-heart"></i>
          <i class="fa fa-retweet"></i>
          </div>
          <p>${moment(new Date(tweet.created_at)).startOf('hour').fromNow()}</p>
        </footer>
      </article>
    `;
    return html;
  }


  // loops through tweets
  function renderTweets(tweets) {
    var $tweetContainer = $('#allTweets');
    $tweetContainer.empty();
    tweets.forEach(function(tweet) {
      $tweetContainer.prepend(createTweetElement(tweet));
    });
    // console.log('tweets');


    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

 function createNewTweet(data) {

    $.ajax({
      url: '/tweets',
      type: 'POST',
      data: data,
      success: loadTweets
    });
  }

function loadTweets() {
    $.ajax({
      url: '/tweets',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        renderTweets(data);
      }
    });
  }
  loadTweets();



  $('form').submit(function(evt) {
    evt.preventDefault();
    var text = $('textarea').val();
    if (text.length === 0) {
      alert('You forgot to put something in the form field');
    } else if (text.length > 140) {
      alert('Max Character limit exceeded');
    } else {
      var formStuff = $( this ).serialize();
      createNewTweet(formStuff);
      $('textarea').val('');
    }
  });

  renderTweets(data);

    $(".new-tweet").hide();

    $("button").click(function() {
      $(".new-tweet").slideToggle();
      $('textarea').focus();
      $("body").scrollTop(0);
  });

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}
});