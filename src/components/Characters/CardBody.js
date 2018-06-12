import React, { Component } from 'react';
import PropTypes from 'prop-types';

function importAll(r) {
    let images = {};

    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./character-icons', false, /\.(png|jpe?g|svg)$/));


class CardBody extends Component{

    render(){
        const props = this.props.character
        return(
            <div className ="character-body">
                <img className="character-picture" alt={props.name} src={images[props.src]} />
                <div className="character-info">
                    <div className="info-container">
                        <h4 className="character-name">{props.name}</h4> 
                        <h5 className="anime-name">{props.anime}</h5> 
                    </div>                 
                </div>
            </div>
        )
    }
}

CardBody.propTypes = {
    character: PropTypes.object
}
export default CardBody;