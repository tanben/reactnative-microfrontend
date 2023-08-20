const sampleContext = {
  kind: 'multi',
  user: {
    key: '102dabc3-1a1f-499d-b0e8-64d32651e3fa',
    name: 'Drew Leffler',
    state: 'California',
    city: 'Goldnerborough',
    country: 'United Arab Emirates',
    anonymous: false,
  },
  subscription: {
    key: 'enterprise',
  },
  application: {
    key: 'bluelightning',
    version: '8.6.3',
  },
  department: {
    name: 'Music',
    key: 'music',
    group: 'none',
  },
  company: {
    name: 'Reynolds, Dooley and Emmerich',
    key: 'reynolds-dooley-and-emmerich',
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
  mobileKey: ldProjects.MFE1.mobileKey,
  secondaryMobileKeys: {
    app1: 'mob-xxxxxxxxxxx',
  },
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
