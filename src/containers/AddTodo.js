import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import '../App.css';
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form 
        onSubmit={
          e => {//SyntheticEvent
            e.preventDefault();//override the default behaviour of onSubmit

            if (!input.value.trim()) {//if empty input
              return
            }

            dispatch(addTodo(input.value));
            input.value='';
          }
        }
      >
        <input id='to-do-form'  type="text"    ref={el => (input = el)} />{/*ref allows to have direct access to the DOM element */}
        <button className='button' type='submit'>Add Todo</button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);//The connect() function connects addTodo to a Redux store.