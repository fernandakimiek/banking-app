import React from 'react';

import {
  AccountArea,
  AppName,
  CarouselImage,
  CarouselItem,
  Container,
  ContainerAccount,
  ContainerHeader,
  Status,
  ViewContainer,
} from './styles';
import { useAuth } from '../../contexts/Auth';
import { Ionicons } from '@expo/vector-icons';
import Text from '../../components/Text';
import { textTypes } from '../../components/Text/textTypes';
import theme from '../../styles/theme';
import { View } from 'react-native';
import { Carousel } from 'react-native-basic-carousel';

export default function Home() {
  const { authData } = useAuth();

  const _renderItem = (item: any, index: any) => {
    return (
      <CarouselItem>
        <Text color={theme.WHITE}>{item.title}</Text>
        <CarouselImage source={item.image} />
      </CarouselItem>
    );
  };

  const data = [
    {
      title: 'Get your car insurance',
      image: require('../../assets/images/car-insurance.png'),
    },
    { title: 'Protect your family', image: require('../../assets/images/life-insurance.png') },
    { title: 'Make your dreams come true', image: require('../../assets/images/loan.png') },
  ];
  return (
    <Container>
      <ContainerHeader>
        <Ionicons
          style={{ marginRight: 10 }}
          name="person-circle-outline"
          size={50}
          color="purple"
        />
        <View>
          <AppName>Hello {authData?.name}!</AppName>
          <Status>Active</Status>
        </View>
      </ContainerHeader>

      <ContainerAccount>
        <AccountArea>
          <Text color={theme.PURPLEDARK1} type={textTypes.SUBTITLE}>
            Account number
          </Text>
          <Text type={textTypes.SUBTITLE}> {authData?.account}</Text>
          <Text color={theme.PURPLEDARK1} type={textTypes.SUBTITLE}>
            Total amount
          </Text>
          <Text type={textTypes.SUBTITLE}> {authData?.amount}</Text>
        </AccountArea>
      </ContainerAccount>

      <Carousel
        data={data}
        renderItem={({ item, index }) => _renderItem(item, index)}
        itemWidth={350}
        pagination
      />
    </Container>
  );
}
