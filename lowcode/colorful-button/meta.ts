const ColorfulButtonMeta = {
  componentName: 'ColorfulButton',
  title: 'ColorfulButton',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'my-material-name',
    version: '0.1.0',
    exportName: 'ColorfulButton',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  configure: {
    props: [
      {
        title: 'text',
        name: 'text',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: 'color',
        name: 'color',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
    ],
    component: {},
  },
};
const snippets = [
  {
    title: 'ColorfulButton',
    screenshot: '',
    schema: {
      componentName: 'ColorfulButton',
      props: {},
    },
  },
];

export default {
  ...ColorfulButtonMeta,
  snippets,
};
