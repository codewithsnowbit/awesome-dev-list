import React from 'react'


function Dev() {
    const [devList, setDevList] = React.useState([])


    const getDevArticles = async () => {
        await fetch('https://dev.to/api/articles')
        .then(res => res.json())
        .then(data => {
            setDevList(data)
         
        })
    }
    getDevArticles()
    return (
        <div>
            <div className="listGrid">
            {devList.map((item) => {
                return (
                    <div className="article" key={item.id}>
                        <div className="article-link">
                            <ul>
                             <li><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
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
