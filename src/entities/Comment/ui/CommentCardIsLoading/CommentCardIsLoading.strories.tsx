import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCardIsLoading } from './CommentCardIsLoading';

export default {
    title: 'shared/Button',
    component: CommentCardIsLoading,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof CommentCardIsLoading>;

const Template: ComponentStory<typeof CommentCardIsLoading> = (args) => <CommentCardIsLoading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};