import React, {useContext, Suspense} from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {Federated} from '@callstack/repack/client';
import {AppLDContext} from './src/LDProvider';
const App1LogFlags = React.lazy(() =>
  Federated.importModule('app1', './LogFlags'),
);
const App1LogFlagsCtx = React.lazy(() =>
  Federated.importModule('app1', './LogFlagsContext'),
);
const styles = {
  container: {
    width: undefined,
    height: undefined,
  },
  text: {
    fontSize: 24,
    color: 'white',
    lineHeight: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
};
function App(props) {
  const ldContext = useContext(AppLDContext);
  const {allFlags} = ldContext;
  const isDarkMode = allFlags ? allFlags['enable-dark-mode'] : false;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text style={styles.text}>Host Context</Text>

        <Suspense fallback={<Text>Loading app1...</Text>}>
          <App1LogFlags flags={allFlags} />
        </Suspense>
        <Text style={styles.text}> App1 Context</Text>

        <Suspense fallback={<Text>Loading app1...</Text>}>
          <App1LogFlagsCtx />
        </Suspense>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
