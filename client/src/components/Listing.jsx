import React from 'react';
import './styles/listing.scss';
import playButton from '../assets/listing/play-icon.svg';
import play from '../assets/listing/play-count.svg';
import heart from '../assets/listing/heart-count.svg';
import comment from '../assets/listing/comment-count.svg';
import bag from '../assets/listing/bag-icon.svg';

export default function Listing(props) {

  return (
    <div className="listing-container">
      <div className="rank">
        {props.rank}.
      </div>
      <img className="cover-art" alt="Cover art" src={props.coverArt}/>
      <img className="play-icon" alt="" src={playButton}/>
      <div className="info-container">
        <p className="song-title">{props.songName}</p>
        <p className="song-producer">{props.producerName}</p>
        <div className="stats-container">
          <img alt="" src={play} />
          <p className="stat">{props.playCount}</p>
          <img className="desktop-only" alt="" src={heart} />
          <p className="desktop-only stat">{props.heartCount}</p>
          <img className="desktop-only" alt="" src={comment} />
          <p className="desktop-only stat">{props.commentCount}</p>
        </div>
      </div>
      <div className="purchase-button">
        ${props.price}<img alt="" src={bag} />
      </div>
    </div>
  );
}
