import React, {useState, useEffect} from 'react';
import {View, FlatList, Image, Keyboard, Dimensions} from 'react-native';

import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';

import {Container} from './styles';

import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
import JobCard from '../../components/JobCard';

import Bg from '../../assets/bg.png';

export default function Home() {
  //Response from dataBase
  const [response, setResponse] = useState([1, 2, 3, 4, 5]);
  const tabHeight = useBottomTabBarHeight();

  useEffect(() => {
    const screenHeight = Dimensions.get('screen').height;
    const windowHeight = Dimensions.get('window').height;
  }, []);

  return (
    <Container
      onStartShouldSetResponder={() => true}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Header />
      <SearchFilter />
      {response ? (
        <FlatList
          style={{flex: 1}}
          showsVerticalScrollIndicator={true}
          data={response}
          renderItem={() => <JobCard />}
        />
      ) : (
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
          }}>
          <Image source={Bg} style={{width: 150, height: 150}} />
        </View>
      )}
    </Container>
  );
}
