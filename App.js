import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import houses from  './screens/houses'
import main from './screens/main'

const Stack = createNativeStackNavigator();

function BackButtonWithText({imageSource, title, onpress, navigation}) {
  return(
   <TouchableOpacity onPress={onpress} style={{flexDirection: 'row'}}>
      <Image source={imageSource} style={styles.backImageButton}></Image>
      <Text style={styles.titlePreviousScreen}>{title}</Text>
   </TouchableOpacity>
  );
}

function HeaderTitle({Title}) {
  return(
    <View style={styles.wrap}>
      <Text style={styles.title}>{Title}</Text>
      <View style={styles.functionContainer}>
        <Image style={styles.mapButton} source={require('./assets/img/MapButton.png')}></Image>
        <Image style={styles.icon8Button} source={require('./assets/img/icons8-slider-500.png')}></Image>      
      </View>
    </View>
  );
};

export default function App({navigation}) {
  var Title = 'Houses';
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen name='main' component={main}></Stack.Screen>
        <Stack.Screen name='houses' component={houses}
        options={({navigation}) => ({
           headerTitle : () => (<HeaderTitle Title='Houses'/>),
            headerLeft: () => (
            <BackButtonWithText
            onPress={() => navigation.navigate('main')}
              imageSource={require('./assets/img/BackArrow.png')}
              title="Home"
            />
          ),
          headerBackVisible: false,
        })}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    flex: 1,
    flexDirection: 'row',
    
  },
  functionContainer: {
    flexDirection: 'row',
    
  },  
  mapButton: {
    marginHorizontal: 8,
  },
  icon8Button: {
    marginHorizontal: 8,
  }
});
