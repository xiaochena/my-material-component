import CustomizeSetter from './setters/index';

const GeneralImageMeta = {
  componentName: 'GeneralImage',
  title: 'GeneralImage',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  npm: {
    package: 'my-material-name',
    version: '0.1.0',
    exportName: 'GeneralImage',
    main: 'src\\index.tsx',
    destructuring: true,
    subName: '',
  },
  props: [],
  configure: {
    props: [
      {
        title: '自定义 setter',
        name: 'value',
        display: 'block',
        setter: CustomizeSetter,
      },
      {
        title: '参考demo',
        name: 'demo',
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      description: '标题',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                    {
                      name: 'url',
                      description: '地址',
                      setter: 'StringSetter',
                      isRequired: true,
                    },
                  ],
                },
              },
              initialValue: {
                title: 'I am title',
                callback: null,
              },
            },
          },
        },
      },
    ],
  },
};
const snippets = [
  {
    title: 'GeneralImage',
    screenshot: '',
    schema: {
      componentName: 'GeneralImage',
      props: {},
    },
  },
];

export default {
  snippets,
  ...GeneralImageMeta,
};
