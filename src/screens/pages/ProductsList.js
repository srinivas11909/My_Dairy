import * as React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get("screen").width/2;


const DATA = [
    {
      id: 1,
      title: 'First Item',
      price: 30
    },
    {
      id: 2,
      title: 'Second Item',
      price: 27.0
    },
    {
      id: 3,
      title: 'Third Item',
      price: 33
    },
    {
       id: 4,
       title: 'fourth Item',
       price: 40
    },
  ];

  const Card = ({item}) => {
    return (
       
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}}>
            <View
              style={{
                width: 30,
                height: 30,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: true
                  ? 'rgba(245, 42, 42,0.2)'
                  : 'rgba(0,0,0,0.2) ',
              }}>
              <Icon
                name="favorite"
                size={18}
                color= 'red'
              />
            </View>
          </View>

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
             
          </View>

          <Text style={{fontWeight: 'bold', fontSize: 17, marginTop: 10}}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              ${item.price}
            </Text>
             
          </View>
        </View>
    );
  };
  
const ProductsList = () => {
    const renderCard = ({item}) => {
        <Item title={item.title} style={styles.card}/>
    }  
    return(
        <React.Fragment>
           <View style={styles.header}>
                <Text style={styles.headerTxt}>Welcome To</Text>
                <Text style={styles.brandName}>Brand Name</Text>
            </View>
            <View>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                     marginTop: 10,
                     paddingBottom: 50,
                    }}
                    data={DATA}
                    renderItem={({item}) => {
                        return <Card item={item} />;
                    }}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: 30,
        flexDirection: 'row', 
    },
    headerTxt:{
        fontSize:25,
        fontWeight: 'bold'
    },
    brandName:{
        fontSize: 38,
        fontWeight: 'bold'
    },
    card: {
        height: 225,
        backgroundColor: 'grey',
        width,
        marginHorizontal: 2,
        borderRadius: 10,
        marginBottom: 20,
        padding: 15,
    },
})

export default ProductsList;