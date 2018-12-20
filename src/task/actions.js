export const moveTask = (columns, taskId, columnId, positionIndex) => {
  let newColumns = [...columns];
  let task = null;

  newColumns.forEach((column, columnIndex) => {
    let newTasks = [...column.tasks];
    const taskIndex = newTasks.findIndex(item => item.id === taskId);
    if (taskIndex !== -1) {
      task = newTasks.splice(taskIndex, 1);
    }
    newColumns[columnIndex].tasks = newTasks;
  });

  newColumns.forEach((column, columnIndex) => {
    if (column.id === columnId){
      column.tasks.splice(positionIndex, 0, task[0]);
    }
  });

  return newColumns;
}

export const addTask = (columns, columnId, task) => {
  let newColumns = [...columns];
  newColumns.forEach(column => {
    if (column.id === columnId){
      const newTask = {
        id: Math.random().toString(36).substring(2),  // random string
        label: task
      };
      column.tasks = [...column.tasks, newTask];
    }
  });
  return newColumns;
}
