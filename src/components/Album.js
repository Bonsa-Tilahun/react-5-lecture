import React from 'react'
import './style.css'

const Album = ({ data }) => {
  const { artist, title, year, image } = data
  return (
    <div className="album">
      <img alt={title} src={image} className="album-art" />
      <div className="album-info-hold">
        <p>
          {artist} - {title}
        </p>
        <p>{year}</p>
      </div>
    </div>
  )
}
export default Album
