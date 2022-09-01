import { ComponentMeta, ComponentStory } from '@storybook/react';
import Layout, { ILayout } from './Layout';
import { mockLayoutProps } from './Layout.mocks';

export default {
  title: 'templates/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Base = Template.bind({});

Base.args = {
  ...mockLayoutProps.base,
} as ILayout;
