const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}

import { React, useState, useEffect } from 'react';
import './Main.scss';
import Navbar from '../components/Navbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

export default function Main() {
  const [commentBox, setCommentBox] = useState([]);
  const [feeddata, setFeedData] = useState([]);

  useEffect(() => {
    fetch('./data/commentData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setCommentBox(data);
      });
  }, []);

  useEffect(() => {
    fetch('./data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => {
        setFeedData(data);
      });
  }, []);

  return (
    <div className="main">
      <Navbar />
      <div className="body">
        <Feed
          feeddata={feeddata}
          commentBox={commentBox}
          setCommentBox={setCommentBox}
        />
        <Rightbar />
      </div>
    </div>
  );
}
