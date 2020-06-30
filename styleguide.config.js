module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig().parse,
  skipComponentsWithoutExample: true,
  ignore: ['**/__tests__/**', '**/*.test.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}', '**/*.d.ts', '**/index.tsx'],
  sections: [
    {
      name: "Вступление",
      content: "README.md",
    },
    {
      name: "Компоненты",
      components: "src/components/**/*.tsx",
      exampleMode: "expand", // 'hide' | 'collapse' | 'expand'
      usageMode: "expand", // 'hide' | 'collapse' | 'expand'
    },
    {
      name: 'Views',
      components: 'src/views/**/*.tsx',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    }
  ],
};
