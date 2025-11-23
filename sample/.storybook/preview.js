/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    options: {
      storySort: {
        order: [
          "Documents",
          ["はじめに", "導入方法", "カスタマイズ"],
        ],
      },
    },

  },
};

export default preview;