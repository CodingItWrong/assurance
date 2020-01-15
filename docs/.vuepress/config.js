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
      ['/why-it-matters', 'Why It Matters'],
      ['/luther', 'Luther'],
      ['/resources', 'Resources'],
    ],
  },
};
