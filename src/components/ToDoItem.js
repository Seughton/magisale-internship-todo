import React, {Component} from 'react';

import './ToDoItem.css';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create'



const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
  // btn theme styles
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

class ToDoItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isClicked : false
      };

    }



   changeBtnClick = () => {
      this.setState({isClicked:true})

   };



  saveChanges = () => {
    this.setState({isClicked: !this.state.isClicked});

    this.props.saveNewToDo();
  };



    render() {
      const { classes } = this.props;
        return (
            <div className="ToDoItem">
              <div className="todo-text-field">
                <p className="ToDoItem-Text">{this.props.item}</p>
                <p className="ToDoItem-Text">{this.props.title}</p>
              </div>
              <div className="todo-btn-field">
                <Button variant="contained"
                        color="secondary"
                        onClick={this.props.removeToDo}
                        className={classes.button}>
                  Delete
                  <DeleteIcon className={classes.rightIcon} />
                </Button>
            {/*    <button className="deleteToDoBtn"
                        onClick={this.props.removeToDo}>
                        <i class="material-icons">
                          delete_forever
                        </i>
                </button>*/}
                <button className='editToDoBtn' onClick={this.changeBtnClick} >
                        <i class="material-icons">
                        edit
                        </i>
                </button>
              {this.state.isClicked ?
                  <div className="changeField">
                  <button className='saveNewToDoValue'
                          onClick={this.saveChanges} >
                        <i class="material-icons" >
                          done
                        </i>
                  </button>

                    <br/>
                  <Input
                      placeholder="Change ToDo"
                      className={classes.input}
                      onChange={this.props.handleChange}
                      inputProps={{
                        'aria-label': 'Change ToDo',
                      }}
                  />

                    <Input
                      placeholder="Change Desc"
                      className={classes.input}
                      onChange={this.props.handleDescChange}
                      inputProps={{
                        'aria-label': 'Change Description',
                      }}
                    />

                  </div>
                : ""
              }
              </div>
            </div>
        );
    }
}

export default withStyles(styles)(ToDoItem);
