import {View, Text} from 'react-native';
import {useEffect, useState, useContext} from 'react';
import {AppLDContext} from './LDProvider';
import {name as appName} from '../app.json';
import {AppRegistry} from 'react-native';
import LogFlags from './LogFlags';
import LDClient from 'launchdarkly-react-native-client-sdk';

export default function App1LogFlagsContext() {
  const ldContext = useContext(AppLDContext) || {
    allFlags: {color: 'grey'},
    ldClient: null,
  };
  const [flags, setFlags] = useState(ldContext.allFlags.color);
  const [_, callerId] = AppRegistry.getAppKeys();

  useEffect(() => {
    if (callerId.trim() === appName.trim()) {
      setFlags(ldContext.allFlags);
      return;
    }

    const ldClient = ldContext.ldClient || new LDClient();
    ldClient.registerAllFlagsListener(
      `${appName}-flagListener`,
      flags => {
        ldClient.allFlags(appName).then(res => setFlags(res));
      },
      appName,
    );
    ldClient.allFlags(appName).then(res => setFlags(res));
  }, [ldContext.allFlags.color, Object.keys(ldContext.allFlags).length]);

  return (
    <>
      <LogFlags flags={flags} />
    </>
  );
}
