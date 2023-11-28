import {addons, makeDecorator, MakeDecoratorResult} from '@storybook/addons';
import {DARK_MODE_EVENT_NAME} from 'storybook-dark-mode';
import {Addon_LegacyStoryFn, Addon_StoryContext, Addon_WrapperSettings} from '@storybook/types';
import {ThemeService, ThemeType} from '../../../src/app/theme.service';

const themeService: ThemeService = new ThemeService();

const getTheme = (darkMode: boolean): ThemeType => {
    switch (darkMode) {
        case true:
            return ThemeType.dark;
        case false:
            return ThemeType.default;
    }
};

const setDarkMode = (darkMode: boolean): void => {
    const theme: ThemeType = getTheme(darkMode);
    if (themeService.currentTheme === theme){
      return;
    }
    themeService.toggleTheme().then(() => console.log('theme changed'));
};

const loadTheme = (theme: ThemeType) => {
  themeService.loadTheme(theme, true).then(() => console.log('theme loaded for the first time'));
};

export const withThemeSwitching: MakeDecoratorResult = makeDecorator({
    name: 'withThemeSwitching',
    parameterName: 'theme',
    skipIfNoParametersOrOptions: false,
    wrapper: (getStory: Addon_LegacyStoryFn, context: Addon_StoryContext, settings: Addon_WrapperSettings) => {
        console.log('Hello from custom decorator');

        // get channel to listen to event emitter
        const channel = addons.getChannel();

        const currentTheme: ThemeType = getTheme(channel.last(DARK_MODE_EVENT_NAME));
        loadTheme(currentTheme);

        // listen to DARK_MODE event
        channel.on(DARK_MODE_EVENT_NAME, (darkMode: boolean) => {
            console.log('channel on');
            setDarkMode(darkMode);
        });
        channel.off(DARK_MODE_EVENT_NAME, (darkMode: boolean) => {
            console.log('channel off');
            setDarkMode(darkMode);
        });

        return getStory(context);
    },
});
