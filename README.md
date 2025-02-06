# CNotes-backend

# Backend: Notes API

This is the backend API for the **Notes App**, built with **ExpressJS**. It follows **Clean Code** principles and uses **MongoDB** as the database to store notes.

---

## 📦 **Features**

- **Create Notes**: API endpoint to add new notes.
- **Get Notes**: Fetch all notes from the database.
- **Delete Notes**: API endpoint to remove a note.
- **Update Note Status**: Change the status of a note between *in progress* and *completed*.

---

## 🛠 **Technologies Used**

- **ExpressJS**: Fast and minimalist web framework for Node.js.
- **MongoDB**: NoSQL database to store notes data.
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **Clean Code**: Structured project layout with well-organized code, promoting readability and maintainability.

---

## 🚀 **Getting Started**

### **Prerequisites**

1. **MongoDB** must be installed and running locally.

   Start MongoDB by running:

   ```bash
   sudo service mongod start
   ```

2. **Node.js** and **Yarn** must be installed.

   - Install [Node.js](https://nodejs.org/)
   - Install [Yarn](https://yarnpkg.com/)

### **Clone the Repository**

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/notes-api.git
cd notes-api
```

### **Install Dependencies**

Run the following command to install the necessary dependencies:

```bash
yarn install
```

### **Run the Development Server**

To start the backend server:

```bash
yarn run dev
```

This will start the backend API server, typically on [http://localhost:5000](http://localhost:5000).

---

## 📝 **API Endpoints**

Here are the available endpoints in the Notes API:

1. **GET /note**  
   Fetch all notes.

   **Response**:
   ```json
   [
     {
       "uuid": "unique-id",
       "title": "Sample Note",
       "note": "This is a sample note",
       "status": "in_progress",
     },
     ...
   ]
   ```

2. **POST /note**  
   Create a new note.

   **Request Body**:
   ```json
   {
     "title": "New Note",
     "note": "This is a new note",
   }
   ```

   **Response**:
   ```json
   {
     "uuid": "unique-id",
     "title": "New Note",
     "note": "This is a new note",
     "status": "in_progress",
   }
   ```

3. **DELETE /note/:id**  
   Delete a note by its `uuid`.

   **Response**:
   ```json
   {
     "deleted": true
   }
   ```

4. **PATCH /note/:id/status**  
   Update the status of a note by its `uuid`.

   **Request Body**:
   ```json
    {
     "title": "New Note",
     "note": "New body",
   }
   ```

   **Response**:
   ```json
   {
      "updated": true
   }
   ```

---

## ⚙️ **Environment Variables**

Create a `.env` file in the root directory to store your environment variables:

```env
MONGO_URI=mongodb://localhost:27017/notesdb
PORT=4000
```

Make sure to replace `MONGO_URI` with the URI of your MongoDB database.

---

## 📝 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📧 **Contact**

If you have any questions or suggestions, feel free to open an issue or contact me directly.

---

Feel free to adjust any section according to the specifics of your backend implementation! Let me know if you need any additional changes.
