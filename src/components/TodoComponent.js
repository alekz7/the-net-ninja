import React from 'react';
import TodoItem from './TodoItem';

class TodoComponent extends React.Component {

  state = {
      todos: ['lavar', 'limpiar', 'hacerme una sopa maruchan', 'comprar flores'],
      age: 30
  }

  handleClick = () => {
    console.log('you have clicked me');
  }

  onDelete = (item) => {
    var updatedTodos = this.state.todos.filter(function(val,idx){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos,
    })
  }

  render () {

    var ager = setTimeout(function(){
      var myAge = this.state.age;
      this.setState({age : myAge + 1})
    }.bind(this),1000);

    var localTodos = this.state.todos;
    localTodos = localTodos.map(function(item,idx){
      return <li key={idx}>{item}</li>
    });

    var localTodoItem = this.state.todos;
    localTodoItem = localTodoItem.map(function(item,idx){
      return <TodoItem item={item} key={idx} onDelete={this.onDelete}/>
    },this); // this: thanks stack overflow, because inside the map the context of this is different, asi que tienes que pasar el this a la funcion map como lo hice

    return <div>
      <h1>Im a TodoComponent</h1>
      <p> {this.props.mssg} </p>
      <p> <strong>Queso: </strong> {this.props.data.name} </p>
      <p> <strong>Olor:  </strong> {this.props.data.smellFactor} </p>
      <p> <strong>Precio:</strong>  {this.props.data.price} </p>
      <div id="todo-lista">
        <p onClick={this.handleClick}>Recuerdame hacer estas cosas:</p>
        <ul>
        {localTodos}
        </ul>
        <ul>
          <li><strong>{this.state.todos[0]}</strong></li>
          <li><strong>{this.state.todos[1]}</strong></li>
          <li><strong>{this.state.todos[2]}</strong></li>
        </ul>
        <ul>
        {localTodoItem}
        </ul>
      </div>
      <p>Edad: {this.state.age} </p>
    </div>
  }
}

export default TodoComponent;
