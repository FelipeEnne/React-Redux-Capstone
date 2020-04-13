import React from 'react';
import PropTypes from 'prop-types';
import './Hero.css';

const Hero = props => {
  const { hero, handleClick } = props;
  const { id, name, image } = hero;

  const clickHandler = (value, render) => {
    handleClick(value, render);
  };

  return (
    <div className="hero-container">
      <h2 className="hero-name">{name}</h2>
      <button
        className="hero-button"
        type="button"
        onClick={() => clickHandler([2, id], 'heroFile')}
      >
        <img src={image} alt={name} className="hero-image" />
      </button>
    </div>
  );
};

Hero.propTypes = {
  handleClick: PropTypes.func.isRequired,
  hero: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    identity: PropTypes.string,
    image: PropTypes.string,
    chart: PropTypes.objectOf(PropTypes.string),
    filiation: PropTypes.arrayOf(PropTypes.string),
    alignment: PropTypes.string,
  }).isRequired,
};

export default Hero;
