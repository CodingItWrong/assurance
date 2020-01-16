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
      ['/loss-of-salvation', 'Loss of Salvation'],
      ['/proving-you-were-never-saved', 'Proving You Were Never Saved'],
      ['/why-it-matters', 'Why It Matters'],
      ['/luther', 'Luther'],
      ['/a-personal-story', 'A Personal Story'],
      ['/resources', 'Resources'],
    ],
  },
};
