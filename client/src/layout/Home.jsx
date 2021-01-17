import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './styles/home.scss';
import search from '../assets/home/search-icon.svg';
import headphone from '../assets/home/headphone-icon.svg';
import computer from '../assets/home/computer-icon.svg';
import genre from '../assets/home/genre-icon.svg';
import pop from '../assets/home/pop.png';
import hipHop from '../assets/home/hip-hop.png';
import loFi from '../assets/home/lo-fi.png';
import typeBeat from '../assets/home/type-beat.png';
import trap from '../assets/home/trap.png';
import free from '../assets/home/free.png';
import star from '../assets/home/star-icon.svg';
import { Listing } from '../components';
import coverArt from '../assets/listing/coverart-1.png';

export default function Home() {
  const [tabs, setTabs] = useState(['active', 'inactive', 'inactive']);

  function setActive(index){
    var arr = ['inactive', 'inactive', 'inactive'];
    arr[index] = 'active';
    setTabs(arr);
  }

  function mainBody() {
    if(tabs[0] === "active") return displayHomeTables("TOP RATED", "NEW UPLOADS");
    else if(tabs[1] === "active") return displayHomeTables("TOP PRODUCERS", "NEW PRODUCERS");
    else return displayGenres();
  }

  function displayHomeTables(title1, title2){
    return (
      <div className="container tables-container">
        <div className="row">
          <div className="col-lg">
            <div className="table">
              <div className="title"><img alt="" src={star} /> {title1}</div>
              <Listing rank={1} coverArt={coverArt} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={2} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <div className="button-container">
                <Link to="/page">View All</Link>
              </div>
            </div>
          </div>
          <div className="col-lg">
            <div className="table">
              <div className="title"><img alt="" src={star} /> {title2}</div>
              <Listing rank={1} coverArt={coverArt} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={2} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <div className="button-container">
                <Link to="/page">View All</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function displayGenres(){
    return (
      <div className="container genres-container">
        <div className="row">
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/pop">
              <img alt="POP" src={pop} />
            </Link>
            <p className="title">POP</p>
            <p className="count">120 Tracks</p>
          </div>
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/hip-hop">
              <img alt="HIP HOP" src={hipHop} />
            </Link>
            <p className="title">HIP HOP</p>
            <p className="count">120 Tracks</p>
          </div>
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/lo-fi">
              <img alt="LO-FI" src={loFi} />
            </Link>
            <p className="title">LO-FI</p>
            <p className="count">120 Tracks</p>
          </div>
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/type-beat">
              <img alt="TYPE BEAT" src={typeBeat} />
            </Link>
            <p className="title">TYPE BEAT</p>
            <p className="count">120 Tracks</p>
          </div>
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/trap">
              <img alt="TRAP" src={trap} />
            </Link>
            <p className="title">TRAP</p>
            <p className="count">120 Tracks</p>
          </div>
          <div className="col-6 col-lg-4 genre-option">
            <Link to="/listings/free">
              <img alt="FREE" src={free} />
            </Link>
            <p className="title">FREE</p>
            <p className="count">120 Tracks</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="home">
      <div className="hero-container">
        <div className="container text-center">
          <h1>Produce. Listen. Buy<br />From The Best</h1>
          <div className="input-container">
            <input type="text" placeholder='Search "hop hop beat" or "hip hop"' />
            <div className="search-icon-container">
              <img src={search} alt="Search" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row no-gutters">
          <div className="col">
            <div className={'home-view-option ' + tabs[0]} onClick={() => setActive(0)}>
              <img alt="Beats" src={headphone} />
              <span className="desktop-only">Beats</span>
            </div>
          </div>
          <div className="col">
            <div className={'home-view-option ' + tabs[1]} onClick={() => setActive(1)}>
              <img alt="Producers" src={computer} />
              <span className="desktop-only">Producers</span>
            </div>
          </div>
          <div className="col">
            <div className={'home-view-option ' + tabs[2]} onClick={() => setActive(2)}>
              <img alt="Genres" src={genre} />
              <span className="desktop-only">Genres</span>
            </div>
          </div>
        </div>
      </div>
      {mainBody()}
    </div>
  );
}
