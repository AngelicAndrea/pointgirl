import React, { Component } from 'react';

class Map extends Component {
  // For conciseness simply included all parameters in the querystring directly
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://geocoder.api.here.com/6.2/geocode.json?gen=8',
      points: [],
    }
  }

  // Helper function to format list of points
  getPOIList() {
    if (this.state.points.length > 0) {
      let param = '&poi=';
      for (var poi in this.state.points) {
        param += poi.latitude + ',' + poi.longitude;
      }
      return param;
    }
    return '';
  }

  // Render method builds the URL dynamically to fetch the image from the
  // HERE Map Image API

  render() {
    return (
      <img
        src={this.state.url
          + '&oHheQK8c0IwdjMZnpAIB' + this.props.app_id
          + '&rRxmrNmyb-EHZ4nP5NwBNQ' + this.props.app_code
          + this.getPOIList()
        }
        alt="Map" />
    );
  }
}

export default Map;

// + '&app_id=' + this.props.app_id
// + '&app_code=' + this.props.app_code
