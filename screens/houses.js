import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, FlatList, SafeAreaView, Image} from 'react-native';

const ListItem = ({ item }) => {
  return (
  <View style={styles.item}>
    <Image
      source={item.image}
      style={styles.itemPhoto}
      resizeMethod='resize' 
    />
    <View style={styles.textContainer}>
      <Text style={styles.houseName}>{item.houseName}</Text>
      <Text style={styles.postedTime}>{item.postedTime}</Text>
      <View style={styles.rowText}>
          <Text style={styles.located}>{item.located}</Text>
          <Text style={styles.price}>{item.price}</Text>
      </View>
    </View>
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
            contentContainerStyle={{paddingHorizontal: 5}}
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
        houseName: "One Mission Bay",
        postedTime: "14 days ago",
        located: "San Francisco CA",
        price: "$2,950,000",
        image: require("../assets/img/andrew-neel-1354776-unsplash.png")
      },
      {
        key: "2",
        houseName: "One Mission Bay",
        postedTime: "14 days ago",
        located: "San Francisco CA",
        price: "$2,950,000",
        image: require("../assets/img/christopher-jolly-616571-unsplash.png")
     
      },
      {
        key: "3",
        houseName: "1410 Steiner St",
        postedTime: "9 days ago",
        located: "San Francisco CA",
        price: "$3,279,000",
        image: require("../assets/img/emile-guillemot-1205579-unsplash.png")
        
      },
      {
        key: "4",
        houseName: "246 Sussex St",
        postedTime: "2 hours ago",
        located: "San Francisco CA",
        price: "$379,000",
        image: require("../assets/img/markus-spiske-37931-unsplash.png")
       
      },
      {
        key: "5",
        houseName: "436 Eureka St",
        postedTime: "4 days ago",
        located: "San Francisco CA",
        price: "$3,950,000",
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
    margin: 12,
    flexDirection: 'row'
  },
  textContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  rowText: {
    flexDirection: 'row',
  },
  houseName: {
    fontFamily: 'Roboto',
    fontSize: 15,
    fontWeight: '700',
    paddingBottom: 8,
  },
  postedTime: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '400',
    paddingBottom: 20,
  },
  located: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '700'
  },
  price: {
    position: 'absolute',
    right: 0
  },
});
