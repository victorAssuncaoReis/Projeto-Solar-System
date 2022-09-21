import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    console.log(this.props);
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planetas">
        <p data-testid="planet-name">{planetName}</p>
        <img id={ planetName } src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
