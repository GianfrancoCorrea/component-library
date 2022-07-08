import { addDecorator } from '@storybook/react';
import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { withConsole } from '@storybook/addon-console';
import '@storybook/addon-console';
import '../src/styles/global.less';

// addons config
addons.setConfig({
    /**
     * show story component as full screen
     * @type {Boolean}
     */
    isFullscreen: false,

    /**
     * display panel that shows a list of stories
     * @type {Boolean}
     */
    showNav: true,
    /**
     * display panel that shows addon configurations
     * @type {Boolean}
     */
    showPanel: true,

    /**
     * where to show the addon panel
     * @type {('bottom'|'right')}
     */
    panelPosition: 'bottom',

    /**
     * sidebar tree animations
     * @type {Boolean}
     */
    sidebarAnimations: true,

    /**
     * enable/disable shortcuts
     * @type {Boolean}
     */
    enableShortcuts: true,

    /**
     * show/hide tool bar
     * @type {Boolean}
     */
    isToolshown: true,

    /**
     * theme storybook, see link below
     */
    theme:  themes.dark,
    docs: {
        theme: themes.dark,
    },

    /**
     * id to select an addon panel
     * @type {String}
     */
    /* selectedPanel: 'storybook/docs/panel', */

  });


// console output on "Actions" tab
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
    docs: {
        theme: themes.dark,
    },
    /** 
     * custom for storybook-dark-mode
     */
    darkMode: {
        dark: themes.dark,
        light: themes.normal
    },
    /* viewMode: 'docs', */
}