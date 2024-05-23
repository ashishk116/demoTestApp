
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomNumber } from '../store/action/gameAction';
import Coinsvg from '../assets/coin-2159.svg'
import { Button } from 'native-base';
const Home = ({ navigation }) => {
  const [totalCoins, setTotalCoins] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]);
  const [isUserTurn, setIsUserTurn] = useState(false);

  const dispatch = useDispatch();
  const {game} = useSelector((state)=> state)

  const handleCoinSelection = (coinId) => {
    setTotalCoins((prevTotalCoins) => {
      const updatedCoins = prevTotalCoins.includes(coinId)
        ? prevTotalCoins.filter((id) => id !== coinId)
        : [...prevTotalCoins];
  

      if(updatedCoins.length == 0){
    //    lostPage();
      }
  
      return updatedCoins;
    });
  };
  const getRandom = () => {
    dispatch(getRandomNumber({coinLength : totalCoins.length,turn: !isUserTurn}))
    setIsUserTurn(!isUserTurn)
    
  }
  const lostPage = () => {
    setTotalCoins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])
    navigation.navigate('Lost')
  }
  useEffect(()=>{
     getRandom();

  },[dispatch]) 

  return (
    <SafeAreaView>
      <View contentContainerStyle={styles.container}>
      <Text style={styles.username}>{isUserTurn ? 'User Turn' : 'Computer Turn'} </Text> 
      <Text style={{fontWeight:'bold',marginBottom:20}}> Select Coin --  {game.random}</Text>
        <View style={styles.coinContainer}>
        {totalCoins.map((item,index)=>{
              return  <Pressable
              key={item}
              title={`${index + 1}`}
              onPress={() => handleCoinSelection(item)}
            //  disabled={!isUserTurn}
            >
      <Coinsvg height='70' width='70'/>
            </Pressable>
          })}
        </View>

        <Button
          onPress={() => {
            setTotalCoins([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21])
           // lostPage()

          }}
        >
          LOST
        </Button>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex:1,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  content: {
    flex: 1,
  },
  coinContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    height:400
  },
  coinButton: {
    margin: 8,
    minWidth: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCoin: {
    backgroundColor: 'yellow',
  },
  selectedText: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default Home;
