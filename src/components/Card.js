import React, {useState} from 'react';

const Card = ({name, nickname, status, img, occupation}) => {

    const [isActive, setIsActive] = useState(false);

    return(
        <div className='card'>
            <img src={img} alt={name} />
            <div className={isActive ? 'card-body active' : 'card-body'}>
                <div className='title'>
                    <h4>
                        {name}
                    </h4>
                    <button onClick={() => setIsActive(!isActive)}>
                        {
                            isActive ? 'Hide' : 'Show'
                        }
                    </button>
                </div>
                <small>
                    {occupation}
                </small>
                <p>
                    Nickname: {nickname}
                </p>
                <hr />
                <span>
                    {status}
                </span>
            </div>
        </div>
    )
}

export default Card;