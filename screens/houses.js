import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, FlatList, SafeAreaView, Image} from 'react-native';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
    <Image
      source={item.image}
      style={styles.itemPhoto}
      resizeMethod='cover' 
    />
    <Text style={styles.itemText}>{item.text}</Text>
  </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tabNavigate}>  
        <StatusBar style="light"/>
        <SafeAreaView style={{flex: 1}}>
          <SectionList
            contentContainerStyle={{paddingHorizontal: 10}}
            stickySectionHeadersEnabled = { false }
            sections = {SECTIONS}
            renderSectionHeader={({section}) => {
              <Text style={styles.sectionHeader}>{section.title}</Text>
            }}
            renderItem={({item, section}) => {
              return <ListItem item={item}/>
            }}
          />
        </SafeAreaView>
      </View>
    </View>
  );
}

const SECTIONS = [
  {
    title: "Made for you",
    data: [
      {
        key: "1",
        text: "Item text 1",
        image: require("../assets/img/andrew-neel-1354776-unsplash.png")
      },
      {
        key: "2",
        text: "Item text 2",
        image: require("../assets/img/christopher-jolly-616571-unsplash.png")
     
      },
      {
        key: "3",
        text: "Item text 3",
        image: require("../assets/img/emile-guillemot-1205579-unsplash.png")
        
      },
      {
        key: "4",
        text: "Item text 4",
        image: require("../assets/img/markus-spiske-37931-unsplash.png")
       
      },
      {
        key: "5",
        text: "Item text 5",
        image: require("../assets/img/michael-browning-246513-unsplash.png")
       
      },
    ]
  }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabNavigate: {
    flex: 1,
  },
  itemPhoto: {
    width: 130,
    height: 86,
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "#f4f4f4",
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
});
