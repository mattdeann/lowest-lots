import React from 'react'
import './Results.css'

export default function Results({results}) {
  
  const scoredResults = results.map(result => {
    return {...result, score: (result.review_count * result.rating ) / (result.review_count + 1)}
  })

  const sortedResults = scoredResults.sort((a, b) => {
    return a.score - b.score
  })

  const elements = sortedResults.map((result, i) => {
    return (
      <article className='lot-card' key={i}>
        <h1>{result.name}</h1>
        <section>
          {result.image_url ? <img className='lot-image' src={result.image_url} alt={result.name}/> : <p>No image available</p> }
        </section>
        <section>
          <p>Score: {result.score}</p>
          <p>Address: {result.location.display_address[0]} {result.location.display_address[1]}</p>
          <p>Rating: {result.rating}</p>
          <p># of Reviews: {result.review_count}</p>
          <a href={result.url}>Link to Company Website</a>
        </section>
      </article>
    )
  })

  return (
    <section className='results' >
      {elements}
    </section>
  )
}
