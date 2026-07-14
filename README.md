# PROJECT ZERO Website V8 — Firebase Pre-registration

The popup now submits directly to Cloud Firestore.

Collection:
`preRegistrations`

Stored fields:
- email
- platform: PC / iOS / Android
- source
- status
- createdAt (server timestamp)

## Firebase setup

1. Open Firebase Console.
2. Open Firestore Database and create the database.
3. Open the Rules tab.
4. Paste the contents of `firestore.rules`.
5. Publish.
6. Upload the website files to GitHub Pages.

The Firebase web configuration is public by design. Security depends on Firestore Rules, so do not leave Firestore in open test mode.
