const reducersDefinition = [
  {
    type: 'userAuth',
    isPersistent: true,
    initialState: null,
  },
  {
    type: 'openFirstTime',
    isPersistent: true,
    initialState: false,
  },
  {
    type: 'position',
    isPersistent: false,
    initialState: null,
  },
  {
    type: 'app',
    isPersistent: true,
    initialState: {
      isIntroScreenShowed: false,
    },
  },
  {
    type: 'userProfile',
    isPersistent: true,
    initialState: null,
  },
  {
    type: 'isFalling',
    isPersistent: false,
    initialState: {
      status: false,
    },
  },
];

export default reducersDefinition;
