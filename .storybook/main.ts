import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  refs: {
    'package-name': { disable: true },
    "v0.1": {
      title: "v0.1",
      url: "https://6620c6df5d4d56a8ab8534bf-tygdokqqhe.chromatic.com/",
      expanded: false,
    },
    "v0.2": {
      title: "v0.2",
      url: "http://localhost:6007/",
    },
  },
};
export default config;
