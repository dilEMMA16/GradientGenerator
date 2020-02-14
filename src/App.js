import React from 'react';
import './App.css';
import { Component } from 'react';
import Slider from 'react-rangeslider';
// To include the default styles
import 'react-rangeslider/lib/index.css'

//add in input slider -- control angle based on that

// button to copy css code for gradient

//show angle of gradient - button highlight, label, etc.

class App extends Component {

    constructor(props) {
        super(props);
        this.getNewGradient = this.getNewGradient.bind(this);
        this.handleDegreeChange = this.handleDegreeChange.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);

        let red1st = Math.floor(Math.random()*255);
        let red2nd = Math.floor(Math.random()*255);
        let red3rd = Math.floor(Math.random()*255);

        let green1st = Math.floor(Math.random()*255);
        let green2nd = Math.floor(Math.random()*255);
        let green3rd = Math.floor(Math.random()*255);

        let blue1st = Math.floor(Math.random()*255);
        let blue2nd = Math.floor(Math.random()*255);
        let blue3rd = Math.floor(Math.random()*255);

        let color1 = 'rgb(' + red1st + ',' + green1st + ',' + blue1st + ')';
        let color2 = 'rgb(' + red2nd + ','+ green2nd + ',' + blue2nd + ')';
        let color3 = 'rgb(' + red3rd + ','+ green3rd + ',' + blue3rd + ')';


        let deg = 180;



        this.state = {
                degrees: deg,
                x: 0,
                y: 0,
                color1: color1,
                color2: color2,
                color3: color3,
                gradient: {
                      backgroundColor: color1,
                      backgroundImage: `linear-gradient(${deg}deg, ${color1} 0%, ${color2} 50%, ${color3} 100%)`,
                },
              };
              console.log("constructor");
              console.log(this.state);
    }




    componentDidMount(){
        console.log("did mount");
        console.log(this.state.gradient);
    }


    handleDegreeChange = (degrees) => {
            let prevDegrees = this.state.degrees;
            console.log(prevDegrees + "DEG");
            console.log(degrees);

            let newDegrees = (360 - prevDegrees) + degrees;

            console.log(newDegrees + "DEG2");

            let appDiv = document.getElementById('app');
            let rotate = appDiv.style.transform = `rotate(${newDegrees})`

            let c1 = this.state.color1;
            let c2 = this.state.color2;
            let c3 = this.state.color3;
            let deg = degrees;

            console.log(deg + "logs");

            this.setState((state) => {
                // Important: read `state` instead of `this.state` when updating.
                return {
                    gradient: {
                          backgroundColor: c1,
                          backgroundImage: `linear-gradient(${deg}deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
                    },
                    deg: degrees,
                    degrees: degrees,
                }
              });

             console.log(this.state);
    }


    getNewGradient() {

            let red1st = Math.floor(Math.random()*255);
            let red2nd = Math.floor(Math.random()*255);
            let red3rd = Math.floor(Math.random()*255);

            let green1st = Math.floor(Math.random()*255);
            let green2nd = Math.floor(Math.random()*255);
            let green3rd = Math.floor(Math.random()*255);

            let blue1st = Math.floor(Math.random()*255);
            let blue2nd = Math.floor(Math.random()*255);
            let blue3rd = Math.floor(Math.random()*255);

            let c1 = 'rgb(' + red1st + ','+ green1st + ',' + blue1st + ')';
            let c2 = 'rgb(' + red2nd + ','+ green2nd + ',' + blue2nd + ')';
            let c3 = 'rgb(' + red3rd + ','+ green3rd + ',' + blue3rd + ')';

            console.log(c1 + c2 + c3);

            this.setState((state) => {
                // Important: read `state` instead of `this.state` when updating.
                return {
                    x: 0,
                    y: 0,
                    deg: 180,
                    degrees: 180,
                    color1: c1,
                    color2: c2,
                    color3: c3,
                    gradient: {
                          backgroundColor: c1,
                          backgroundImage: `linear-gradient(180deg, ${c1} 0%, ${c2} 50%, ${c3} 100%)`,
                    },
                }
              });

                  console.log(this.state);
        }


//    onMouseMove(e) {
//        let x = e.nativeEvent.offsetX;
//        let y = e.nativeEvent.offsetY;
//
//
//        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
//        console.log(this.state.x + this.state.y);
//        let deg = (x + y) % 360;
//        console.log("new degs --> " + deg);
//        this.handleDegreeChange(deg);
//    }


    handleSliderChange = (e) => {
//        this.setState({deg: e.target.value});
        //this.setState({deg: e});
        this.setState((state) => {
            return {
                        deg: e,
                        degrees: e,
            }
        });
        console.log("new degs --> " + this.state.deg);
        this.handleDegreeChange(this.state.deg);
    }

//            <div className="App" id='app' onMouseMove={this.onMouseMove.bind(this)} style={this.state.gradient}>

//<input
//                      id="angle"
//                      type="range"
//                      className='slider'
//                      orient="vertical"
//                      min="0" max="360"
//                      value={this.state.deg}
//                      onChange={this.handleSliderChange}
//                      step="1"/>

    render() {
        return (
            <div className="App" id='app'  style={this.state.gradient}>
                <button id="switchGradientButton" onClick={this.getNewGradient}>
                      switch <br/>it up
                </button>
                <div id="colorsUsed">
                    {this.state.color1}
                    <br/>
                    {this.state.color2}
                    <br/>
                    {this.state.color3}
                    <br/><br/><br/><br/>
                    {this.state.degrees} &#176;
                    <br/><br/><br/><br/>
                    backgroundColor: {this.state.gradient.backgroundColor} <br/><br/>
                    backgroundImage: {this.state.gradient.backgroundImage}

                </div>
                <Slider
                    value={this.state.deg}
                    orientation='vertical'
                    onChange={this.handleSliderChange}
                    min={0}
                    max={360}
                    step={1}
                    id='valueSlider'
                />
                <div id="angleChoices">
                    <button id="180deg" onClick={() => { this.handleDegreeChange(180) }}>
                          180 <br/>deg
                    </button>
                    <br/>
                    <button id="180deg" onClick={() => { this.handleDegreeChange(90) }}>
                           &nbsp;90&nbsp; <br/>deg
                    </button>
                    <br/>
                    <button id="180deg" onClick={() => { this.handleDegreeChange(62) }}>
                            &nbsp;62&nbsp; <br/>deg
                    </button>
                </div>


            </div>
        )
    }


}







export default App;


