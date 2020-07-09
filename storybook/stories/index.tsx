import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { CenterView } from './decorators';

import RatingStars from '../../src/animations/RatingStars';
import Chat from '../../src/animations/Chat';

storiesOf('Animations', module)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('chat', () => <Chat />)
  .add('rating stars', () => <RatingStars />)
  .add('Hello World!', () => <Text>Hello World!</Text>);
