import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'

const MovieList = props => {
  //the .map at the top of this component. Instead of mapping over an empty array, it should map over props.movies
  const movieList = props.movies.map(element => {
    return (
      <div style={styles.movieListItem}>
        <img style={styles.poster} src={element.poster} alt={element.title} />
        <div style={styles.listItemInfo}>
          <p style={styles.listItemText}>{element.title}</p>
          <p style={styles.listItemText}>{element.rating}/10</p>
        </div>
      </div>
    )
  })

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>A LIST OF MOVIES</p>
      {movieList}
    </div>
  )
}
// This connects our MovieList component to have access to our redux state and map over the movies array.
const mapStateToProps = state => {
  const { movies } = state
  return { movies }
}
export default connect(mapStateToProps)(MovieList)
