const defaultState = {
  hoverCard: {
    columnId: null,
    positionIndex: null,
    task: null
  },
  columns: [
    {
      id: 1,
      label: 'Business Requirements',
      tasks: [
        {id: 1, label: 'task #1'},
        {id: 2, label: 'task #2'},
        {id: 3, label: 'task #3'}
      ]
    },
    {
      id: 2,
      label: 'Estimation',
      tasks: [
        {id: 4, label: 'task #4'},
        {id: 5, label: 'task #5'},
        {id: 6, label: 'task #6'},
        {id: 7, label: 'task #7'}
      ]
    },
    {
      id: 3,
      label: 'Development',
      tasks: [
        {id: 8, label: 'task #8'},
        {id: 9, label: 'task #9'}
      ]
    },
    {
      id: 4,
      label: 'Tests',
      tasks: [
        {id: 10, label: 'task #10'},
        {id: 11, label: 'task #11'},
        {id: 12, label: 'task #12'},
        {id: 13, label: 'task #13'}
      ]
    }
  ]
}

export default defaultState;
