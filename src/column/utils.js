import ReactDOM from 'react-dom'

export const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

export const getPositionIndex = (monitor, component) => {
  const initialClientOffset = monitor.getInitialSourceClientOffset();
  const delta = monitor.getDifferenceFromInitialOffset();

  const columnElement = ReactDOM.findDOMNode(component);
  const columnElementPosition = columnElement.getBoundingClientRect()

  const cardHeight = 78; // TODO
  const offsetY = initialClientOffset.y - component.gridSpacing/2 - columnElementPosition.y + delta.y;
  const positionIndex = Math.ceil(offsetY / cardHeight);

  return Math.abs(positionIndex);
}

export const itemTarget = {

  drop(props, monitor, component){
    const task = monitor.getItem();
    const positionIndex = getPositionIndex(monitor, component);

    component.props.moveTask(
      task.id,
      props.columnId,
      positionIndex
    );
    component.props.moveHoverCard(null, null); // todo: add action creator for removing hover card
  },

  hover(props, monitor, component){
    const positionIndex = getPositionIndex(monitor, component);
    const hoverCard = component.props.hoverCard;
    const task = monitor.getItem();

    if ((component.props.columnId !== hoverCard.columnId) || (positionIndex !== hoverCard.positionIndex)){
      console.log(hoverCard);
      component.props.moveHoverCard(
        component.props.columnId,
        positionIndex
      );
    }
  }
}
