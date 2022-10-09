const cardMovieStyle = {
  mt: 2,
  width: { xs: 450, md: 700, xl: 1000 },
  display: 'grid',
  gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
  gridTemplateRows: { xs: '400px 1fr', md: '600px', xl: '1fr' },
  flexGrow: 1,
  background: 'inherit',
};

const movieContentStyle = {
  mt: 1,
  fontSize: 20,
  alignContent: 'space-between',
  height: '100%',
  justifyContent: 'space-between',
};

export { cardMovieStyle, movieContentStyle };
