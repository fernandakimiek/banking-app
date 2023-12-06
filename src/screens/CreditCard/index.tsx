import React from 'react';
import {Text, View} from 'react-native';

import {PaymentIcon} from 'react-native-payment-icons';
import {Ionicons} from '@expo/vector-icons';
import theme from '../../styles/theme';
import {Container, Content, ContentAccount} from './styles';

export default function CreditCard() {
  return (
    <Container>
      <Content>
        <ContentAccount>
          <Text
            style={{
              color: theme.GRAY,
              fontSize: 15,
              marginTop: 10,
            }}>
            BASIC CURRENT ACCOUNT
          </Text>

          <Text
            style={{
              color: theme.WHITE,
              fontWeight: 'bold',
              fontSize: 25,
            }}>
            R$ 15.000,00 <Ionicons name="eye" size={24} color="white" />
          </Text>

          <Text
            style={{
              color: theme.GRAY,
              fontSize: 15,
            }}>
            JOHN TRAVOLTA
          </Text>
          <View
            style={{
              alignSelf: 'flex-end',
              marginRight: 25,
              marginBottom: 10,
            }}>
            <PaymentIcon type="master" width={40} />
          </View>
        </ContentAccount>
      </Content>
    </Container>
  );
}
