import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './styles/listings.scss';
import { Listing, FilterBox } from '../components';
import coverArt from '../assets/listing/coverart-1.png';
import filterIcon from '../assets/listing/filter-icon.svg';
import sortIcon from '../assets/listing/sort-icon.svg';
import topIcon from '../assets/listing/top-filter-icon.svg';
import closeIcon from '../assets/global/close-icon.svg';


const Listings=(props) => {
  const [title, setTitle] = useState('');
  const [showSort, setShowSort] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  let { category } = useParams();

  useEffect(
    () => {
      if(category === "pop"){
        setTitle("POP");
      }
      else if(category === "hip-hop"){
        setTitle("HIP HOP");
      }
      else if(category === "lo-fi"){
        setTitle("LO-FI");
      }
      else if(category === "type-beat"){
        setTitle("TYPE BEAT");
      }
      else if(category === "trap"){
        setTitle("TRAP");
      }
      else if(category === "free"){
        setTitle("FREE");
      }
      else{
        setTitle("ERROR");
      }
    },
    [],
  );

  function toggleFilters(){
    if(showFilters === '') setShowFilters(true);
    else setShowFilters(false);
  }

  function toggleSort(){
    if(showSort === '') setShowSort('show');
    else setShowSort('');
  }

  return (
    <div className="listings-page">
      <h1 className="text-center">{title}</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <FilterBox />
          </div>
          <div className="col-lg-9 offset-lg-1">
            <div className="options-container">
              <div className="button d-lg-none" onClick={toggleFilters}>
                <img alt="" src={filterIcon} /> Filter
              </div>
              <div className="button" onClick={toggleSort}>
                <img alt="" src={sortIcon} /> Sort
              </div>
              <div className={"sort-options " + showSort}>
                <div>Sort By <img src={closeIcon} onClick={toggleSort} alt="Close" /></div>
                <p><img src={topIcon} alt="" />Top</p>
                <p>Price (Low to High)</p>
                <p>Price (High to Low)</p>
                <p>Newest</p>
              </div>
            </div>
            <div className="table">
              <Listing rank={1} coverArt={coverArt} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={2} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={3} coverArt={coverArt} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={4} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={5} coverArt={coverArt} songName={"Song1"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={6} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
              <Listing rank={7} coverArt={coverArt} songName={"Song2"} producerName={"Producer Name"} playCount={"2.2k"} heartCount={324} commentCount={32} price={59.99} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Listings