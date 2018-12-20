import { MOVE_TASK, ADD_TASK } from './task/const';
import { MOVE_HOVER_CARD } from './column/const';

import { moveTask, addTask } from './task/actions';


const reducer = (state=null, action) => {
  switch (action.type) {
    case MOVE_TASK:
      return {
        ...state,
        columns: moveTask(
          state.columns,
          action.taskId,
          action.columnId,
          action.positionIndex
        )
      };
    case ADD_TASK:
      return {
        ...state,
        columns: addTask(
          state.columns,
          action.columnId,
          action.task
        )
      }
    case MOVE_HOVER_CARD:
      return {
        ...state,
        hoverCard: {
          columnId: action.columnId,
          positionIndex: action.positionIndex
        }
      }
    default:
      return state;
  }
};

export default reducer;
