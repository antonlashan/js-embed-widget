import { CONFIG } from '../../environment/env';
// eslint-disable-next-line no-console
console.log(CONFIG);

export const submitForm = (formData) => {
  alert(formData.getAll('title'))
};
