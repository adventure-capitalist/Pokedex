import React, { Component } from 'react';
import axios from 'axios';
import "./details.scss";

class Details extends Component {
    state = {  } 
    componentDidMount(){
        this.getDetails();
    }
    async getDetails() {
       await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${this.props.id}`)
        .then(res => {
            return this.setState({
                genera: res.data.genera[7].genus.toString(),
                description: res.data.flavor_text_entries[0].flavor_text,
                details: true,
            })
        })
    }
    render() { 
        const local = require('../../sprites/' + this.props.clicked + '.svg')
        console.log(this.state)
        return (<>
        {this.state.details &&
            <div className="textContainer">
                <img className="polaroid" alt="pokemon" src={local} />
                <h4>{this.state.genera}</h4>
                <p>{this.state.description.replace(/\s/g, ' ')}</p>
            </div>
    }
</>);
    }
}
 
export default Details;