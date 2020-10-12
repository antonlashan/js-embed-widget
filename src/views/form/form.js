import './form.scss';

import html from './form.html';
import { submitForm } from './form.service';

const temporary = document.createElement('div');
temporary.id = 'w-wrapper';

let form;

export const show = () => {
  // convert plain HTML string into DOM elements
  temporary.innerHTML = html;

  // append elements to body
  const body = document.getElementsByTagName('body')[0];
  body.appendChild(temporary);

  const badge = temporary.querySelector('#w-badge');
  badge.addEventListener('click', toggleForm);

  const pannelHeader = temporary.querySelector('#w-pannel-header');
  pannelHeader.addEventListener('click', toggleForm);

  form = temporary.querySelector('#w-form');
  form.addEventListener('submit', handleOnsubmit);
};

const toggleForm = () => {
  const pannel = temporary.querySelector('#w-panel');

  pannel.classList.toggle('panel-active');
};

const handleOnsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  submitForm(formData)
  
};
