# Blog Post API
 Certainly! Here's a sample README file for a project involving a blog post API built using Express.js and TypeScript with MongoDB as the database:

# Technologies Used
- **Express.js:** A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
- **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript. It brings static typing to JavaScript, enhancing code quality and developer productivity.
- **MongoDB:** A popular NoSQL database program that uses JSON-like documents with optional schemas. MongoDB provides high performance, high availability, and easy scalability.
- **Mongoose:** An elegant MongoDB object modelling tool designed to work in an asynchronous environment. It provides a straightforward schema-based solution to model application data.
- **JWT (JSON Web Tokens):** A compact, URL-safe means of representing claims to be transferred between two parties. It's commonly used for authentication and information exchange in web development.
- 
# Clone the repository
git clone `https://github.com/tahashabaan/blog-post.git`

# Navigate into the project directory
 cd blog-post

# Install dependencies
npm install

# Set up environment variables:
# Create a .env file in the root directory
# Define the following variables:
 ```PORT=3000
    MONGODB_URI=mongodb://localhost:27017/blog
    JWT_SECRET=yoursecretkey
```

 ## API Endpoints
- **GET /posts**: Retrieve all blog posts.
- **GET /posts/:id**: Retrieve a single blog post by ID.
- **POST /posts**: Create a new blog post.
- **PUT /posts/:id**: Update an existing blog post.
- **DELETE /posts/:id**: Delete a blog post.

  ## API Documentation
API documentation is available at [http://localhost:3000/api-docs](http://localhost:3000/api-docs) when the server is running. It provides detailed information about each endpoint, including request parameters and response formats.








##  How to Use the Project
  after installation and running there is a path called `/api-docs` in this path there are all paths in app can use
 
