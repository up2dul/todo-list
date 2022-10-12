import axios from 'axios';

const { VITE_BASE_URL, VITE_EMAIL } = import.meta.env;

axios.defaults.baseURL = VITE_BASE_URL;
axios.defaults.params = { email: VITE_EMAIL };

type InitData = {
  title: string;
  email: string;
};

const initData: InitData = {
  title: 'New activity',
  email: VITE_EMAIL
};

export const getAll = () => axios.get('/activity-groups/');

export const getDetail = (id: string | undefined) => axios.get('/activity-groups/' + id);

export const create = () => axios.post('/activity-groups/', initData);

export const update = (id: string | undefined, newData: { title: string }) => {
  axios.patch('/activity-groups/' + id, newData);
};

export const remove = (id: string) => axios.delete('/activity-groups/' + id);
