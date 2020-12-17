import routes from '../../config/routes';

const { base, bills } = routes;

const fetchBills = async () => {
  const response = await fetch(`${base}${bills}`);
  return response.json();
};

export default {
  fetchBills,
};
