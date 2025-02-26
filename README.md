To clone and set up the project from the provided GitHub repository, follow these steps:

### 1. Clone the Repository
First, open your terminal and navigate to the folder where you want to clone the repository. Then run the following command:
```bash
git clone https://github.com/mmc03-ucb/devsoc_recruitment_fe.git
```

This will create a local copy of the repository on your machine.

### 2. Navigate to the Project Folder
Once the repository is cloned, navigate into the project directory:
```bash
cd devsoc_recruitment_fe
```

### 3. Install Dependencies
Before you can run the project, you need to install its dependencies. Run the following command:
```bash
npm install
```
This will install all the required packages listed in the `package.json` file.

### 4. Start the Development Server
After the dependencies are installed, you can start the development server by running:
```bash
npm run dev
```
This will start the Vite development server, typically on `http://localhost:3000`.

### 5. Open the Project in Your Browser
Now that the server is running, open any browser of your choice and go to:
```
http://localhost:3000
```
You should now see the project running in your browser.

---

### Recap of Dependencies:
- **Vite**: For bundling and serving the app.
- **React** and **React DOM**: Required for React-based applications.

To install React or any other missing dependencies, you can run:
```bash
npm install react react-dom
```

These steps should set you up with the project and allow you to view it in any browser.