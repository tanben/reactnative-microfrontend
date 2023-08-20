import {View, Text} from 'react-native';
import {useEffect, useState} from 'react';

export default function LogFlags(props) {
  const styles = {
    container: {
      width: undefined,
      height: undefined,
    },
    text: {
      fontSize: 18,
      lineHeight: 40,
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
  };
  let {flags} = props.flags ? props : {flags: {color: 'grey'}};
  const [color, setColor] = useState('grey');

  useEffect(() => {
    setColor(flags.color);
  }, [flags.color]);
  return (
    <View style={styles.container}>
      <Text style={{...styles.text, color}}>{JSON.stringify(flags)}</Text>
    </View>
  );
}
