export const questions = [
    {
        question: "What is the purpose of the Node.js runtime environment?",
        options: [
            "To enable JavaScript to run on the server-side",
            "To create native desktop applications",
            "To design database schemas",
            "To style web pages"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a core module in Node.js?",
        options: [
            "Express",
            "React",
            "http",
            "MongoDB"
        ],
        answer: 2
    },
    {
        question: "What does the `npm` command stand for?",
        options: [
            "Node.js Package Manager",
            "Network Packet Manager",
            "Native Package Module",
            "Node.js Processing Manager"
        ],
        answer: 0
    },
    {
        question: "Which method is used to create a server in Node.js?",
        options: [
            "initServer()",
            "startServer()",
            "createServer()",
            "newServer()"
        ],
        answer: 2
    },
    {
        question: "What is the default port number for an HTTP server in Node.js?",
        options: [
            "8080",
            "3000",
            "8000",
            "3001"
        ],
        answer: 1
    },
    {
        question: "Which of the following is true about the `fs` module?",
        options: [
            "It is used for handling file system operations",
            "It is used for networking operations",
            "It is used for cryptographic operations",
            "It is used for HTTP requests"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of `package.json` in a Node.js project?",
        options: [
            "To list project dependencies and metadata",
            "To compile JavaScript files",
            "To configure the database",
            "To store user data"
        ],
        answer: 0
    },
    {
        question: "Which method is used to read the contents of a file in Node.js?",
        options: [
            "readFile()",
            "getFile()",
            "openFile()",
            "fetchFile()"
        ],
        answer: 0
    },
    {
        question: "What is Express.js?",
        options: [
            "A database management system",
            "A web application framework for Node.js",
            "A styling framework",
            "A JavaScript library for building user interfaces"
        ],
        answer: 1
    },
    {
        question: "What is middleware in Express.js?",
        options: [
            "Functions executed during the lifecycle of a request to the server",
            "A type of database",
            "A function to manage file uploads",
            "A library for making HTTP requests"
        ],
        answer: 0
    },
    {
        question: "What does the `res.send()` method do in Express.js?",
        options: [
            "Reads a file from the server",
            "Logs data to the console",
            "Redirects to another route",
            "Sends an HTTP response",
        ],
        answer: 3
    },
    {
        question: "Which of the following is a templating engine that can be used with Express.js?",
        options: [
            "React",
            "Vue",
            "EJS",
            "Angular"
        ],
        answer: 2
    },
    {
        question: "What is a RESTful API?",
        options: [
            "An API that uses SOAP protocol",
            "An API that adheres to the principles of REST",
            "An API used only for front-end applications",
            "An API used only for file uploads"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of `mongoose` in a Node.js application?",
        options: [
            "To create HTTP servers",
            "To compile TypeScript",
            "To handle file uploads",
            "To provide a schema-based solution for MongoDB",
        ],
        answer: 3
    },
    {
        question: "What does CRUD stand for in the context of databases?",
        options: [
            "Connect, Route, Update, Delete",
            "Compile, Run, Update, Debug",
            "Create, Read, Update, Delete",
            "Create, Route, Undo, Delete"
        ],
        answer: 2
    },
    {
        question: "Which method is used to add a new document to a MongoDB collection using Mongoose?",
        options: [
            "insert()",
            "save()",
            "add()",
            "append()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of `body-parser` middleware in Express.js?",
        options: [
            "To parse cookies",
            "To handle file uploads",
            "To manage session data",
            "To parse incoming request bodies",
        ],
        answer: 3
    },
    {
        question: "What does the `app.use()` method do in Express.js?",
        options: [
            "Mounts middleware functions",
            "Starts the server",
            "Defines routes",
            "Logs request data"
        ],
        answer: 0
    },
    {
        question: "Which of the following is true about Node.js streams?",
        options: [
            "They are used to handle I/O operations efficiently",
            "They are used for making HTTP requests",
            "They are used for parsing JSON data",
            "They are used for creating routes"
        ],
        answer: 0
    },
    {
        question: "What does the `crypto` module in Node.js provide?",
        options: [
            "File system operations",
            "Cryptographic functionality",
            "Networking operations",
            "Database management"
        ],
        answer: 1
    },
    {
        question: "Which command is used to install a package globally in npm?",
        options: [
            "npm install -g package-name",
            "npm install package-name",
            "npm add package-name",
            "npm global package-name"
        ],
        answer: 0
    },
    {
        question: "What is a callback function in Node.js?",
        options: [
            "A function that calls another function",
            "A function that returns a promise",
            "A function passed as an argument to another function",
            "A function used to parse JSON data"
        ],
        answer: 2
    },
    {
        question: "What does the `path` module in Node.js provide?",
        options: [
            "Utilities for making HTTP requests",
            "Utilities for working with file and directory paths",
            "Utilities for managing databases",
            "Utilities for handling events"
        ],
        answer: 1
    },
    {
        question: "Which method is used to serve static files in an Express.js application?",
        options: [
            "express.static()",
            "express.serve()",
            "express.file()",
            "express.upload()"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the `dotenv` package in Node.js?",
        options: [
            "To handle HTTP requests",
            "To parse JSON data",
            "To manage databases",
            "To load environment variables from a .env file",
        ],
        answer: 3
    },
    {
        question: "What does the `cluster` module in Node.js allow you to do?",
        options: [
            "Handle file uploads",
            "Create child processes that share the same server port",
            "Make HTTP requests",
            "Parse incoming request bodies"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a popular testing framework for Node.js?",
        options: [
            "Django",
            "Flask",
            "Mocha",
            "Laravel"
        ],
        answer: 2
    },
    {
        question: "What does the `req.params` object contain in an Express.js route handler?",
        options: [
            "Query parameters",
            "Request headers",
            "Route parameters",
            "Request body data"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of `cors` middleware in an Express.js application?",
        options: [
            "To handle file uploads",
            "To enable Cross-Origin Resource Sharing",
            "To manage session data",
            "To parse incoming request bodies"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `event` module in Node.js?",
        options: [
            "To handle asynchronous events",
            "To handle HTTP requests",
            "To manage databases",
            "To parse JSON data"
        ],
        answer: 0
    },
    {
        question: "Which method is used to listen for incoming connections on a server in Node.js?",
        options: [
            "server.start()",
            "server.listen()",
            "server.connect()",
            "server.bind()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `querystring` module in Node.js?",
        options: [
            "To make HTTP requests",
            "To manage databases",
            "To handle file uploads",
            "To parse and format URL query strings",
        ],
        answer: 3
    },
    {
        question: "What does the `res.json()` method do in an Express.js route handler?",
        options: [
            "Sends a JSON response",
            "Sends an HTML response",
            "Logs data to the console",
            "Redirects to another route"
        ],
        answer: 0
    },
    {
        question: "What does the `req.body` object contain in an Express.js route handler?",
        options: [
            "Route parameters",
            "Query parameters",
            "Parsed request body data",
            "Request headers"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the `helmet` middleware in an Express.js application?",
        options: [
            "To handle file uploads",
            "To manage session data",
            "To improve security by setting HTTP headers",
            "To parse incoming request bodies"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the `express-validator` middleware in an Express.js application?",
        options: [
            "To validate and sanitize input data",
            "To handle file uploads",
            "To manage session data",
            "To parse incoming request bodies"
        ],
        answer: 0
    },
    {
        question: "Which method is used to handle errors in an Express.js application?",
        options: [
            "app.error()",
            "app.use() with a middleware function that takes four parameters",
            "app.errorHandler()",
            "app.catch()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `bcrypt` package in a Node.js application?",
        options: [
            "To hash passwords securely",
            "To create HTTP servers",
            "To compile TypeScript",
            "To handle file uploads"
        ],
        answer: 0
    },
    {
        question: "Which of the following is true about SQL databases?",
        options: [
            "They are schemaless databases",
            "They are primarily used for JavaScript applications",
            "They use NoSQL for defining and manipulating data",
            "They use structured query language (SQL) for defining and manipulating data",
        ],
        answer: 3
    },
    {
        question: "Which type of join returns all rows from both tables where there is a match in the join condition?",
        options: [
            "LEFT JOIN",
            "INNER JOIN",
            "RIGHT JOIN",
            "FULL OUTER JOIN"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of indexing in databases?",
        options: [
            "To create backup copies of data",
            "To encrypt sensitive data",
            "To improve the speed of data retrieval operations",
            "To manage transactions"
        ],
        answer: 2
    },
    {
        question: "Which statement is used to add new data to a SQL database?",
        options: [
            "UPDATE",
            "CREATE TABLE",
            "SELECT",
            "INSERT INTO",
        ],
        answer: 3
    },
    {
        question: "What is the purpose of a foreign key in a SQL database?",
        options: [
            "To create primary key constraints",
            "To optimize query performance",
            "To establish a link between two tables",
            "To encrypt data"
        ],
        answer: 2
    },
    {
        question: "Which statement is used to delete data from a SQL database?",
        options: [
            "DELETE FROM",
            "DROP",
            "REMOVE",
            "ERASE"
        ],
        answer: 0
    },
    {
        question: "What does `ACID` stand for in the context of database transactions?",
        options: [
            "Authentication, Authorization, Accounting, Auditing",
            "Atomicity, Consistency, Isolation, Durability",
            "Aggregate, Class, Interface, Database",
            "Access Control, Integrity, Deletion, Distribution"
        ],
        answer: 1
    },
    {
        question: "Which type of NoSQL database is optimized for hierarchical key-value pairs?",
        options: [
            "MongoDB",
            "Cassandra",
            "Redis",
            "DynamoDB"
        ],
        answer: 2
    },
    {
        question: "What is the primary advantage of using NoSQL databases?",
        options: [
            "They are faster than SQL databases",
            "They are flexible and can handle unstructured data",
            "They use structured query language (SQL) for defining and manipulating data",
            "They are suitable for complex transactions"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a feature of Redis?",
        options: [
            "Schemaless data structure",
            "Document-based storage",
            "Hierarchical key-value pairs",
            "In-memory data storage",
        ],
        answer: 3
    },
    {
        question: "What does `CAP theorem` state about distributed systems?",
        options: [
            "It is impossible for a distributed data store to simultaneously provide more than two out of three guarantees: Consistency, Availability, and Partition tolerance",
            "It is possible to achieve strong consistency, high availability, and partition tolerance simultaneously in any distributed system",
            "It is possible to achieve eventual consistency, high availability, and partition tolerance simultaneously in any distributed system",
            "It is possible to achieve strong consistency, low availability, and partition tolerance simultaneously in any distributed system"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of Docker in containerization?",
        options: [
            "To package and run applications in isolated containers",
            "To manage SQL databases",
            "To optimize query performance",
            "To create primary key constraints"
        ],
        answer: 0
    },
    {
        question: "Which command is used to build a Docker image from a Dockerfile?",
        options: [
            "docker create",
            "docker build",
            "docker run",
            "docker pull"
        ],
        answer: 1
    },
    {
        question: "What is Kubernetes used for in container orchestration?",
        options: [
            "To create primary key constraints",
            "To optimize query performance",
            "To automate deployment, scaling, and management of containerized applications",
            "To manage SQL databases"
        ],
        answer: 2
    },
    {
        question: "What does `CI/CD` stand for in software development?",
        options: [
            "Code Inspection/Code Deployment",
            "Continuous Integration/Continuous Delivery",
            "Continuous Inspection/Continuous Debugging",
            "Code Integration/Code Distribution"
        ],
        answer: 1
    },
    {
        question: "Which of the following is a popular CI/CD tool?",
        options: [
            "Ansible",
            "Jenkins",
            "Puppet",
            "Chef"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of load balancing in web applications?",
        options: [
            "To handle file uploads",
            "To manage session data",
            "To optimize query performance",
            "To distribute incoming network traffic across multiple servers",
        ],
        answer: 3
    },
    {
        question: "Which HTTP status code indicates a successful response?",
        options: [
            "404",
            "500",
            "302",
            "200",
        ],
        answer: 3
    },
    {
        question: "What does `JWT` stand for in authentication?",
        options: [
            "JavaScript Web Token",
            "JSON Web Token",
            "Java Web Token",
            "JSON Web Ticket"
        ],
        answer: 1
    },
    {
        question: "Which HTTP method is used to retrieve data from a server?",
        options: [
            "POST",
            "GET",
            "PUT",
            "DELETE"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of CORS in web development?",
        options: [
            "To handle file uploads",
            "To manage session data",
            "To allow web servers to specify who can access their resources",
            "To optimize query performance"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of a CDN in web development?",
        options: [
            "To deliver content to users more efficiently",
            "To handle file uploads",
            "To manage session data",
            "To optimize query performance"
        ],
        answer: 0
    },
    {
        question: "Which HTTP status code indicates that a resource has been permanently moved to a new location?",
        options: [
            "404",
            "200",
            "302",
            "301",
        ],
        answer: 3
    },
    {
        question: "What is the purpose of a reverse proxy server?",
        options: [
            "To manage session data",
            "To optimize query performance",
            "To handle incoming client requests and direct them to the appropriate backend server",
            "To handle file uploads"
        ],
        answer: 2
    },
    {
        question: "Which of the following is a popular frontend framework?",
        options: [
            "Node.js",
            "React",
            "Express",
            "Django"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of `npm install` in a Node.js project?",
        options: [
            "To install project dependencies",
            "To create a new Node.js project",
            "To optimize query performance",
            "To manage session data"
        ],
        answer: 0
    },
    {
        question: "Which of the following is true about RESTful APIs?",
        options: [
            "They are schemaless databases",
            "They use NoSQL for defining and manipulating data",
            "They use HTTP methods to perform CRUD operations",
            "They are primarily used for JavaScript applications"
        ],
        answer: 2
    },
    {
        question: "What does `CRUD` stand for in the context of database operations?",
        options: [
            "Create, Read, Update, Delete",
            "Compile, Run, Update, Deploy",
            "Code, Review, Update, Debug",
            "Command, Return, Update, Delete"
        ],
        answer: 0
    },
    {
        question: "Which HTTP method is used to update data on a server?",
        options: [
            "GET",
            "POST",
            "DELETE",
            "PUT",
        ],
        answer: 3
    },
    {
        question: "What is the purpose of `async` and `await` in JavaScript?",
        options: [
            "To handle asynchronous operations more cleanly",
            "To create classes and objects",
            "To optimize query performance",
            "To manage session data"
        ],
        answer: 0
    },
    {
        question: "Which of the following is a JavaScript runtime built on Chrome's V8 JavaScript engine?",
        options: [
            "React",
            "Angular",
            "Node.js",
            "Vue.js"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the `fetch` API in JavaScript?",
        options: [
            "To optimize query performance",
            "To manage session data",
            "To make HTTP requests from the browser",
            "To handle file uploads"
        ],
        answer: 2
    },
    {
        question: "Which statement is true about the `map()` method in JavaScript?",
        options: [
            "It creates a new array populated with the results of calling a provided function on every element in the calling array",
            "It filters elements in an array based on a provided condition",
            "It sorts the elements of an array in place",
            "It reduces the elements of an array to a single value"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the `addEventListener()` method in JavaScript?",
        options: [
            "To optimize query performance",
            "To attach an event handler to a specified element",
            "To handle file uploads",
            "To manage session data"
        ],
        answer: 1
    },
    {
        question: "Which of the following is used to select elements by their CSS selector in JavaScript?",
        options: [
            "querySelector()",
            "getElementById()",
            "getElementsByTagName()",
            "getElementsByClassName()"
        ],
        answer: 0
    },
    {
        question: "What does `DOM` stand for in web development?",
        options: [
            "Document Orientation Model",
            "Dynamic Object Model",
            "Document Object Model",
            "Display Object Model"
        ],
        answer: 2
    },
    {
        question: "Which JavaScript method is used to convert a JSON string to a JavaScript object?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.convert()",
            "JSON.toObject()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `localStorage` object in JavaScript?",
        options: [
            "To optimize query performance",
            "To handle file uploads",
            "To manage session data",
            "To store key/value pairs locally in the browser",
        ],
        answer: 3
    },
    {
        question: "Which of the following is true about arrow functions in JavaScript?",
        options: [
            "They cannot have multiple parameters",
            "They do not have their own `this` value",
            "They cannot return values",
            "They cannot be used as callbacks"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `bind()` method in JavaScript?",
        options: [
            "To optimize query performance",
            "To handle file uploads",
            "To set the `this` value in a function and return a new function",
            "To manage session data"
        ],
        answer: 2
    },
    {
        question: "Which statement is true about closures in JavaScript?",
        options: [
            "They are limited to only arrow functions",
            "They are used to define classes and objects",
            "They allow functions to access variables from an outer function scope even after the outer function has finished executing",
            "They are used to handle asynchronous operations"
        ],
        answer: 2
    },
    {
        question: "What does `AJAX` stand for in web development?",
        options: [
            "Automated JavaScript and XML",
            "Asynchronous JSON and XML",
            "Automated JSON and XML",
            "Asynchronous JavaScript and XML",
        ],
        answer: 3
    },
    {
        question: "Which method is used to send an AJAX request in vanilla JavaScript?",
        options: [
            "fetch()",
            "XMLHttpRequest.open()",
            "getJSON()",
            "axios()"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of `async` and `await` in asynchronous JavaScript operations?",
        options: [
            "To write asynchronous code that looks synchronous and is easier to understand",
            "To optimize query performance",
            "To handle file uploads",
            "To manage session data"
        ],
        answer: 0
    },
    {
        question: "Which statement is true about the `Promise` object in JavaScript?",
        options: [
            "It is used to define classes and objects",
            "It represents the eventual completion or failure of an asynchronous operation and its resulting value",
            "It is used to manage session data",
            "It is used to optimize query performance"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `forEach()` method in JavaScript?",
        options: [
            "To filter elements in an array based on a provided condition",
            "To sort the elements of an array in place",
            "To reduce the elements of an array to a single value",
            "To execute a provided function once for each array element",
        ],
        answer: 3
    },
    {
        question: "Which method is used to remove the last element from an array in JavaScript?",
        options: [
            "push()",
            "shift()",
            "pop()",
            "unshift()"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the `splice()` method in JavaScript?",
        options: [
            "To optimize query performance",
            "To handle file uploads",
            "To manage session data",
            "To add or remove elements from an array",
        ],
        answer: 3
    },
    {
        question: "Which statement is true about `map()` and `forEach()` methods in JavaScript?",
        options: [
            "`map()` returns a new array populated with the results of calling a provided function on every element in the calling array, while `forEach()` executes a provided function once for each array element",
            "`forEach()` returns a new array populated with the results of calling a provided function on every element in the calling array, while `map()` executes a provided function once for each array element",
            "`map()` and `forEach()` are identical in functionality",
            "`map()` and `forEach()` cannot be used to manipulate arrays"
        ],
        answer: 0
    },
    {
        question: "What is the purpose of the `sort()` method in JavaScript?",
        options: [
            "To optimize query performance",
            "To sort the elements of an array in place",
            "To handle file uploads",
            "To manage session data"
        ],
        answer: 1
    },
    {
        question: "Which of the following is true about the `typeof` operator in JavaScript?",
        options: [
            "It converts a string to uppercase",
            "It is used to declare variables",
            "It is used to convert values to integers",
            "It returns the data type of its operand",
        ],
        answer: 3
    },
    {
        question: "What is the purpose of the `isNaN()` function in JavaScript?",
        options: [
            "To optimize query performance",
            "To determine whether a value is NaN (Not-a-Number)",
            "To handle file uploads",
            "To manage session data"
        ],
        answer: 1
    },
    {
        question: "Which statement is true about `let`, `const`, and `var` in JavaScript?",
        options: [
            "`let` and `var` are block-scoped, while `const` is function-scoped",
            "`let`, `const`, and `var` are function-scoped",
            "`let` and `const` are block-scoped, while `var` is function-scoped",
            "`let`, `const`, and `var` are identical in functionality"
        ],
        answer: 2
    },
    {
        question: "What does `ES6` stand for in JavaScript?",
        options: [
            "ECMAScript 2016",
            "ECMAScript 2020",
            "ECMAScript 6",
            "ECMAScript 2018"
        ],
        answer: 2
    },
    {
        question: "Which statement is true about arrow functions in JavaScript?",
        options: [
            "They cannot have multiple parameters",
            "They cannot return values",
            "They do not have their own `this` value",
            "They cannot be used as callbacks"
        ],
        answer: 2
    },
    {
        question: "Which of the following is used to handle errors in asynchronous JavaScript?",
        options: [
            "if...else",
            "try...catch",
            "for...of",
            "switch...case"
        ],
        answer: 1
    },
    {
        question: "What is the purpose of the `toFixed()` method in JavaScript?",
        options: [
            "To format a number using fixed-point notation",
            "To optimize query performance",
            "To handle file uploads",
            "To manage session data"
        ],
        answer: 0
    },
    {
        question: "Which statement is true about `setTimeout()` in JavaScript?",
        options: [
            "It is used to optimize query performance",
            "It is used to handle file uploads",
            "It is used to manage session data",
            "It calls a function or evaluates an expression after a specified number of milliseconds",
        ],
        answer: 3
    },
    {
        question: "What does the `continue` statement do in JavaScript?",
        options: [
            "It ends the execution of a loop",
            "It breaks the execution of a loop",
            "It terminates the current iteration of a loop and continues with the next iteration",
            "It returns a value from a function"
        ],
        answer: 2
    },
    {
        question: "What is the purpose of the `typeof` operator in JavaScript?",
        options: [
            "It converts a string to uppercase",
            "It returns the data type of its operand",
            "It is used to declare variables",
            "It is used to convert values to integers"
        ],
        answer: 1
    },
];
