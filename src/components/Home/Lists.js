import React from 'react'
import Data from '../../data/dataLists'

function Lists() {
    return (
        <div className="listHeader">
            <div>
            {Data.map((list, index) => {
                return (
                    <div key={index} className="card h-card">
                        <img src={list.image} alt={list.title} className="h-img img-fluid" />
                        <div className="card-body">
                            <h2 className="card-title h-title"><a href={`/${list.slug}`}>{list.title}</a></h2>
                            <p className="card-text h-description">{list.description}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Lists
