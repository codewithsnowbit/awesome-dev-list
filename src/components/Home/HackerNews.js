import React, {useEffect} from 'react'

function HackerNews() {
    const [articles, setArticles] = React.useState([])
    // const [loading, setLoading] = React.useState(true)
    useEffect(() => {
        getArticles()
    }, [])

    const getArticles = () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(res => res.json())
            .then(data => {
                for(let i = 0, len = Math.min(50, data.length); i < len; i++) {
                    fetch(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json`)
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            setArticles(articles => [...articles, data])
                        })
                }
            })

    }
    return (
        <div>
            {articles.map((item) => {
                return (
                    <div className="article" key={item.id}>
                        <div className="article-link">
                            <ul>
                             <li><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></li>   
                            </ul>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default HackerNews
