# pCloud Token from OAuth

## Overview
This application enables you to securely retrieve an API token for the pCloud API, suitable for use with tools like multler-pcloud, rsync, or other non-client-interactive applications.

## Requirements
- **pCloud API App:** Required for token retrieval. Visit [pCloud API Apps](https://docs.pcloud.com) for setup and management information.
- **Note:** The creation of new apps is currently disabled.

## Usage
Choose from two setup options depending on your preference for ease of use or control:

### A: Easy - Hosted Version
1. **Access the Tool:**
   - Visit [pCloud Token from OAuth Hosted](https://pcloud-token-from-oauth.vercel.app).

### B: Advanced - Local Server
1. **Setup:**
   - Clone this repository to your local machine.
   - Serve the application locally by running `npx serve -l PORT` in your terminal, replacing `PORT` with your desired port number.

## General Instructions for Both Options (A and B)
1. **Retrieve Your Client ID:**
   - Navigate to: **Your App > Details > Client ID** on the pCloud API Apps page.

2. **Set Up the Redirect URI:**
   - For the hosted version, use: `https://pcloud-token-from-oauth.vercel.app`.
   - For the local version, use: `http://localhost:PORT`, replacing `PORT` with your chosen port number.

3. **Authenticate and Retrieve Token:**
   - Enter your Client ID in the provided input field on the index page.
   - Click the "Authenticate and Retrieve Token" button.
   - Log in with your pCloud user credentials.
   - Allow access to the app, ensuring the app name matches the Client ID specified in your pCloud API app settings.

4. **Retrieve and Use Your Token:**
   - Copy the token displayed in the response field.
   - Use this token as required for your applications.

5. **Secure Your Application:**
   - After completing your tasks, remember to remove the redirect URI under **Your App > Settings > Redirect URIs** to secure your application.

## Security Note
Always adhere to the best security practices, particularly in managing your Client ID and token to prevent unauthorized access.
