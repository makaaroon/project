import { useState } from 'react'
import './Heart.scss'

export const Heart = () => {

    const [liked, setliked] = useState(false);
    const handleLike = () => {
        setliked(!liked);
    }

    return (
        <>
            <div className='like-button' onClick={handleLike}>
                <span role='img' aria-label='Heart Emoji'>
                    {liked? '💜' : '🤍'}
                </span>
            </div>
        </>
    )
}