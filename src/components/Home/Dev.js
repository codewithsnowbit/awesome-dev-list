import React, { useEffect } from 'react'


function Dev() {
    const [devList, setDevList] = React.useState([])


    const getDevArticles = async () => {
        // genreate random number between 1 and 920
        const index = Math.floor(Math.random() * 920) + 1
        await fetch(`https://dev.to/api/articles?per_page=50&page=${index}`)
        .then(res => res.json())
        .then(data => {
            setDevList(data)
        })
    }
    useEffect(() => {
        if(devList.length === 0) {
            getDevArticles()
        }
    }, [devList])
    return (
        <div>
            <div className="listGrid">
            {devList.map((item) => {
                return (
                    <div className="article" key={item.id}>
                        <div className="article-link">
                            <ul>
                             <li><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                <p>[{item.tags}]</p>
                             <p className="article-description">{item.description}</p>
                             </li>   
                            </ul>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Dev
