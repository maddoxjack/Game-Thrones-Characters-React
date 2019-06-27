import React from 'react';
import CharacterDetail from './characterDetail';


const CharacterName = props => {
    console.log('character props are', props);
    const { character } = props;
    console.log('character is ', character);
    return (
        <div className="character">
            <p><a href={CharacterDetail}>{character.name}</a></p>



        </div>
    )
}

export default CharacterName;