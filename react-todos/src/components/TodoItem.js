import React, { Component } from 'react';
import propTypes from 'prop-types';
export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, todo } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            style={{ marginRight: '10px' }}
            type="checkbox"
            onChange={this.props.completeTodo.bind(this, id)}
          />{' '}
          {todo}
          <i
            className="fa fa-trash-o delete de"
            onClick={this.props.deleteTodo.bind(this, id)}
          ></i>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};

export default TodoItem;
