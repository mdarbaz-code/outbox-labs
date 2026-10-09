# Login and Profile — Demo Notes

## How to test
1. Open `/signup` and create an account with a name, email, and password of at least 8 characters.
2. You should land in the inbox.
3. Click the profile card in the left sidebar or avatar in the top-right corner.
4. Change your name, optionally choose a profile image under 1 MB, and click **Save changes**.
5. Refresh the browser. The profile should remain.
6. Click **Sign out**, then sign in with the same email and password at `/login`.
7. Try a wrong password and verify an error toast appears.
8. Try registering the same email twice and verify the duplicate-account message appears.

## Important security limitation
This is client-side demo authentication. The demo stores the account list and password in localStorage, which is not secure and must not be used for real users or real credentials. For production, move signup/login to a backend, hash passwords on the server, use secure sessions or short-lived tokens, and authorize every protected API request.
