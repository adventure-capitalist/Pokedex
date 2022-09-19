import React, { Component } from 'react';
import {FastAverageColor} from "fast-average-color";
import Details from './details';
import "./profile.scss";

class Profile extends Component {
    state = {} 
    componentDidMount(){
        const fac = new FastAverageColor();
        const source = require('../../sprites/' + this.props.id + '.svg')
        fac.getColorAsync(source).then(color => {
            this.setState({source: source, 
                           color: color.hex,
                           details: false
                        })
        });
    }

    profileClickListener(e) {
        let pokenumber = e.target.dataset.id
        console.log(pokenumber, this.state)
        this.setState({
            details: true,
            clicked: e.target.dataset.id
        })
    }

    closeListener(){
       console.log("CLOSE")
       this.setState({details: false})
    }
    render() { 
        const local = require('../../sprites/' + this.props.id + '.svg')
        return (<>
            <a href="#target" onClick={(e) => this.profileClickListener(e)} data-id={this.props.id}>
                <div className="card" data-id={this.props.id} style={{backgroundColor: this.state.color}}>
                    <img className="sprite" alt={this.props.id} data-id={this.props.id} src={local}/>
                    <h3 className="name" data-id={this.props.id}> {this.props.m.name}</h3>
                </div>
            </a>
            {this.state.details === true && <div id="target" className="modaloverlay">
                <div className="modal">
                <a href="#close" onClick={() => this.closeListener()} className="close">&times;</a>
                <Details
                    details={this.state.details}
                    id={this.props.id}
                    clicked={this.state.clicked}
                    genera={this.state.genera}
                    description={this.state.description}
                />
                </div>
             </div>}
        </>);
    }
}
 
export default Profile;