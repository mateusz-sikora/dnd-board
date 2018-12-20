import { ADD_TASK, MOVE_TASK } from './const';


export const addTask = (columnId, task) => {
    return {
        type: ADD_TASK,
        columnId,
        task
    };
}

export const moveTask = (taskId, columnId, positionIndex) => {
    return {
        type: MOVE_TASK,
        taskId,
        columnId,
        positionIndex
    };
}
