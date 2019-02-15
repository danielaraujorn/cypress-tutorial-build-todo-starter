import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      currentTodo: ""
    };
    this.handleNerTodoChange = this.handleNerTodoChange.bind(this);
  }
  handleNerTodoChange(evt) {
    this.setState({ currentTodo: evt.target.value });
  }
  render() {
    return (
      <Router>
        <div>
          <header className="header">
            <h1>todos</h1>
            <TodoForm />
          </header>
          <section className="main">
            <TodoList
              handleNerTodoChange={this.handleNerTodoChange}
              currentTodo={this.state.currentTodo}
              todos={this.state.todos}
            />
          </section>
          <Footer />
        </div>
      </Router>
    );
  }
}
