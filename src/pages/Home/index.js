import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Keyboard} from 'react-native';

import {Container, FlatWrapper, BgWrapper} from './styles';

import Header from '../../components/Header';
import SearchFilter from '../../components/SearchFilter';
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
      <SearchFilter />
      <FlatWrapper>
        {response.length > 0 ? (
          <FlatList
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}
            data={response}
            renderItem={() => <JobCard />}
          />
        ) : (
          <BgWrapper>
            <Image source={Bg} style={{width: 150, height: 150}} />
          </BgWrapper>
        )}
      </FlatWrapper>
    </Container>
  );
}
