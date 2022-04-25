
export const getCountryFromCca2 = cca2 => {
  if (!cca2 ) {
    return null;
  }

  return {
    cca2,
  };
};
export default {
  getCountryFromCca2,
};
