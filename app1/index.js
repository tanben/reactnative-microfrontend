import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AppLDProvider} from './src/LDProvider';
import * as Config from './Config';

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
