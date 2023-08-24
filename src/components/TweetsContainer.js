import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [tweet, setTweet] = useState(users[0])

  function userCallback(value){
    setUsers(value)
  }

  function tweetCallback(value){
    setTweet(value)
  }

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} userCallback={userCallback} tweetCallback={tweetCallback}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={tweet} />
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
