import React, { useState } from "react";

function TweetItem(props) {

  const [tweetCount, setTweetCount] = useState(props.tweet.favorite_count)
  
  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={() => setTweetCount(tweetCount => tweetCount + 1)}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {tweetCount} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
