import './sw';
import auth from './auth';

auth().then((user) => {
  console.log(`Hello ${user.displayName}!`);
}).catch((error) => {
  console.error(error);
});
