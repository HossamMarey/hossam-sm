import React, { useEffect, useState } from 'react'

const Quote = () => {

  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.quotable.io/random', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    }).then(d => d.json()).then(data => {

      setData(data)
    })
  }, [])

  if (!data) {
    return <></>
  }
  console.log(data)

  return (
    <div className={`quote ${data.content.length < 60 ? 'q_mb' : ''}`}>
      <h3> {data.content} </h3>
      <span> -  {data.author}   </span>
    </div>
  )
}

export default Quote