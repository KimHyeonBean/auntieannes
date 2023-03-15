import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navElement">
        <img
          src="images/sangwon/instagram.png"
          className="images"
          alt="insta"
        />
        <span id="instaId" className="mainTitle">
          westagram
        </span>
      </div>
      <div className="navElement">
        <FontAwesomeIcon className="search" icon={faMagnifyingGlass} />
        <input className="inputbox" type="text" placeholder="검색" />
      </div>
      <div className="navElement">
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          className="images"
          alt="compass"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          className="images"
          alt="heart"
        />
        <img
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          className="images"
          alt="myinfo"
        />
      </div>
    </nav>
  );
};
