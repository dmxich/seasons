import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    //initialize the state
    /*
    constructor(props){
        super(props);
        this.state = {
            lat: null,
            longt: null,
            errorMessage: ' '

        };
    }
*/
    //or we can do the whole constructor in a single line
    state = {lat: null, longt: null, errorMessage: ''};

    componentDidMount(){
        console.log('Component mounted');
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position.coords.latitude, position.coords.longitude);
                this.setState({
                    lat: position.coords.latitude,
                    longt: position.coords.longitude
                });
            },
            error => {
                console.log(error);
                //this.setState({errorMessage: 'Error. Location is not recognized. Try again'});
                this.setState({
                    errorMessage: error.message
                });
            }
        );
    };


    componentDidUpdate(){
        console.log('Component updated');
    };



    componentWillUnmount(){
        console.log('Component unmounted');
    };

    renderContent() {

        if ((this.state.lat && !this.state.errorMessage) ||
            (this.state.longt && !this.state.errorMessage)) {
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} longt={this.state.longt} />
                    <div>Latitude: {this.state.lat}</div>
                    <div>Longitude: {this.state.longt}</div>
                </div>
            )
        }
        if ((this.state.errorMessage && !this.state.lat) ||
            (this.state.errorMessage && !this.state.longt)) {
            return (
                <div>Error : {this.state.errorMessage}</div>
            )
        } else {
            return (
                <div>
                    <Spinner message='Please, accept location request...' />
                </div>
            )

        }
    };

    //required by React
    render(){
        
        return (
            <div>
                {this.renderContent()}
            </div>
            
        )            
        
    };
};



    


ReactDOM.render(<App />, document.querySelector("#root"));