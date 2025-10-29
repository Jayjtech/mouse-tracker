# Mouse Tracker

Mouse Tracker is a minimal React + Vite application that detects when a user
goes idle and surfaces that state in the UI. It demonstrates a reusable
`useIdleTimer` hook that consolidates pointer, keyboard, and scroll activity
into a single idle/active signal you can trigger your own side effects from.

## Features

- Idle monitoring driven by a configurable timeout (default: 5 seconds)
- Reusable `useIdleTimer` hook that accepts custom `onIdle` callbacks
- Lightweight UI that flips between `Active ⚡` and `Idle 💤` status in real time
- Built with Vite for instant reloads and fast production builds

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

Vite prints a local URL (default `http://localhost:5173`). Open it in your
browser and interact with the page to watch the status transition from active
to idle after five seconds of inactivity.

## Customizing the Idle Timer

The behaviour lives in `src/hooks/useIdleTime.js`. You can tailor it by:

- Passing a different `timeout` (milliseconds)
- Providing a custom `onIdle` handler for analytics, notifications, etc.
- Extending the event set inside the hook if you need to monitor more signals

Example:

```jsx
const { isIdle } = useIdleTimer({
  timeout: 10000,
  onIdle: () => console.warn("No user activity detected for 10 seconds."),
});
```

## Scripts

- `npm run dev` — start the Vite dev server with hot module replacement
- `npm run build` — generate an optimized production build
- `npm run preview` — serve the production build locally
- `npm run lint` — run ESLint across the project

## Folder Highlights

- `src/App.jsx` — renders the idle/active status indicator
- `src/hooks/useIdleTime.js` — custom hook that handles event wiring and timer
- `public/` — static assets served as-is

## Next Steps

Ideas to extend this project:

1. Display a countdown timer so users know when they will become idle
2. Persist idle state to analytics or logs
3. Route idle users to a warning or lock screen

