import React, { Component } from "react";
import Display from "./Components/Display";
import Todo from "./Components/Todo";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      users: [],
      todos: [],
      oops: "",
      check: false,
      check_t: false
    };
  }

  SubmitHandler = e => {
    e.preventDefault();
    if (!this.state.search) {
      var str = "First submit the query!!";
      this.setState({ oops: str });
    } else {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          var str = "";
          this.setState({ search: str, users: data, oops: str, check: true });
        });
    }
  };
  ClickmeHandler = () => {
    if (this.state.check) {
      var arr = [];
      var str = "Oooooooops!!!!!";
      this.setState({ users: arr, todos: arr, oops: str, check: false });
    } else {
      var str = "First submit the query!!";
      this.setState({ oops: str });
    }
  };
  HoverHandler = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(data => {
        var new_data = data.filter(item => {
          if (item.id <= 20) {
            return item;
          }
        });
        console.log(new_data);
        var str = "";
        this.setState({
          search: str,
          todos: new_data,
          oops: str,
          check_t: true
        });
      });
  };
  OutHandler = () => {
    setTimeout(() => {
      var arr = [];
      this.setState({ todos: arr, check_t: false });
    }, 3000);
  };
  render() {
    let show, show_t;
    if (this.state.check) {
      show = <h1 className="heading">I can give you only User&apos;s Data</h1>;
    }
    if (this.state.check_t) {
      show_t = (
        <div className="heading">
          Todo list will fade out after three seconds after hovering stops
        </div>
      );
    }
    return (
      <div>
        <header className="heading">
          <h1>Doodle Search</h1>
        </header>
        <form onSubmit={this.SubmitHandler}>
          <div className="wrap">
            <input
              value={this.state.search}
              onChange={e => this.setState({ search: e.target.value })}
              className="input_box"
              type="text"
              placeholder="Ask a question"
            />
            <button className="search_icon" type="submit">
              <i className="fa fa-search" />
            </button>
          </div>
        </form>
        <div className="btn-wrap">
          <button className="btn btn-1">Rotate me</button>
          <button className="btn btn-2">Revolve</button>
          <button className="btn btn-3" onClick={this.ClickmeHandler}>
            Click me
          </button>
          <button
            className="btn btn-4"
            onMouseOver={this.HoverHandler}
            onMouseOut={this.OutHandler}
          >
            Hover me
          </button>
        </div>
        {show}
        <Display users={this.state.users} />
        {show_t}
        <Todo todos={this.state.todos} />
        <div className="oops">{this.state.oops}</div>
        <footer>&copy; 2019 All Rights Reserved</footer>
      </div>
    );
  }
}

export default App;
