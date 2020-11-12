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

//Each <Router> component creates a history object that keeps track of the current location (history.location) and 
//also the previous locations in a stack. When the current location changes, the view is re-rendered and you get a sense of 
//navigation. How does the current location change? The history object has methods such as history.push and history.replace to take 
//care of that. The history.push method is invoked when you click on a <Link> component, and history.replace is called when you use a 
//<Redirect>. Other methods — such as history.goBack and history.goForward — are used to navigate through the history stack by going back or forward a page.