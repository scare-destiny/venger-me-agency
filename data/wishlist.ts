const RO_TOKEN = 'tHOw56VlOhm9bmr2caZLROZTV5IRBsf0';

export const fetchWishilst = async () => {
  const response = await fetch('https://api.baserow.io/api/database/rows/table/222543/?user_field_names=true', {
    headers: {
      Authorization: `Token ${RO_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
};
