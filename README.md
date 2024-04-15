# pCloud Token from OAuth

This application enables you to retrieve an API token for the pCloud API, which can be used with tools like multler-pcloud, rsync or other non-client-interactive applications.

## Requirements

- A pCloud API app is required. For setup and information, visit [pCloud API Apps](https://docs.pcloud.com/my_apps/).
- Note: The creation of new apps is currently disabled.

## Usage

Choose either the hosted version for a quick setup or the local server option for a more hands-on approach.

### A: Easy - Hosted Version
1. Visit [pCloud Token from OAuth Hosted](https://pcloud-token-from-oauth.vercel.app).

### B: Advanced - Local Server
1. Clone this repository.
2. Open `index.html` in a browser eg. `npx serve -l <PORT>`  (replace `<PORT>` with your desired port)

### General Instructions for Both Options (A and B)
Complete these steps after setting up either option A or B:
1. Retrieve your Client ID by navigating to: `Your App > Details > Client ID` on [pCloud API Apps](https://docs.pcloud.com/my_apps/).
  
   ![grafik](https://github.com/runmaxde/pcloud-token-from-oauth/assets/41482988/16b9a3f3-4e15-4498-b1aa-21b37358accd)

4. Activate the redirect URI under `Your App > Settings > Redirect URIs`:
   - For the hosted version, use: `https://pcloud-token-from-oauth.vercel.app`
   - For the local version, use: `http://localhost:<PORT>` (replace `<PORT>` with your desired port)

    ![grafik](https://github.com/runmaxde/pcloud-token-from-oauth/assets/41482988/0c2569c0-ac31-4bd0-80a2-426cbab42184)

     
5. Add in the Client ID in the input field.
5. Click on the "Authenticate and Retrieve Token" button.
6. Log in with your pCloud user credentials.
7. Allow access to the app, ensuring the app name matches the Client ID specified in your pCloud API app.
8. Copy your token from the response and use it as required.
9. After completion, remove the redirect URI under `Your App > Settings > Redirect URIs` to secure your application.

This format further refines navigation to specific settings and emphasizes security by instructing to remove the redirect URI after use.
