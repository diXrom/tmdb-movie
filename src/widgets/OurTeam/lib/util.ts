const getCardStyle = (index: number) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: index % 2 ? 'row-reverse' : 'row' },
});

export { getCardStyle };
