import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import { updateMovieList } from '../redux/moviesReducer'

//Once we can get our form to properly update the values in our redux state, 
//we need to edit MovieConfirm to display them.

const MovieConfirm = props => {
  const { title, poster, rating } = props
  const confirmMovie = () => {
    props.updateMovieList({ title, poster, rating })
    props.history.push('/list')
  }

  console.log(props)

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

//accepts a single argument, our redux state
const mapStateToProps = state => {
  //Destructure title, poster, and rating from our redux state
  const { title, poster, rating } = state

  return { title, poster, rating }
  //When provided to the first invocation of connect this will take those 
  //values from our redux state and put them on the props of our MovieConfirm component.
}

export default connect(mapStateToProps, { updateMovieList })(MovieConfirm)
//Add an object containing the updateMovieList function as the second argument of the first invocation of connect