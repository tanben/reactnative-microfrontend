import React, {useContext, Suspense} from 'react';
import {SafeAreaView, ScrollView, Text, useColorScheme} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import {AppLDContext} from './src/LDProvider';
import App1LogFlags from './src/LogFlags';
import App1LogFlagsCtx from './src/LogFlagsContext';
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

  const {allFlags} = ldContext || {};

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
        <Suspense fallback={<Text>Loading app1...</Text>}>
          <Text style={styles.text}>App1 Context</Text>

          {/* <App1LogFlags flags={allFlags} /> */}
          <App1LogFlagsCtx />
        </Suspense>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
