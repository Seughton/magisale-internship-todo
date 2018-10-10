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

  closeChangeField = () => {
      this.setState({isClicked:false})
  }

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
                  <div className="changeField">
                  <button className='saveNewToDoValue'
                          onClick={this.props.saveNewToDo} >
                    V
                  </button>
                  <button className='closeChangeField' onClick={this.closeChangeField}>X</button>
                    <br/>
                  <input type="text" className='newToDoValue'
                  onChange={this.props.handleChange}
                  />
                  </div>
                : ""
              }

            </div>
        );
    }
}

export default ToDoItem;
