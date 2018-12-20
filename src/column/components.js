import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Task from '../task/components';

import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { DragTypes } from '../task/const';

import { moveHoverCard } from './actionCreators';
import { moveTask, addTask } from '../task/actionCreators';

import { collect, itemTarget } from './utils';


class CardsContainer extends Component {

  constructor(props){
    super(props);
    this.gridSpacing = 16;
  }

  renderCards() {
    const {
      tasks,
      hoverCard
    } = this.props;

    const renderedTasks = tasks.map((task, index) => (
      <Grid item key={task.id}>
        <Task
          id={task.id}
          text={task.label}
          column={this.props.title}
        />
      </Grid>
    ));

    if ((hoverCard.columnId === this.props.columnId) && (hoverCard.positionIndex !== null)) {
      const temporaryElement = (
        <Grid item key={0}>
          <Task
            text="&nbsp;"
            opacity={0.3}
          />
        </Grid>
      );
      renderedTasks.splice(hoverCard.positionIndex, 0, temporaryElement);
    }
    return renderedTasks;
  }

  render() {
    return this.props.connectDropTarget(
      <div>
        <Grid
          container
          alignItems="stretch"
          direction="column"
          spacing={this.gridSpacing}
        >
          {this.renderCards()}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hoverCard: state.hoverCard
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveTask: (taskId, columnId, positionIndex) => dispatch(moveTask(taskId, columnId, positionIndex)),
    moveHoverCard: (columnId, positionIndex) => dispatch(moveHoverCard(columnId, positionIndex))
  };
};

CardsContainer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(DragTypes.ITEM, itemTarget, collect)
)(CardsContainer);


class Column extends Component {

  constructor(props){
    super(props);
    this.input = React.createRef();
    this.state = {task: ''}
  }

  onInputChange(event) {
    this.setState({task: event.target.value});
  }

  addTask(){
    if (this.state.task.length > 0){
      this.props.addTask(this.props.id, this.state.task);
      this.setState({...this.state, task: ''});
    }
  }

  handleInputKeyPress(event){
    if (event.key === 'Enter'){
      this.addTask();
    }
  }

  render(){
    return (
      <div>
        <h5>{this.props.title}</h5>

        <Grid container spacing={8} direction="row" alignItems="flex-end">
          <Grid item>
            <TextField
              label="Enter task description"
              value={this.state.task}
              onChange={this.onInputChange.bind(this)}
              onKeyPress={this.handleInputKeyPress.bind(this)}
              margin="none"
              ref={this.input}
            />
          </Grid>
          <Grid item>
            <Button
              color="primary"
              onClick={this.addTask.bind(this)}
              variant="outlined"
              size="small"
            >
              Create Task
            </Button>
          </Grid>
        </Grid>
        <br/>
        <CardsContainer
          tasks={this.props.tasks}
          columnId={this.props.id}
        />
      </div>
    );
  }
}

const mapColumnStateToProps = () => ({});
const mapColumnDispatchToProps = (dispatch) => {
  return {
    addTask: (columnId, task) => dispatch(addTask(columnId, task))
  }
}

export default connect(mapColumnStateToProps, mapColumnDispatchToProps)(Column);
