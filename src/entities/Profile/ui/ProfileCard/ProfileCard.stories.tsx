import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
// import avatar from 'shared/assets/tests/storybook.jpg';
import { ProfileCard } from './ProfileCard';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: { backgroundColor: { control: 'color' } },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);
// захардкодил из за loki тестов которые путь по разному кастуют test:ui и test:ui:ci
const avatar = 'https://fastly.picsum.photos/id/888/200/200.jpg?hmac=k4DxIkJ_O8YKi3TA5I9xxJYJzqpSvx3QmJlgZwHMojo';
export const Primary = Template.bind({});
Primary.args = {
    data: {
        firstname: 'Батыр',
        lastname: 'Кусаинов',
        age: 18,
        city: 'Astana',
        country: Country.Kazakhstan,
        currency: Currency.USD,
        avatar,
    },
};
export const withError = Template.bind({});
withError.args = { error: 'true' };
export const Loading = Template.bind({});
Loading.args = { isLoading: true };