import React from 'react';
import PropTypes from 'prop-types';

import CharacterName from './characterName.js';
import CharacterDetails from './characterDetail.js';

const listStyle = {
    display: 'grid',
    listStyleType: 'none',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr)',
    gridGap: '3rem',
    boxSizing: 'border-box',
    height: '80%',
    width: '85%',
    margin: 'auto',
    padding: '10px',
}



const CharactersList = props => {
    console.log('props are ', props);
    const { characterData } = props;
    return (
        <ul style={listStyle}>
        {characterData.length > 0 ?
            characterData.map(character =>
                <li key={character.url}>
                <CharacterName character={character} />
            </li>
            )
        :
        <li> No user data </li>
        }
        </ul>
    )
        
}

CharactersList.propTypes = {
    characterData: PropTypes.array
}

export default CharactersList;