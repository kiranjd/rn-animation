import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    {children}
  </View>
);
