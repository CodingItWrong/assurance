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
      ['/', 'Opposing Views'],
      ['/luther', 'Luther'],
    ],
  },
};
