import React from 'react';

import { RatingStars, Loading } from './animations';
import StorybookUI from '../storybook';

const showStorybook = true;

export default () => {
  if (showStorybook) {
    return <StorybookUI />;
  }
  return <Loading />;
};

// export default from '../storybook';
