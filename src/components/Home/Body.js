import React from 'react'
import '../../styles/Home.css'
import '../../styles/Nav.css'
import Lists from './Lists'


function Body() {
    return (
        <div>
            <h1 className="logo header-logo"><span>Awesome-Dev-List</span></h1>
            <div className="box">
                <h2 className="mb-4"><b>Resources</b></h2>                
                <Lists />
            </div>
        </div>
    )
}

export default Body
