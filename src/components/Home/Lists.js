import React from 'react'

function Lists() {
    const [list, setList] = React.useState([])


    const getArticles = async () => {
        await fetch('https://dev.to/api/articles')
        .then(res => res.json())
        .then(data => {
            setList(data)
         
        })
    }
    getArticles()
    return (
        <div className="listHeader">
            <div className="listGrid">
            {list.map((item) => {
                return (
                    <div className="article">
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

export default Lists
