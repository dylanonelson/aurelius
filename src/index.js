import auth from './auth';
import render from './render';

auth().then(user => {
  render(user);
}).catch(error => {
  document.write(error);
});
