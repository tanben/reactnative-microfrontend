const sampleContext = {
  kind: 'multi',
  user: {
    key: '5a834e74-4e13-4a18-a64c-26261c89c41f',
    name: 'Perry Lemke',
    state: 'Tennessee',
    city: 'South Mercedes',
    country: 'Guam',
    anonymous: false,
  },
  subscription: {
    key: 'basic',
  },
  application: {
    key: 'electfast',
    version: '7.9.7',
  },
  department: {
    name: 'Computers',
    key: 'computers',
    group: 'dark-launcher',
  },
  company: {
    name: 'Senger, Gibson and Cremin',
    key: 'senger-gibson-and-cremin',
  },
};

const ldProjects = {
  MFE1: {
    key: 'mfe-proj-1',
    url: '',
    mobileKey: 'mob-xxxxxxxxxxx',

  },

  MFE2: {
    key: 'mfe-proj-2',
    url: '',
    mobileKey: 'mob-xxxxxxxxxxx',

  },
};

const ldConfig = {
  mobileKey: ldProjects.MFE2.mobileKey,
  secondaryMobileKeys: {},
  pollUri: 'https://app.launchdarkly.com',
  streamUri: 'https://clientstream.launchdarkly.com',
  eventsCapacity: 100,
  eventsFlushIntervalMillis: 30000,
  connectionTimeoutMillis: 10000,
  pollingIntervalMillis: 300000,
  backgroundPollingIntervalMillis: 3600000,
  useReport: false,
  stream: true,
  disableBackgroundUpdating: false,
  offline: false,
  debugMode: true,
};

export {ldConfig, ldProjects, sampleContext};
