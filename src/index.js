import './sw';
import auth from './auth';
import render from './render';

auth().then(user => {
  render(user);
}).catch(error => {
  console.error(error);
});
