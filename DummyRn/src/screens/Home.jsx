// HomeScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, ActivityIndicator, RefreshControl } from 'react-native';
import axios from 'axios';
import UserItem from './Item';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
      const newUsers = response.data.results;
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching users: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    setPage(1);
    setUsers([]);
    fetchUsers();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const renderFooter = () => {
    return loading ? (
      <ActivityIndicator size="large" color="#0000ff" />
    ) : null;
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserItem user={item} />}
        keyExtractor={item => item.login.uuid}
        onEndReached={fetchUsers}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
          />
        }
      />
    </View>
  );
};

export default Home;
