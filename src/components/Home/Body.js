import React from 'react'
import '../../styles/Home.css'
import '../../styles/Nav.css'
import Lists from './Lists'


function Body() {
    return (
        <div>
            <div className="header-logo ">
                <div>
                <h1 className="logo animate__animated animate__backInDown"><span>Awesome-Dev-List</span></h1>
                <p className="text-center mt-5">
                    <img src="assets/down-arrow.jpg" alt="Down arrow" className="img-fluid arrow animate__animated animate__backInUp"/>
                </p>
                </div>
            </div>
            <div className="box">
                <h2 className="mb-4"><b>Top Stories</b></h2>                
                <Lists />
            </div>
        </div>
    )
}

export default Body
