import 'app/styles/index.scss';
import { Story } from '@storybook/react';

export const StoryDecorator = (story: () => Story) => story();
