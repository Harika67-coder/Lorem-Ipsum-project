import React from 'react'

const SingleText = ({Text}) => {
  return (
    <article className="single">
      {Text.map((text,index)=>{
        return <div key={index} className="single-text">
          {text}
        </div>
      })}
    </article>
  )
}

export default SingleText