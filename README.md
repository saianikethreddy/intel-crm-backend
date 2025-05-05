# 🧠 Intel Club Backend

This is the backend server for the **Intel Club** platform, designed to support user management, group communications, AI chat, and technical/social post sharing.

---

## 🔧 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB** (with Mongoose)  
- **JWT** Authentication  
- **Socket.IO** for real-time chat  
- **OpenAI / OpenRouter API** integration  
- **REST API** structure  

---

## 📁 Folder Structure

intel-club-backend/
├── controller/ # Handles business logic
│ ├── authController.js
│ ├── userController.js
│ ├── postController.js
│ ├── groupController.js
│ └── openaiController.js
├── models/ # Mongoose schemas
│ ├── User.js
│ ├── Post.js
│ ├── Group.js
│ └── Chat.js
├── routes/ # API route handlers
│ ├── authRoutes.js
│ ├── userRoutes.js
│ ├── postRoutes.js
│ ├── groupRoutes.js
│ └── openaiRoutes.js
├── middleware/ # Authentication, validation, etc.
├── .env # Environment variables
├── server.js # Entry point
└── README.md # You're here


📡 API Endpoints

🔐 Auth – /auth
Method	Endpoint	Description
POST	/auth/register	Register a new user
POST	/auth/login	Login and get JWT token
👤 User – /user
Method	Endpoint	Description
GET	/user/me	Fetch logged-in user info
PUT	/user/update	Update user profile
📝 Post – /post
Method	Endpoint	Description
POST	/post/create	Create a new post
GET	/post/all	Get all posts
GET	/post/:userId	Get posts by user
GET	/post/group/:id	Get posts from group
💬 Chat – /chat
Method	Endpoint	Description
POST	/chat/send	Send direct message
GET	/chat/:userId	Get personal messages
👥 Groups – /group
Method	Endpoint	Description
POST	/group/create	Create a group (Core members)
POST	/group/request	Request to join a group
GET	/group/members/:groupId	View group members
GET	/group/user/:userId	View user's groups
🤖 AI Assistant – /openai
Method	Endpoint	Description
POST	/openai/chat	Ask a question to the AI


📄 License

This project is licensed under the MIT License.



