import React, {useState, useEffect, createContext} from 'react';
import LDClient from 'launchdarkly-react-native-client-sdk';

const AppLDContext = createContext();

function AppLDProvider(props) {
  const [allFlags, setAllFlags] = useState();
  const ldClient = new LDClient();
  const updateFlags = flags => {
    setAllFlags(flags);
  };
  const initialize = () => {
    return ldClient
      .configure(props.ldConfig, props.context)
      .then(_ => {
        return ldClient.allFlags();
      })
      .catch(error => {
        ldClient.flush();
        ldClient.close();
        console.log(`initialize(): Caught Error=${error}`);
      });
  };
  ldClient.registerAllFlagsListener('flagListenerId', async flags => {
    const allFlags = await ldClient.allFlags();
    setAllFlags(allFlags);
  });
  useEffect(_ => {
    ldClient
      .isInitialized()
      .then(isInited => ldClient.allFlags())
      .then(allFlags => {
        updateFlags(allFlags);
      })
      .catch(error => {
        console.log(`useEffect() Caught Error=${error}`);
        initialize().then(allFlags => updateFlags(allFlags));
      });
  }, []);

  return (
    <AppLDContext.Provider value={{allFlags, ldClient}}>
      {props.children}
    </AppLDContext.Provider>
  );
}

export {AppLDContext, AppLDProvider};
