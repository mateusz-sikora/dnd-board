import React, { Component } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { DragSource } from 'react-dnd';

import { DragTypes } from './const';


const itemSource = {
  beginDrag(props){
    return props;
  },
  endDrag(props){
    return props;
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}


class Task extends Component {

  render() {
    const { connectDragSource } = this.props

    return connectDragSource(
      <div>
        <Card style={{opacity: this.props.opacity || 1}}>
          <CardContent>
            <Typography color="textPrimary" >
              { this.props.text }
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default DragSource(DragTypes.ITEM, itemSource, collect)(Task);
