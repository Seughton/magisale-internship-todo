
import React, {Component} from 'react';
import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';

class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    'todo': "Wash and take away the Kurzhiy's cup from WC"
                },
                {
                    'todo': 'Do some rollton and cigarettes'
                }
            ],
            todo: ''
        };
    };

    createNewToDoItem = () => {
      this.setState(({ list, todo }) => ({
        list: [
            ...list,
          {
            todo
          }
        ],
        todo: ''
      }));
    };

    handleKeyPress = e => {
        if (e.target.value !== '') {
          if (e.key === 'Enter') {
            this.createNewToDoItem();
          }
        }
    };

    handleInput = e => {
      this.setState({
        todo: e.target.value
      });
    };

    removeToDoItem = (key) => {
    let arr = this.state.list;
    arr.splice(key,1);
    this.setState ({
      list: arr
    })
    };


    handleChange = e => {
      this.setState({ todo1: e.target.value })
    };

    saveNewToDoItem = (key) => {

      let arr = this.state.list;

      arr.splice(key, 1, { todo: this.state.todo1 });
      this.setState ({
        list: arr,
      });

    };


    render() {
        return (
            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.state.list.map((item, key) => {
                                return <ToDoItem
                                            key = {key}
                                            item = {item.todo}
                                            removeToDo = {this.removeToDoItem.bind(this,key)}
                                            handleChange = {this.handleChange}
                                            saveNewToDo = {this.saveNewToDoItem.bind(this, key)}

                                       />
                          }
                        )}
                    </div>

                    <div>
                       <input type="text" value={this.state.todo} onChange={this.handleInput} onKeyPress={this.handleKeyPress}/>
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default ToDo;
