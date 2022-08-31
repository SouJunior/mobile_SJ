import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import {Container} from './styles';

import Header from '../../components/Header';
import JobCard from '../../components/JobCard';

import Bg from '../../assets/bg.png';

export default function Home() {
  //Response from dataBase
  const [response, setResponse] = useState([1, 2, 3, 4, 5]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        {response ? (
          <FlatList data={response} renderItem={() => <JobCard />} />
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
    </TouchableWithoutFeedback>
  );
}
