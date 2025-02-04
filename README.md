# 🚀 URL Shortener

A simple and efficient **URL Shortener** built with **Node.js** and **MongoDB**. Convert long URLs into short, manageable links in seconds! 🔗✨

## 🌟 Features

✅ Shorten long URLs quickly and efficiently  
✅ Unique, customizable short URLs  
✅ Track and manage shortened links  
✅ High-performance and scalable backend  
✅ MongoDB for persistent storage  
✅ RESTful API for seamless integration  

## 🛠️ Tech Stack

- **Backend:** Node.js (Express.js)
- **Database:** MongoDB

## 🚀 Getting Started

### 📌 Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### 🛠️ Installation

1️⃣ **Clone the repository**
```bash
git clone https://github.com/VirendraT11/URL-Shortner.git
cd URL-Shortner
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Set up environment variables**  
Create a `.env` file in the root directory and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
BASE_URL=http://localhost:5000
```

4️⃣ **Start the server**
```bash
npm start
```
Your server is now running at **http://localhost:5000** 🚀

## 🎯 API Endpoints

| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| POST   | `/api/shorten` | Shorten a long URL       |
| GET    | `/:shortUrl`   | Redirect to original URL |

## 📌 Example Usage

### 🔗 Shorten a URL
```json
POST /api/shorten
{
  "longUrl": "https://example.com/some-very-long-url"
}
```
_Response:_
```json
{
  "shortUrl": "http://localhost:5000/abcd1234"
}
```

### 🔄 Redirect a Short URL
```bash
GET http://localhost:5000/abcd1234
```
👉 Redirects to the original URL.

## 🎯 Future Enhancements

🚀 User authentication for personalized link management  
📊 Click analytics and statistics tracking  
📅 Expiry dates for shortened URLs  
🎨 Frontend UI for easy URL shortening  

## 🤝 Contributing
Contributions are welcome! Feel free to fork, open an issue, or submit a PR. 💡

## 📜 License
This project is licensed under the MIT License.

## 🔗 Connect with Me
📌 GitHub: [VirendraT11](https://github.com/VirendraT11)  
📌 LinkedIn: [Virendra Tambavekar](https://www.linkedin.com/in/virendra-tambavekar-74a384257/)  
📌 Twitter: [@VirendraCodes](https://x.com/VirendraCodes)  

Give this repo a ⭐ if you found it helpful! 🚀

