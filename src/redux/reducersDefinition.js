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
    type: 'session',
    isPersistent: false,
    initialState: {
      currentSession: null,
      isLoaded: false,
      sidepsSample: null,
      sidepsDiagnostic: null,
      sidepsHistory: null,
      materialBrand: null,
      material: null,
    },
  },
  {
    type: 'device',
    isPersistent: true,
    initialState: {
      onesignalId: null,
      hasLinkedDevice: false,
    },
  },
  {
    type: 'chat',
    isPersistent: false,
    initialState: {
      chats: [],
    },
  },
  {
    type: 'userProfile',
    isPersistent: true,
    initialState: null,
  },
  {
    type: 'dockets',
    isPersistent: false,
    initialState: {
      pending: null,
      sent: null,
    },
  },
  {
    type: 'billing',
    isPersistent: false,
    initialState: {
      bills: null,
    },
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
