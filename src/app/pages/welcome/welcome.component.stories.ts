import type {Meta, StoryObj} from '@storybook/angular';
import {WelcomeComponent} from "./welcome.component";
import {applicationConfig, moduleMetadata} from "@storybook/angular";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {NzRadioModule} from "ng-zorro-antd/radio";


const meta: Meta<WelcomeComponent> = {
  title: 'Welcome',
  component: WelcomeComponent,
  decorators: [
    moduleMetadata({
      imports: [NzCollapseModule, NzRadioModule]
    })
  ]
};

export default meta;
type Story = StoryObj<WelcomeComponent>;

export const Default: Story = {
  args: {
  },
};
