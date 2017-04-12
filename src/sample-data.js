import moment from 'moment';

export const sampleData = {
  tasksById: {
    1: {
      title: 'First Task',
      details: 'This is the 1st task.',
      creationDate: moment().format(),
      category: '',
      isPinned: false,
      isSnoozed: false,
    },
    2: {
      title: 'Second Task',
      details: 'This is the 2nd task.',
      creationDate: moment().format(),
      category: '',
      isPinned: false,
      isSnoozed: false,
    },
    3: {
      title: 'Third Task',
      details: 'This is the 3rd task.',
      creationDate: moment().format(),
      category: '',
      isPinned: false,
      isSnoozed: false,
    },
  },
};
