import React, {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import LogoImg from '../../assets/job_standard.png';

import {
  ContainerShadow,
  Container,
  HeadWrapper,
  Logo,
  HeadDescription,
  Title,
  CompanyName,
  WorkRelationship,
  Open,
  Split,
  LocationWrapper,
  Location,
  LaunchedDate,
  Description,
  TimeLapse,
} from './styles';

export default function JobCard() {
  const [data, setData] = useState({
    id: '',
    title: 'UI/UX Designer Junior',
    company: 'Torchinha Inc.',
    wRelation: 'Junior . CLT',
    location: 'São Paulo Capital, São Paulo, Brasil',
    description:
      'Procuramos um profissional para ocupar a posição de UX Designer em um cliente referência no setor de produção de imunobiológicos (vacinas) e análises laboratoriais veterinários Ver mais...',
    launchTime: '22h',
  });

  return (
    <ContainerShadow>
      <Container>
        <HeadWrapper>
          <Logo source={LogoImg} />
          <HeadDescription>
            <Title>{data.title}</Title>
            <CompanyName>{data.company}</CompanyName>
            <WorkRelationship>Junior . CLT</WorkRelationship>
          </HeadDescription>
        </HeadWrapper>
        <Open>
          <Icon name="open-outline" size={25} color="#BFBFBF" />
        </Open>
        <Split />
        <LocationWrapper>
          <Location>São Paulo Capital, São Paulo, Brasil</Location>
          <LaunchedDate>20/02/2022</LaunchedDate>
        </LocationWrapper>
        <Description>
          Procuramos um profissional para ocupar a posição de UX Designer em um
          cliente referência no setor de produção de imunobiológicos (vacinas) e
          análises laboratoriais veterinários Ver mais...
        </Description>
        <TimeLapse>Há {data.launchTime}</TimeLapse>
      </Container>
    </ContainerShadow>
  );
}
