import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppLDProvider} from './src/LDProvider';
import {ScriptManager, Federated} from '@callstack/repack/client';
import * as Config from './Config';

const resolveURL = Federated.createURLResolver({
  containers: {
    app1: 'http://localhost:9001/[name][ext]',
  },
});
ScriptManager.shared.addResolver(async (scriptId, caller) => {
  let url;
  console.log(`host scriptId=[${scriptId}] caller=[${caller}]`);

  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
AppRegistry.setWrapperComponentProvider(function () {
  return props => {
    return (
      <AppLDProvider context={Config.sampleContext} ldConfig={Config.ldConfig}>
        {props.children}
      </AppLDProvider>
    );
  };
});
