import React, {Component} from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isClicked : false
      }
    }


   changeBtnClick = () => {
      this.setState({isClicked:true})
   };


    render() {
        return (
            <div className="ToDoItem">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <button className="deleteToDoBtn"
                        onClick={this.props.removeToDo}>
                  X
                </button>
              <button className='editToDoBtn' onClick={this.changeBtnClick} >Change</button>
              {this.state.isClicked ?
                <div>
                <button className='saveNewToDoValue'
                        onClick={this.props.saveNewToDo} >
                  Save
                </button>
                <input type="text" className='newToDoValue'
                onChange={this.props.handleChange}
                onClick={this.changeInputField}/>
                </div>
                : ""
              }

            </div>
        );
    }
}

export default ToDoItem;
