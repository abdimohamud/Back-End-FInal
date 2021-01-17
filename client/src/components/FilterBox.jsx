import React, { useState } from "react";
import './styles/filter-box.scss';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import closeIcon from '../assets/global/close-icon.svg';

export default function FilterBox(props) {
  const [price, setPrice] = useState([0, 100]);
  const [bpm, setBpm] = useState([0, 100]);
  const [duration, setDuration] = useState([0, 600]);

  function priceChange(value) {
    setPrice(value);
  }

  function bpmChange(value) {
    setBpm(value);
  }

  function durationChange(value) {
    setDuration(value);
  }

  function toTime(value) {
    var date = new Date(0);
    date.setSeconds(value);
    var timeString = date.toISOString().substr(14, 5);
    return(timeString);
  }

  return (
    <div className="filter-box-container">
      <div className="menu-container">
        <div className="text-right d-none d-lg-block"><p className="reset">Clear All</p></div>
        <div className="d-lg-none text-right"><img src={closeIcon} alt="Close" /></div>
        <p>Price</p>
        <p className="slider-values">${price[0]} - ${price[1]}</p>
        <div className="slider-container">
          <Range
            allowCross={false}
            defaultValue={[0, 100]}
            trackStyle={[{ backgroundColor: '#DB5151' }]}
            handleStyle={[{ backgroundColor: '#DB5151' }, { backgroundColor: '#DB5151' }]}
            railStyle={{ backgroundColor: '#C4C4C4' }}
            onChange={priceChange}
          />
        </div>
        <p>Genre</p>
        <p className="genre-option">Free</p>
        <p className="genre-option">Hip Hop</p>
        <p className="genre-option">Pop</p>
        <p className="genre-option">Trap</p>
        <p className="genre-option">Trap</p>
        <p className="genre-option">Type Beat</p>
        <p>BPM</p>
        <p className="slider-values">{bpm[0]} - {bpm[1]}</p>
        <div className="slider-container">
          <Range
            allowCross={false}
            defaultValue={[0, 100]}
            trackStyle={[{ backgroundColor: '#DB5151' }]}
            handleStyle={[{ backgroundColor: '#DB5151' }, { backgroundColor: '#DB5151' }]}
            railStyle={{ backgroundColor: '#C4C4C4' }}
            onChange={bpmChange}
          />
        </div>
        <p>Duration</p>
        <p className="slider-values">{toTime(duration[0])} - {toTime(duration[1])}</p>
        <div className="slider-container">
          <Range
            allowCross={false}
            max={600}
            defaultValue={[0, 600]}
            trackStyle={[{ backgroundColor: '#DB5151' }]}
            handleStyle={[{ backgroundColor: '#DB5151' }, { backgroundColor: '#DB5151' }]}
            railStyle={{ backgroundColor: '#C4C4C4' }}
            onChange={durationChange}
            step={1}
          />
        </div>
        <div className="apply-button">APPLY</div>
        <div className="text-center d-lg-none"><p className="reset">Clear All</p></div>
      </div>
    </div>
  );
}
