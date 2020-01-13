module.exports = {
  title: 'Assurance',
  plugins: [
    [
      '@vuepress/google-analytics',
      { ga: 'UA-155752933-1' },
    ],
  ],
  themeConfig: {
    search: false,
    sidebar: [
      ['/', 'Assurance'],
      ['/opposing-views', 'Opposing Views'],
      ['/luther', 'Luther'],
      ['/resources', 'Resources'],
    ],
  },
};
