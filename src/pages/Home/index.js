import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import {Container} from './styles';

import Header from '../../components/Header';
import JobCard from '../../components/JobCard';

import Bg from '../../assets/bg.png';

export default function Home() {
  //Response from dataBase
  const [response, setResponse] = useState([1, 2, 3, 4, 5]);

  return (
    <Container
      onStartShouldSetResponder={() => true}
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Header />
      {response ? (
        <FlatList
          showsVerticalScrollIndicator={false}
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
