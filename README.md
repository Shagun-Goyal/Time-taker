TimeTracker
TimeTracker is a productivity tool consisting of a Chrome extension, a React-based dashboard, and a Node.js backend. The Chrome extension tracks time spent on productive websites, the backend stores and processes data, and the dashboard visualizes productivity metrics, including a "productive bar" that updates based on user activity.
This project was developed as part of an internship certification to demonstrate skills in full-stack development, Chrome extension creation, and real-time data visualization.
Table of Contents

Features
Project Structure
Prerequisites
Setup Instructions
Clone the Repository
Backend Setup
Dashboard Setup
Chrome Extension Setup


Usage
Troubleshooting
Notes
License

Features

Chrome Extension: Tracks time spent on predefined productive websites (e.g., educational or work-related sites).
Dashboard: Displays productivity metrics, including a "productive bar" that visualizes time spent on productive tasks (updates within 1–2 minutes of activity).
Backend API: Stores browsing data and serves it to the dashboard via RESTful endpoints.
Real-Time Sync: The extension communicates with the backend to log activity, which is reflected in the dashboard.

Project Structure
TimeTracker/
├── backend/                # Node.js/Express backend API
│   ├── package.json        # Backend dependencies and scripts
│   ├── server.js           # Main backend server file
│   └── ...                 # Other backend files (e.g., routes, models)
├── dashboard/              # React-based frontend dashboard
│   ├── package.json        # Dashboard dependencies and scripts
│   ├── src/                # React components and assets
│   └── ...                 # Other dashboard files
├── extension/              # Chrome extension source code
│   ├── manifest.json       # Extension configuration
│   ├── background.js       # Background script for tracking
│   ├── content.js          # Content script for webpage interaction
│   └── ...                 # Other extension files (e.g., popup.html, CSS)
├── .gitignore              # Excludes node_modules and other files
└── README.md               # Project documentation

Prerequisites

Node.js: Version 16 or higher
npm: Version 8 or higher
Google Chrome: Latest version for testing the extension
IDE: Visual Studio Code or similar
Git: For cloning the repository

Setup Instructions
Clone the Repository

Clone the repository to your local machine:git clone https://github.com/username/TimeTracker.git
cd TimeTracker



Backend Setup

Navigate to the backend/ directory:cd backend


Install dependencies:npm install


Start the backend server:npm start


The backend runs on http://localhost:3000.
Ensure port 3000 is free. If not, stop other applications using it or modify the port in backend/server.js.



Dashboard Setup

Open a new terminal and navigate to the dashboard/ directory:cd dashboard


Install dependencies:npm install


If you encounter an error like 'react-scripts' is not recognized, ensure "react-scripts": "^5.0.1" is in dashboard/package.json. If missing, run:npm install react-scripts --save




Start the dashboard:npm start


The dashboard runs on http://localhost:3001 to avoid conflicts with the backend.
If prompted to use a different port, confirm it (e.g., press Y).
The dashboard should open in your default browser.



Chrome Extension Setup

Open Google Chrome and navigate to chrome://extensions/.
Enable Developer mode (toggle in the top-right corner).
Click Load unpacked and select the extension/ folder from the project directory.
The TimeTracker extension will appear in Chrome’s extensions list and be active.
Ensure the backend is running (http://localhost:3000) for the extension to sync data.

Usage

Start the Backend and Dashboard:
Ensure both the backend (npm start in backend/) and dashboard (npm start in dashboard/) are running.


Use the Chrome Extension:
Browse productive websites (e.g., educational or work-related sites defined in the extension’s logic).
The extension tracks time and sends data to the backend.


View Productivity Metrics:
Open the dashboard in your browser (http://localhost:3001).
The "productive bar" updates within 1–2 minutes to reflect time spent on productive sites.
Explore other metrics (e.g., time breakdowns, activity logs) as implemented.


Interact with the Extension:
If the extension includes a popup (check extension/popup.html), click the extension icon in Chrome’s toolbar to view or configure settings.



Troubleshooting

Error: 'react-scripts' not recognized:
Verify react-scripts is in dashboard/package.json. If missing, run:cd dashboard
npm install react-scripts --save




Port Conflict:
Ensure the backend uses port 3000 and the dashboard uses port 3001. Check for conflicts:netstat -aon | findstr :3000
netstat -aon | findstr :3001


Terminate conflicting processes or update port settings in backend/server.js or dashboard/package.json.


Productive Bar Not Updating:
Confirm the backend is running and accessible at http://localhost:3000.
Check Chrome’s DevTools (F12) for extension errors (under the Console tab).
Ensure the extension’s manifest.json has correct permissions (e.g., activeTab, storage, http://localhost:3000/*).


Extension Not Loading:
Verify manifest.json is valid JSON and includes required fields (e.g., name, version, permissions).
Reload the extension in chrome://extensions/.


GitHub Upload Issues:
The repository excludes node_modules via .gitignore to bypass GitHub’s 100-file limit. Use Git commands to push:git add .
git commit -m "Internship submission"
git push origin main





Notes

The node_modules folders for both backend/ and dashboard/ are excluded (see .gitignore). Run npm install in each directory to generate them.
The project assumes a Node.js/Express backend, a React dashboard, and a Chrome extension. Adjust instructions if your setup differs.
For questions, contact [your email or contact info].
This project was submitted for internship certification to demonstrate proficiency in JavaScript, React, Node.js, and Chrome extension development.

License
MIT License
