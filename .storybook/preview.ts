import type { Preview } from "@storybook/angular";
import {provideAnimations} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {importProvidersFrom} from "@angular/core";
import {applicationConfig} from "@storybook/angular";
import {withThemeSwitching} from "./addons/storybook-dark-mode";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(BrowserModule), provideAnimations()],
    }),
    withThemeSwitching(),
  ],
};

export default preview;
