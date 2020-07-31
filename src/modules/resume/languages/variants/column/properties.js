import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Languages',
    required: true
  },
  languages: {
    name: 'Languages',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Language',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          name: 'Language',
          type: propertyTypes.STRING,
          value: 'Language 1',
          required: true
        },
        percent: {
          name: 'percent',
          type: propertyTypes.NUMBER,
          value: 95,
          required: true
        }
      },
      {
        name: 'Language',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          name: 'Language',
          type: propertyTypes.STRING,
          value: 'Language 2',
          required: true
        },
        percent: {
          name: 'percent',
          type: propertyTypes.NUMBER,
          value: 70,
          required: true
        }
      }
    ],
    required: true
  }
};

export default properties;
