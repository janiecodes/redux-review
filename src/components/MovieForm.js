import React, { Component } from 'react';
import styles from './styles';
import {connect} from 'react-redux';
import {setMovieInfo} from '../redux/moviesReducer';


class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    } //Whatever values that get inputted here change Redux state
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    //When we submit, we pull the data from state
    //Invoke it in the context of the reducer so you import it then connect it (at the bottom)
    //Therefore, you can use it below with props
    const { title, poster, rating } = this.stat
    this.props.setMovieInfo(title, poster, rating) //This line connects to Redux and does stuff for us

    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}


//connect() takes in two arguments, a function and an object
//If you need Redux state on this component, you need the function (mapStateToProps)
//mapStateToProps takes data from state and brings it to the React App
//If you want to change Redux state with this component, then you need the object (mapDispatchToProps)
//mapDispatchToProps gives us access to the functions that put data on 
//connect()() takes in one argument: a React Component 
export default connect(null, {setMovieInfo})(MovieForm);
//The actual component always goes into the second one
//Wrap your export of MovieForm in the second invocation of connect (HINT: connect will be invoked twice, 
//once to receive mapStateToProps and a second time to receive any action creators that we want to pass in).
//When you invoke connect it returns a function and that's where we invoke it again with the component
//This allows us to change Redux state (This component does not receive Redux state)

//This component is meant to change Redux state that's why we can put null inside connect()
//first is mapStateToProps or null if we don't need to display any redux state values in this component, just set them
//second is mapDispatchToProps that connects the Action Builder functions
//setMovieInfo below here allows it to be used with props