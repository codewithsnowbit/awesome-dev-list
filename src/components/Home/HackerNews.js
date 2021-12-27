import React from 'react'

function HackerNews() {
    const [articles, setArticles] = React.useState([])
    // const [loading, setLoading] = React.useState(true)

    const getArticles = async () => {
        await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => {
                for(let i = 0, len = Math.max(20, data.length); i < data.length; i++) {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`)
                        .then(res => res.json())
                        .then(hndata => {
                            setArticles([hndata])
                        })
                }
            })

    }
    getArticles()
    return (
        <div>
            {articles.map((item) => {
                return (
                    <div className="article" key={item}>
                        <div className="article-link">
                            <ul>
                             <li>{item.title}
                             </li>   
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HackerNews
