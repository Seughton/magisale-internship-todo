
import React, {Component} from 'react';
import { connect } from "react-redux";


import './ToDo.css';
import ToDoItem from './components/ToDoItem';
import Logo from './assets/logo.png';
import addToDo from './Actions/addToDo';
import deleteToDo from './Actions/deleteToDo';
import editToDo from './Actions/editToDo';


class ToDo extends Component {

    state = {
      value: '',
      title: ''
    };

    createNewToDoItem = () => {

      this.props.addToDo(this.addNewToDoInput.value,this.addNewDescInput.value);

      this.setState({
        value: this.addNewToDoInput.value,
        title: this.addNewDescInput.value
      });
      this.addNewToDoInput.value = '';
      this.addNewDescInput.value = ''
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
        value: e.target.value
      });
    };

    removeToDoItem = (index) => {

      this.props.deleteToDo(index);

       let arr = this.props.testStore;
       arr.splice(index,1);
       this.setState({
         value: arr
       })
    };


      handleChange = (e) => {
        this.setState({
          value: e.target.value
        });

    };

    saveNewToDoItem = (key,value,title) => {
      this.props.editToDo(value,title);

      let arr = this.props.testStore;
      arr.splice(key, 1, {
        value: this.state.value,
        title: this.state.title
      });
      this.setState ({
        value:  this.state.value===''? '' : this.state.value,
        title: this.state.title
      });
      /*if (this.state.value == '') {
        this.setState({
          value: 'Write ToDo'
        })
      }*/
    };

    handleDescChange = (e) => {
      this.setState({
        title: e.target.value
      })

    };


    render() {
        return (

            <div className="ToDo">
                <img className="Logo" src={Logo} alt="React logo"/>
                <h1 className="ToDo-Header">MAGISOFT REACT INTERNSHIP TODO</h1>
                <div className="ToDo-Container">

                    <div className="ToDo-Content">

                        {this.props.testStore.map((item, key) => {
                                return <ToDoItem
                                            key = {key}
                                            item = {item.value}
                                            title = {item.title}
                                            removeToDo = {this.removeToDoItem.bind(this,key)}
                                            handleChange = {this.handleChange}
                                            handleDescChange = {this.handleDescChange}
                                            saveNewToDo = {this.saveNewToDoItem.bind(this, key)}
                                       />
                          }
                        )}
                    </div>

                    <div>
                       <input type="text"
                              value={this.props.testStore.value}
                              ref={(input) => {this.addNewToDoInput = input}}
                              onChange={this.handleInput}
                              onKeyPress={this.handleKeyPress}
                              placeholder='Write your ToDo'
                       />
                      <input type="text"
                             value={this.props.testStore.title}
                             ref={(input) => {this.addNewDescInput = input}}
                             onChange={this.handleInput}
                             onKeyPress={this.handleKeyPress}
                             placeholder='and add description'
                      />
                       <button className="ToDo-Add" onClick={this.createNewToDoItem}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(

  state => ({
    testStore: state.arrToDo
  }), { addToDo, deleteToDo, editToDo }
)(ToDo);
