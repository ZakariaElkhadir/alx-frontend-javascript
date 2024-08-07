import { uploadPhoto, createUser } from './utils';

/**
 * Handles the profile signup process.
 *
 * @returns {Promise} A promise that resolves when both the photo
 * upload and user creation are completed.
 * @throws {Error} If the signup system is offline.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => console.log(`${values[0].body} ${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
