import React from 'react';

const Form = (props) => {
  return (
    <form>
      <p>What is your new robot's name?</p>
      <input
        type='text'
        placeholder='name'
        value={props.input}
        onChange={(e) => props.handleInput(e.target.value)}
      />
      <button onClick={props.handleRobotAdd}>Create Robot</button>
    </form>
  );
};

export default Form;
