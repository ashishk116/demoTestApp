import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { favouriteUsersAction } from '../store/action/favouriteAction';
import Star from '../assets/star.svg';

const UserItem = ({ user }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favourite } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    const username = user.name;
    dispatch(favouriteUsersAction(username));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    //console.log("checking this useSelector", favourite)
  }, [favourite]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: user.picture.large }} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{`${user.name.first} ${user.name.last}`}</Text>
        <View style={styles.details}>
          <Text style={styles.country}>{user.location.country}📍</Text>
          <Text style={styles.gender}>{user.gender}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={toggleFavorite}>
        <Star
          height="20"
          width="20"
          name={isFavorite ? 'star' : 'star-o'}
          size={20}
          color={isFavorite ? '#FFD700' : '#000'}
          style={styles.favoriteIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  country: {
    marginRight: 5,
    fontSize: 12,
    color: '#888',
  },
  gender: {
    fontSize: 12,
    color: 'black',
    right:0,
    fontWeight:'bold',

  },
  favoriteIcon: {
    marginLeft: 'auto',
  },
});

export default UserItem;
