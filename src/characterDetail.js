import React from 'react';


const CharacterDetail = props => {

    console.log('characterDetail props are', props);
    const { characterDetail } = props;
    console.log('characterDetail is ', characterDetail);
    return (
        <div className="characterDetail">
            <p>{characterDetail.name}</p>
            <p>{characterDetail.aliases}</p>
            <p>{characterDetail.aliases}</p>
            <p>{characterDetail.born}</p>
            <p>{characterDetail.aliases}</p>


        </div>
    )
}

export default CharacterDetail;