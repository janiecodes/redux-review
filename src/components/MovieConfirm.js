import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import { updateMovieList } from '../ducks/moviesReducer'

const MovieConfirm = props => {
  const { title, poster, rating } = props
  const confirmMovie = () => {
    props.history.push('/list')
  }

  return (
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`TITLE - RATING`}</p>
      <img src={`URL`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const { title, poster, rating } = state

  return { title, poster, rating }
}

export default connect(mapStateToProps)(MovieConfirm)
