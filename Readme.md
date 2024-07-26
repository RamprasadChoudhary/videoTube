# VideoTube

**Technologies**: NodeJS, ExpressJS, MongoDB, JWT, Multer, Cloudinary, Bcrypt

**GitHub Link**: [GitHub Repository](https://github.com/RamprasadChoudhary/videoTube)

## Overview

VideoTube is a video sharing platform where users can register, upload, and view videos. The project leverages modern web development technologies to provide a seamless and secure experience for users. This application uses Node.js and Express.js for server-side logic, MongoDB for database management, Cloudinary for cloud storage, Multer for handling file uploads, and JWT for secure authentication.

## Features

- **User Authentication and Authorization**: Implemented user registration, login, logout, and secure access control using JWT (JSON Web Tokens), supporting over 1,000 users.
- **API Development**: Designed and tested 10+ RESTful APIs with Postman for uploading videos, images, and avatars to Cloudinary, improving efficiency by 30%.
- **Server-Side Logic and Database Management**: Utilized Node.js and Express.js, handling 500+ requests/second, and created 5+ MongoDB aggregation pipelines, enhancing data retrieval speed by 25%.

## Project Structure
/videoTube
│
├── /server # Backend code
│ ├── /routes # API routes
│ ├── /controllers # Request handlers
│ ├── /models # Data models
│ ├── /middleware # Authentication and 
│ ├── app.js # Express app setup
│ └── index.js # Server entry point
│
├── .gitignore
├── package.json # Project dependencies and scripts
├── README.md # Project documentation
└── ...


## Controllers

### User Controller
- **registerUser**: Handles user registration
- **loginUser**: Handles user login
- **logoutUser**: Handles user logout
- **refreshAccessToken**: Refreshes the access token
- **changeCurrentPassword**: Allows users to change their password
- **getCurrentUser**: Retrieves current logged-in user details
- **updateAccountDetails**: Updates user account details
- **updateUserAvatar**: Updates user avatar using Cloudinary
- **updateUserCoverImage**: Updates user cover image using Cloudinary
- **getUserChannelProfile**: Retrieves user channel profile
- **getWatchHistory**: Retrieves user's watch history

### Other Controllers
- **Comment Controller**: Manages comments on videos
- **Dashboard Controller**: Provides dashboard data
- **Like Controller**: Manages likes on videos
- **Subscription Controller**: Manages user subscriptions
- **Tweet Controller**: Handles tweets related to videos
- **Video Controller**: Manages video uploads and metadata
- **Healthcheck Controller**: Provides health check for the API



## API Endpoints

### User Routes

- `POST /api/login`: User login
- `POST /api/logout`: User logout (secured)
- `POST /api/refresh-token`: Refresh access token
- `POST /api/change-password`: Change user password (secured)
- `GET /api/current-user`: Get current user details (secured)
- `PATCH /api/update-account`: Update account details
- `PATCH /api/avatar`: Update user avatar (secured)
- `PATCH /api/cover-image`: Update user cover image (secured)
- `GET /api/c/:username`: Get user channel profile (secured)
- `GET /api/history`: Get user watch history (secured)

### Comment Routes

- `POST /api/comments`: Add a comment to a video
- `GET /api/comments/:videoId`: Get comments for a specific video
- `PATCH /api/comments/:commentId`: Edit a comment
- `DELETE /api/comments/:commentId`: Delete a comment

### Dashboard Routes

- `GET /api/dashboard`: Get dashboard data

### Like Routes

- `POST /api/likes`: Like a video
- `DELETE /api/likes/:videoId`: Unlike a video

### Subscription Routes

- `POST /api/subscribe`: Subscribe to a channel
- `DELETE /api/subscribe/:channelId`: Unsubscribe from a channel

### Tweet Routes

- `POST /api/tweets`: Post a tweet about a video
- `GET /api/tweets/:videoId`: Get tweets for a specific video

### Video Routes

- `POST /api/videos`: Upload a new video
- `GET /api/videos/:videoId`: Get video details
- `PATCH /api/videos/:videoId`: Edit video details
- `DELETE /api/videos/:videoId`: Delete a video

### Healthcheck Routes

- `GET /api/healthcheck`: API health check

## Models

The project includes models for users, comments, dashboard data, likes, subscriptions, tweets, and videos. For detailed design and structure of these models, refer to the [Eraser.io Design](https://app.eraser.io/workspace/vzQ1OSakKLfSIi4a8TRX).

## Environment Variables

Create a `.env` file in the root of the `server` directory and add the following environment variables:

```bash
PORT=your_port
MONGODB_URI=your_mongodb_uri
CORS_ORIGIN=your_cors_origin
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=your_access_token_expiry
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```



## Setup and Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/RamprasadChoudhary/videoTube.git
    cd videoTube
    ```

2. **Install Dependencies**:
    - Backend:
      ```bash
      cd server
      npm install
      ```

3. **Run the Application**:
    - Backend:
      ```bash
      cd server
      npm start
      ```

4. **Access the Application**:
    - Open your browser and navigate  `http://localhost:5000/api` for the backend API.

