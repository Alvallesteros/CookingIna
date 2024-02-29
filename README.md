# CookingIna
## Setting Up JS React Project

1. **Install Node.js and npm**: If not already installed, download and install Node.js from [nodejs.org](https://nodejs.org/). This will also install npm.

2. **Clone the Project**: If the project is not already on your machine, clone the existing JS React project from a version control system like Git:
    ```bash
    git clone https://github.com/Alvallesteros/CookingIna
    ```

3. **Navigate to JSReact Project Directory**: Using a terminal or command prompt, navigate to the directory where the project is located:
    ```bash
    cd ./CookingIna/frontend
    ```

4. **Install Dependencies**: Install project dependencies using npm:
    ```bash
    npm install
    ```

5. **Start the Development Server**: Start the development server to run the React app locally:
    ```bash
    npm start
    ```

6. **Access the App**: Once the server is running, open a web browser and navigate to the development server URL, typically `http://localhost:3000/`.

## Setting Up Django REST Project

1. **Create Virtual Environment (Optional)**: It's recommended to use a virtual environment outside the repository to manage project dependencies. Create a virtual environment:
    ```bash
    python -m venv env
    ```

2. **Activate Virtual Environment (Optional)**: Activate the virtual environment:
    - **Windows**:
        ```bash
        env\Scripts\activate
        ```
    - **MacOS / Linux**:
        ```bash
        source env/bin/activate
        ```

3. **Install Dependencies**: Install project dependencies using pip:
    ```bash
    pip install -r requirements.txt
    ```


4. **Navigate to Django REST Project Directory**: Using a terminal or command prompt, navigate to the directory where the project is located:
    ```bash
    cd ./CookingIna/backend
    ```

From here you are already ready to edit the project files.

5. **Run Migrations**: Apply database migrations:
    ```bash
    python manage.py migrate
    ```

6. **Start the Development Server**: Start the development server to run the Django REST API locally:
    ```bash
    python manage.py runserver
    ```

7. **Access the API**: Once the server is running, you can access the API endpoints using a tool like Postman or by navigating to the URLs in your web browser.

Now you're all set to edit CookingIna!



