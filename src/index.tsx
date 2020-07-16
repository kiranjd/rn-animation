import React from 'react';

import { RatingStars } from './animations';
import StorybookUI from '../storybook';

const showStorybook = false;

export default () => {
  if (showStorybook) {
    return <StorybookUI />;
  }
  return <RatingStars />;
};

// export default from '../storybook';
