import React, { Component } from 'react';
import axios from 'axios';
import Profile from './profile';
import "./dashboard.scss";

class Dashboard extends Component {
    state = { 
        limit: 151
     } 

    componentDidMount(){
        this.getPokemon();
    }
    getPokemon = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${this.state.limit}`)
        .then(res => { 
            this.setState({pokemon: res.data.results})
        });
    }
    render() { 
        return (
        <>
        <div className="grid">
        <h1 className="title">Pokedex</h1>
        {this.state.pokemon && (this.state.pokemon).map((monster, index) => {
            return <Profile 
                key={index}
                id={index + 1}
                m={monster}
                />
            
          })
        }
        </div>
        </>);
    }
}
 
export default Dashboard;