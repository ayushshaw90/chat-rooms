# Chat-rooms

A website to join private chat rooms and chat with your friends. No chat history is saved.
It is made with Socket.io and ReactJS. 


## 👩🏼‍💻 Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![Node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DA0B)

![Express.js](https://img.shields.io/badge/Express.js-brown?style=for-the-badge&logo=express&logoColor=white)

![Tailwind css](https://img.shields.io/badge/Tailwind%20CSS-E11D48?style=for-the-badge&logo=tailwindcss&logoColor=FFFFFF)

![CSS3](https://img.shields.io/badge/CSS-orange?style=for-the-badge&logo=css3&logoColor=white)

![Socket.io](https://img.shields.io/badge/Socket.io-20A39A?style=for-the-badge&logo=socket.io&logoColor=FFFFFF)

## 🚀 Live Demo
![Website](https://img.shields.io/badge/website-up-greene)

https://chat-room-backend-production.up.railway.app

## 🔧 Setting up the project locally

### Clone the repository:

```
git clone https://github.com/ayushshaw90/chat-rooms.git
```

### Open terminal inside the cloned project

### Installing dependencies

```
cd chat-backend
npm install
cd ../chatrooms
npm install
cd ..
```
### Start the backend server


```
cd chat-backend
npm run start
```
### Start the front end react project's server

Open a terminal in the root directory of the cloned repository

```
cd chatrooms
npm run dev
```

After starting the frontend, the terminal shows the link to the react site in localhost.

Open the link in browser and use the app.


## 🛠 Building the react frontend for production

Open a terminal in the root directory of the cloned repository

```
cd chatrooms
npm run build
```

A folder named frontend is generated and gets stored inside chat-backend directory. It has the production build of react.

Open the chat-backend directory and open a terminal in it

```
npm run start
```
It starts the react project in the link

http://localhost:8000

Open the link and use the chat application
(No need to start the react server)
