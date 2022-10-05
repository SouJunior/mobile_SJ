import React, {useState, useEffect} from 'react';
import {intervalToDuration} from 'date-fns';

import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
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
  const [lapseTime, setLapseTime] = useState(null);
  const [formatedDate, setFormatedDate] = useState(null);
  const [data, setData] = useState({
    id: '',
    title: 'UI/UX Designer Junior',
    company: 'Torchinha Inc.',
    wRelation: 'Junior . CLT',
    location: 'São Paulo Capital, São Paulo, Brasil',
    description:
      'Procuramos um profissional para ocupar a posição de UX Designer em um cliente referência no setor de produção de imunobiológicos (vacinas) e análises laboratoriais veterinários Ver mais...',
    launchTime: 1661748050228,
  });

  useEffect(() => {
    function convertToLapse() {
      const duration = intervalToDuration({
        start: data.launchTime,
        end: new Date().getTime(),
      });

      if (duration.months >= 1) {
        setLapseTime({
          value: duration.months,
          unity: duration.months > 1 ? ' meses' : ' mês',
        });
      } else if (duration.days >= 1) {
        setLapseTime({value: duration.days, unity: 'd'});
      } else if (duration.hours >= 1) {
        setLapseTime({value: duration.hours, unity: 'h'});
      } else if (duration.minutes >= 1) {
        setLapseTime({value: duration.minutes, unity: 'min'});
      } else if (duration.seconds >= 1) {
        setLapseTime({value: duration.seconds, unity: 's'});
      }
    }
    convertToLapse();
  }, []);

  useEffect(() => {
    function convertDateFormat() {
      console.log(new Date(data.launchTime));
      let day = new Date(data.launchTime).getDate();
      let month = new Date(data.launchTime).getMonth();
      let year = new Date(data.launchTime).getFullYear();
      setFormatedDate(day + '/' + 0 + (month + 1) + '/' + year);
    }
    convertDateFormat();
  }, []);

  return (
    <ContainerShadow>
      <Container>
        <HeadWrapper>
          <Logo source={LogoImg} />
          <HeadDescription>
            <Title>{data.title}</Title>
            <CompanyName>{data.company}</CompanyName>
            <WorkRelationship>{data.wRelation}</WorkRelationship>
          </HeadDescription>
        </HeadWrapper>
        <Open>
          <Icon name="open-outline" size={25} color="#BFBFBF" />
        </Open>
        <Split />
        <LocationWrapper>
          <Location>{data.location}</Location>
          <Octicons name="dot-fill" size={5} color="#D9D9D9" />
          <LaunchedDate>{formatedDate}</LaunchedDate>
        </LocationWrapper>
        <Description>
          Procuramos um profissional para ocupar a posição de UX Designer em um
          cliente referência no setor de produção de imunobiológicos (vacinas) e
          análises laboratoriais veterinários Ver mais...
        </Description>
        <TimeLapse>
          Há {lapseTime ? lapseTime.value + lapseTime.unity : 'tempo'}
        </TimeLapse>
      </Container>
    </ContainerShadow>
  );
}
