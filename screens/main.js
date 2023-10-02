import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';


export default function App({navigation}) {
  return (
   <View style={styles.container}>
    <Button title="Houses" onPress={() => navigation.navigate('houses')}/>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
