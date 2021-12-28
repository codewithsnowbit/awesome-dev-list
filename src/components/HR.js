import React from 'react'

function HR(props) {
    return (
        <div>
            <div className="strike">
            <span>
                {props.text}
            </span>
            </div>
            <br />
        </div>
    )
}

export default HR
