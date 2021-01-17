import React from 'react';
import Card from './Card';

const List = ({chars}) => {
    return(
        <div className='list-wrapper'>
            <h2>Characters in the show</h2>
            <div className='cards'>
                {
                    chars.map((char) => {
                        const {id, name, nickname, status, img, occupation} = char;
                        return <Card key={id} name={name} nickname={nickname} status={status} img={img} occupation={occupation} />
                    })
                }
            </div>
        </div>
    )
}

export default List;