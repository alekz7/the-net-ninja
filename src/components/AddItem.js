import React from 'react';
import PropTypes from 'prop-types';
import './AddItem.css';

class AddItem extends React.Component {

  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
  }

  render () {
    return(
      <form id='add-todo' onSubmit={this.handleSubmit}>
        <input type='text' required ref='newItem'/>
        <input type='submit' value="Hit me"/>
      </form>
    )
  }
}

export default AddItem;
