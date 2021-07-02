import { Link } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import CurrentLocation from './Map2';


export class MapContainer  extends Component {
    state = {
        showingInfoWindow: false,  
        activeMarker: {},          
        selectedPlace: {}          
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        });
        }
    };

    render() {
       
        const mapStyles = {
            map: {
              position: 'absolute',
              width: '100%',
              height: '100%'
            }
        };
        
      return (
          
       
            <div className="hold-transition sidebar-mini layout-fixed" >
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    
                    <div className="content-wrapper" >
                        <div className="content-header">
                            <div className="container-fluid" >
                            <CurrentLocation
                                centerAroundCurrentLocation
                                google={this.props.google}
                                                    >
                                                    <Marker onClick={this.onMarkerClick} name={'My Current Location'} />
                                <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                                >
                                <div>
                                    <h4>{this.state.selectedPlace.name}</h4>
                                </div>
                                </InfoWindow>
                            </CurrentLocation>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    
      );
    }
}
  
export default GoogleApiWrapper({
    apiKey: 'AIzaSyB4TkU5ck4_xPPeson3smJBt0f4DliktdI'
  })(MapContainer);

  /* AIzaSyB4TkU5ck4_xPPeson3smJBt0f4DliktdI */