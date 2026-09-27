# PROJECT ZERO Official Website

First major-update build for the Project Zero official website.

## Included

- Full-screen looping HOME film with static key-visual loading and fallback
- HOME, WORLD, CHARACTERS, GAMEPLAY, NEWS, MEDIA, COMMUNITY, and footer
- Responsive desktop/mobile navigation
- Character showcase for The Hermit, Ailo, Kane, and Flora
- Chinese character names and a reserved interface for future official in-game model media
- WORLD archive artwork with restrained spatial-drift motion
- Final PROJECT / ZERO pointer-and-touch drag assembly using the original supplied artwork
- English/Chinese interface switching
- Official Discord, X, PC itch.io, and mobile itch.io links
- Full-width PROJECT / ZERO comparison slider inspired by cinematic dual-view layouts
- Keyboard-accessible controls and reduced-motion support
- Existing Firebase pre-registration flow and Firestore security rules

## Assets

- `assets/videos/home-bg.mp4` — HOME background film
- `assets/audio/dystopian-boss-battle.mp3` — full looping background music; the video track remains muted
- `assets/images/project-zero-alpha.jpeg` — loading/fallback key visual
- `assets/images/characters/` — official character portraits

The `IN-GAME MODEL` card restores the procedural Canvas battle-model renderer adapted from the supplied game `game.js`. It changes with the selected character and does not replace the official large portrait.

## Preview

Serve this directory with any static web server, then open `index.html`. Direct file opening works for most presentation features, but Firebase registration requires a hosted origin and configured Firestore.

## Firebase

Publish `firestore.rules` in the Firebase console before accepting registrations. The rule allows create-only access to validated pre-registration records and denies public reads, updates, and deletes.
