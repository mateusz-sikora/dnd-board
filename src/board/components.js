import React, { Component } from 'react';

import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';

import Column from '../column/components';


class Board extends Component {

  constructor(props){
    super(props);
    this.input = React.createRef();
  }

  addColumn(){
    if (this.input.current.value.length > 0){
      this.setState({
        ...this.state,
        columns: [...this.state.columns, this.input.current.value]
      });
      this.input.current.value = '';
    }
  }

  handleInputKeyPress(event){
    if (event.key === 'Enter'){
      this.addColumn();
    }
  }

  render(){
    return (
      <Grid container direction="column">
        <Grid item>
          <h4>Drag-and-drop board</h4>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={16}
        >
            {this.props.columns.map((column, index) =>
              <Grid item key={column.id}>
                <Column
                  id={column.id}
                  title={column.label}
                  tasks={column.tasks}
                />
              </Grid>
            )}
        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    columns: state.columns
  }
}
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
