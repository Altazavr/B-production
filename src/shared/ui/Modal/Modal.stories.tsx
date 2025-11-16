import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal } from 'shared';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia eius dolore. Dolores accusamus iusto, consequatur magni fugit enim vero.',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio officia eius dolore. Dolores accusamus iusto, consequatur magni fugit enim vero.',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
