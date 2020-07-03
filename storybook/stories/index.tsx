import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { CenterView } from './decorators';
import RatingStars from '../../src/animations/RatingStars';
import { Text } from 'react-native';

storiesOf('Animations', module)
  .addDecorator((getStory: Function) => <CenterView>{getStory()}</CenterView>)
  .add('Hello World!', () => <Text>Hello World!</Text>)
  .add('animated rating stars', () => <RatingStars />);
