import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromFavourite } from '../store/action/removeFromFavoriteAction'; // Import the action to remove from favorite
import Remove from '../assets/remove.svg'

const Favourite = () => {
  const dispatch = useDispatch();
  const { favouriteUsers } = useSelector((state) => state.favourite); // Access favouriteUsers from state.favourite

  const handleRemoveFromFavorite = (id) => {
    dispatch(removeFromFavourite(id));
  };

  const renderUserItem = ({ item }) => (
    <View style={styles.userContainer}>
      <Text style={styles.userName}>{`${item.first} ${item.last}`}</Text>
      <TouchableOpacity onPress={() =>handleRemoveFromFavorite(item.first)}>
        <Remove name="star" size={20} color="#FFD700" />
      </TouchableOpacity>
    </View>
  );

  console.log("CHECKING THIS STATE",favouriteUsers)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Users:</Text>
      <FlatList
        data={favouriteUsers}
        renderItem={renderUserItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={<Text>No favorite users</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listContainer: {
    flexGrow: 1,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  userName: {
    fontSize: 16,
  },
});

export default Favourite;
