const COLOR_NAMES = {
  navy: '#3d5a80',
  cerulean: '#98c1d9',
  cyan: '#e0fbfc',
  lavender: '#dcd6f7',
  gunmetal: '#293241',
};

export default {
  typography: {
    fontFamily: 'Helvetica Neue,Helvetica,Arial,sans-serif',
    fontFamilyMono: 'Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace',
  },
  colors: {
    ...COLOR_NAMES,
    navigationLinkColor: COLOR_NAMES.gunmetal,
  }
};
