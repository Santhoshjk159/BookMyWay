
# BookMyWay  

**BookMyWay** is a modern travel planning application designed to provide a seamless user experience for exploring trending destinations, viewing cost breakdowns, and planning trips efficiently. This project demonstrates the integration of advanced UI/UX principles and API usage to create a complete travel experience.

---

## 🌟 Features  

### 🔥 Explore Top Destinations  
- Browse 30+ trending destinations across India and the world, curated with stunning images and descriptions.
- Each destination features a personalized cost breakdown that includes estimated costs for flights, hotels, and other travel expenses.  

### 📊 Detailed Cost Breakdown Page  
- When you click on "View Cost Breakdown," you'll be navigated to a beautifully designed page showcasing:  
  - Estimated **Flight Costs**  
  - Estimated **Hotel Costs**  
  - Total Package Costs  


### ✉️ Interactive Contact Page  
- A next-level contact page with an interactive design, including a working form for user inquiries and simulated links to social media handles.  

### 🚀 Performance Optimization  
- Lightweight and fast due to the use of **React** and **TailwindCSS** for design and responsiveness.  

---

## 🛠️ Technologies and Libraries Used  

### 1. **React**  
- React is the core framework used to build the web application's dynamic and interactive components.  
- React Router is used for seamless navigation between pages (`Home`, `About`, `Plan Trip`, `Contact`).  

### 2. **TailwindCSS**  
- TailwindCSS powers the styling of the application, providing responsive and modern designs with minimal effort.  
- Utility-first CSS ensures that the app is lightweight and easy to customize.  

### 3. **React Router DOM**  
- Allows for client-side routing and navigation between various sections of the application, like `Home`, `About`, `Plan Trip`, and `Contact`.  
- Smooth transitions between pages enhance user experience.  

### 4. **Free APIs**  
- **Unsplash API**: Used to fetch high-quality photos of destinations dynamically.  
- **Custom Pricing Logic**: The app simulates cost breakdowns for flights and hotels without needing a backend API.  

### 5. **JavaScript Libraries**  
- JavaScript is used for all dynamic logic, such as handling user inputs, calculating costs, and managing page navigation.  

---

## 💻 Getting Started  

### Prerequisites  

Before running the project, ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/bookmyway.git  
   cd bookmyway  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Add your **Unsplash API Key** in the `.env` file:  
   ```
   REACT_APP_API_KEY=your_unsplash_api_key  
   ```  

4. Start the development server:  
   ```bash  
   npm start  
   ```  

5. Open your browser and visit:  
   ```
   http://localhost:3000  
   ```  

---


## 🌍 API Configuration  

This project uses the **Unsplash API** for fetching destination photos.  

- Go to [Unsplash Developers](https://unsplash.com/developers) and sign up for an API key.  
- Add your API key to the `.env` file:  
   ```
   REACT_APP_API_KEY=your_api_key  
   ```  

---

## 🤝 Contributing  

Contributions are welcome! If you have suggestions or ideas, follow these steps:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add your message here"  
   ```  
4. Push to the branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Submit a pull request.  

---

