import React from 'react'
import HR from '../HR'
import Dev from './Dev'
import HackerNews from './HackerNews'

function Lists() {
    return (
        <div className="listHeader">
            <div>
                <HR text="DEV"/>             
                <Dev />
                    <HR text="HackerNews"/>             
                <HackerNews />
            </div>
        </div>
    )
}

export default Lists
