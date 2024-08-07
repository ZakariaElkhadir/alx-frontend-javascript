import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), signUpUser()]);
}
export default handleProfileSignup;
