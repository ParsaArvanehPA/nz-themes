import type {Meta, StoryObj} from '@storybook/angular';
import {WelcomeComponent} from "./welcome.component";


const meta: Meta<WelcomeComponent> = {
  title: 'Welcome',
  component: WelcomeComponent
};

export default meta;
type Story = StoryObj<WelcomeComponent>;

export const Default: Story = {
  args: {
  },
};
