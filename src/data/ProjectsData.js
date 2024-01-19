import projImgId1 from "../assets/img/project-bookstore.png";
import projImgId2 from "../assets/img/project-frontend-todo.png";
import projImgId3 from "../assets/img/project-backend-todo.png";
import projImgId4 from "../assets/img/project-api-email.png";
import projImgId5 from "../assets/img/project-memory-naruto.png";
import projImgId6 from "../assets/img/project-panda-video.png";
import projImgId7 from "../assets/img/project-workshop.png";
import projImgId8 from "../assets/img/project-springmongo-blog.png";
import projImgId9 from "../assets/img/project-pizza-joint.png";

const ProjectsData = [
  {
    id: 1,
    title: "Bookstore Inventory Control System",
    subtitle:
      "The ultimate stock control solution for bookstores. Manage inventory, track sales, register customers," +
      " and generate reports effortlessly. Discover more now!",
    description:
      "Bookstore Inventory Control System is a revolutionary web application designed to transform stock " +
      "control for bookstores. With this powerful tool, you can seamlessly manage your bookstore's inventory, " +
      "track sales and purchases, register customers, and generate comprehensive reports.\n" +
      "Built with React on the frontend and SpringBoot on the backend, our application delivers a seamless and intuitive " +
      "user experience. The website is hosted on netlify and render.com, ensuring reliable and accessible performance. \n" +
      "Bookstore Inventory Control System offers a range of essential features to enhance your bookstore operations. " +
      " Efficiently control books in stock, ensuring accurate inventory management. Track all sales and purchases, allowing " +
      "for better financial analysis. Register and manage customer information for personalized service. Generate detailed " +
      "reports, including sales by customers, all sales made, and all purchases. \n" +
      "Access the website and GitHub repository below to explore the Bookstore Inventory Control System!",
    p_card1: "SpringBoot",
    p_card2: "React",
    p_card3: "Full-stack App",
    imgUrl: projImgId1,
    linkGit:
      "https://github.com/jonasmachados/bookstore-inventory-control-system",
    linkSite: "https://bookstore-jonas.netlify.app",
  },
  {
    id: 2,
    title: "frontend to do list",
    subtitle:
      "Supercharge your productivity with the Frontend To-Do List! Manage tasks seamlessly and effortlessly. " +
      "Experience the power of modern frontend technologies.",
    description:
      "The Frontend To-Do List project is a dynamic web application designed to revolutionize the way you " +
      "manage your tasks. With its intuitive interface, users can effortlessly add, view, update, and delete tasks, " +
      "ensuring efficient task organization. \n" +
      "This application is built using a powerful combination of HTML, CSS, and JavaScript, harnessing the " +
      "capabilities of modern frontend technologies. Leveraging the versatility of React.js, it delivers a seamless " +
      "user experience. The integration of Axios ensures smooth communication with the backend, while Yarn " +
      "efficiently manages project dependencies. \n" +
      "Developed as a personal learning project, the Frontend To-Do List showcases the proficiency of frontend " +
      "development skills. It serves as a prime example of how to leverage cutting-edge technologies to create a " +
      "visually appealing and fully functional web application. \n" +
      "Technologies utilized in this project include HTML, CSS, JavaScript, React.js, Axios, and Yarn. " +
      "Developed in the widely acclaimed VS Code, the application is hosted on Netlify, ensuring seamless " +
      "deployment and accessibility.",
    p_card1: "React.Js",
    p_card2: "JavaScript",
    p_card3: "Frontend",
    imgUrl: projImgId2,
    linkGit: "https://github.com/jonasmachados/frontend-to-do-list",
    linkSite: "https://lista-de-tarefas-jonas.netlify.app/",
  },
  {
    id: 3,
    title: "backend to do list",
    subtitle:
      "Streamline Task Management: Explore my Java & Spring Boot backend project, empowering users to " +
      "effortlessly create, update, and organize tasks and todo lists. Simplify your workflow today!",
    description:
      "Welcome to my portfolio showcasing my latest project, a backend for a Todo List application " +
      "developed using Java and Spring Boot. This project is a testament to my skills and expertise in creating " +
      "robust and user-friendly software solutions. With a focus on providing comprehensive API functionality, " +
      "I have developed a backend system that enables users to seamlessly manage their tasks and todo lists. \n" +
      "The backend for this Todo List application offers a wide range of functionalities through its APIs. Users " +
      "can easily perform CRUD operations, including creating, reading, updating, and deleting tasks and todo lists. " +
      "This flexibility allows for efficient task management and organization. Whether you are a developer or an " +
      "end-user, you will find this backend solution to be intuitive and highly capable. \n" +
      "One of the key objectives of this project was to create an application that is easy to use and set up. With " +
      "the detailed instructions provided in the README file, developers can quickly get the application up and running. " +
      "The clean and well-structured codebase follows best practices, ensuring that developers can easily understand and " +
      "maintain the project. The use of Java, Spring Boot, Maven, Postman, and H2 Database technologies adds to the " +
      "overall reliability and performance of the application. \n" +
      "In conclusion, this backend project for a Todo List application showcases my proficiency in Java and Spring Boot " +
      "development. Its extensive API functionalities empower users to effectively manage their tasks and todo lists. " +
      "With a user-friendly interface, easy setup process, and clean codebase, this project demonstrates my commitment " +
      "to delivering high-quality software solutions. I am excited to further explore and contribute to the " +
      "field of software development with my skills and expertise.",
    p_card1: "Spring Boot",
    p_card2: "Docker",
    p_card3: "Backend",
    imgUrl: projImgId3,
    linkGit: "https://github.com/jonasmachados/backend-to-do-list",
    linkSite: "https://backend-to-do-list-ry3a.onrender.com",
  },
  {
    id: 4,
    title: "api send email ",
    subtitle:
      "Simplify Email Communication: Experience the power of Spring Boot API for sending emails. " +
      "Seamlessly connect with customers and streamline your messaging process. Explore now!",
    description:
      "Welcome to my project, an API developed using SpringBoot that simplifies email communication. " +
      "This application enables you to seamlessly send messages to clients by leveraging the power of the Spring Boot " +
      "Starter Mail framework. \n" +
      "With this project, you can effortlessly connect with your customers. The frontend of the application includes " +
      "a user-friendly form where you can input the client's email, subject, and message text. By making a POST " +
      "request to consume the API, the backend processes the information and ensures the delivery of the message to \n" +
      "The technology stack utilized in this project includes JDK 15, a development environment for building " +
      "applications using the Java programming language. Spring Boot, a microservice-based Java web framework, " +
      "provides a fully production-ready environment with its prebuilt code and extensive configurability options. \n" +
      "For project management and dependency management, Maven is employed, ensuring smooth development and build " +
      "processes. Postman, an API platform, facilitates the design, testing, and iteration of APIs, ensuring the " +
      "functionality and reliability of the email API. PostgreSQL, a powerful open-source relational database " +
      "management system, provides robust data storage and management capabilities. Heroku, a cloud platform as a " +
      "service (PaaS), enables seamless deployment and hosting of applications. \n" +
      "In conclusion, my email API project utilizing SpringBoot offers a streamlined solution for efficient " +
      "communication with clients. By leveraging the simplicity and reliability of the Spring Boot Starter Mail " +
      "framework, you can enhance your email communication and engage with your audience effectively. The use of " +
      "innovative technologies like JDK 15, Spring Boot, Maven, Postman, PostgreSQL, and Railway ensures a robust " +
      "and reliable solution for your email communication needs. Experience the convenience and effectiveness of this " +
      "project and enhance your customer engagement today.",
    p_card1: "Spring Boot",
    p_card2: "Email Application",
    p_card3: "Backend",
    imgUrl: projImgId4,
    linkGit: "https://api-send-email.up.railway.app",
    linkSite: "https://github.com/jonasmachados/api-send-email",
  },
  {
    id: 5,
    title: "Memory Game Naruto",
    subtitle:
      "Experience the thrill of Naruto Memory Game! Test your memory skills with this captivating front-end " +
      "project. Can you match all the Naruto-themed cards? Play now!",
    description:
      "Welcome to the Naruto Memory Game, a front-end application developed as part of the Bootcamp TQI " +
      "Fullstack Developer - DIO. This project aims to create an engaging memory game inspired by the Naruto anime " +
      "using JavaScript, HTML, and CSS. \n" +
      "Immerse yourself in the world of Naruto with our memory game. The objective is simple: match pairs of " +
      "Naruto-themed cards. As you progress through the game, you'll be greeted by beautifully designed cards " +
      "featuring characters from the beloved anime series. Challenge yourself to complete the game in the shortest " +
      "time possible while testing your memory skills. \n" +
      "This memory game comes packed with features to enhance your gaming experience. A timer is included to track " +
      "your progress, adding a sense of urgency and encouraging you to improve your time with each playthrough. " +
      "Additionally, the application keeps a record of your score by counting the number of moves you take to complete " +
      "the game, allowing you to track your performance and strive for better results. \n" +
      "To bring this project to life, we utilized a set of powerful technologies. JavaScript, a versatile programming " +
      "language, forms the backbone of the game's functionality, enabling interactivity and smooth gameplay. HTML, the " +
      "standard markup language, was employed to structure the game's elements and create an intuitive user interface. " +
      " CSS, the style sheet language, was used to beautify the game and create visually appealing cards and layouts. \n" +
      "The Naruto Memory Game is a captivating front-end project that combines the thrill of a memory game with the " +
      "nostalgic charm of the Naruto anime series. Immerse yourself in the world of Naruto as you challenge your memory, " +
      " improve your skills, and strive for the best score. With its engaging gameplay and stunning card designs, this " +
      "project is a testament to the power of JavaScript, HTML, and CSS in creating interactive and enjoyable web " +
      "applications. Experience the excitement of the Naruto Memory Game and test your memory prowess today!",
    p_card1: "JavaScript",
    p_card2: "HTML + CSS",
    p_card3: "Frontend",
    imgUrl: projImgId5,
    linkGit: "https://github.com/jonasmachados/memory-game-naruto",
    linkSite: "",
  },
  {
    id: 6,
    title: "Panda Challenge Downloader",
    subtitle:
      "A React Native app using Expo (bare workflow) to fetch Panda Video API." +
      " Users can click on a video, view details, and save it locally.",
    description:
      "Panda Challenge Downloader is a React Native application developed " +
      "using the Expo (bare workflow). It consumes the Panda Video API to display a " +
      "list of videos on the home screen. When users click on a video, they are " +
      "directed to the video details screen, where they can watch and save the video" +
      "locally on their device.\n" +
      "<b> Key Features: </b> \n" +
      " <b>1.</b> Video List: Display a list of videos from the Panda Video API on the app's home screen.\n" +
      " <b>2.</b> Video Details: Clicking on a video redirects users to the details screen, providing additional information about the selected video.\n" +
      " <b>3.</b> Video Playback: Offer the ability to watch videos directly within the app.\n" +
      " <b>4.</b> Local Download: Allow users to save videos locally on their devices for offline viewing.\n" +
      "<b>Technologies Used:</b> \n" +
      " - Expo (bare workflow)\n" +
      " - React Native\n" +
      "- Node.js\n" +
      "- Panda Video (video hosting) Adaptive Streaming\n" +
      "<b>Adaptive Streaming Experience:</b> \n" +
      "To provide an adaptive streaming experience, we utilized the expo-av Video " +
      "component on the VideoScreen. This leverages native support for adaptive streaming.\n" +
      " <b>Smart Cache:</b> \n" +
      " The smart cache functionality is integrated into the downloadVideo method on" +
      " the VideoScreen. Videos are downloaded locally and saved in the device's media" +
      " library, enabling offline access and conserving bandwidth for future playbacks.\n" +
      " <b> Storage Limits:</b> \n" +
      " We implemented a strategy to handle storage limits on the device by requesting " +
      "permission to access the media library. We use the expo-media-library to save " +
      "downloaded videos. Additionally, users can manage and delete videos to free up space.\n",
    p_card1: "React Native",
    p_card2: "Expo (bare workflow)",
    p_card3: "FrontEnd",
    imgUrl: projImgId6,
    linkGit: "https://github.com/jonasmachados/panda-challenge-downloader",
    linkSite: "",
  },
  {
    id: 7,
    title: "SmartOrder System",
    subtitle:
      "Streamline order management with the SmartOrder System. Place orders, integrate products, " +
      "and ensure seamless fulfillment. Discover a robust backend solution for efficient control. Click now!",
    description:
      "The SmartOrder System is a backend application developed as part of the Java COMPLETO " +
      "Programação Orientada a Objetos course by Dr. Nelio Alves on Udemy. It is a comprehensive order management " +
      "system that allows clients to place orders and efficiently process them by integrating the requested products. \n" +
      "The application's key feature is its order management capability, providing clients with the ability to create " +
      "and manage orders seamlessly. This ensures a smooth workflow and enables effective tracking of the entire order lifecycle. " +
      "The project leverages the power of Spring Boot and JPA/Hibernate to build a robust backend infrastructure. " +
      "This combination of technologies ensures reliability, scalability, and efficient data management. \n" +
      "Database support is an integral part of the project, with H2 Database used for testing and PostgreSQL for " +
      "production. This flexible approach allows for easy switching between databases and supports the application's " +
      "growth and scalability. \n" +
      "By utilizing industry-standard technologies and adhering to best practices, the SmartOrder System aims " +
      "to deliver a robust and efficient order management system that meets the needs of businesses in a reliable and " +
      "scalable manner.",
    p_card1: "Spring Boot",
    p_card2: "PostgreSQL",
    p_card3: "Backend",
    imgUrl: projImgId7,
    linkGit: "https://github.com/jonasmachados/smart-order-system",
    linkSite: "",
  },
  {
    id: 8,
    title: "SpringMongo Blog Engine",
    subtitle:
      "Powerful Backend for Your Next Project - SpringMongo Blog Engine: Simplify Your Development " +
      "and Amplify Your Results!",
    description:
      "SpringMongo Blog Engine is a project developed using Spring Boot and MongoDB. It aims to provide a " +
      "user - friendly platform for creating and managing blog posts with the ability to add comments.The core " +
      "component of the project is the Post object, representing user- generated posts with the flexibility to " +
      "include multiple comments. \n" +
      "With its robust implementation, the project covers all essential CRUD operations, enabling users to " +
      "effortlessly manage users, posts, and comments.Users can register, create new posts, add comments to " +
      "existing posts, and perform other vital actions.The project leverages industry - standard technologies " +
      "such as JDK 15, Spring Boot, Maven, Postman, MongoDB Community Server, and MongoDB Compass. \n" +
      "By combining the power of Spring Boot and MongoDB, SpringMongo Blog Engine empowers users to unleash their " +
      "creativity, offering a seamless and efficient platform for expressing ideas and engaging with an " +
      "interactive community.Experience the convenience of managing your blog content with ease, backed by " +
      "reliable and scalable technologies.Join us on this exciting journey of innovative blogging with " +
      "SpringMongo Blog Engine. ",
    p_card1: "Spring Boot",
    p_card2: "Mongo DB",
    p_card3: "Backend",
    imgUrl: projImgId8,
    linkGit: "https://github.com/jonasmachados/spring-mongo-blog-engine",
    linkSite: "",
  },
  {
    id: 9,
    title: "Pizza Joint",
    subtitle:
      "Discover the power of captivating animations with my Pizza Joint project. Immerse yourself in a " +
      "world of seamless motion and elevate your web experience.",
    description:
      "Pizza Joint Portfolio Project is a simple delivery website that showcases my skills in React and " +
      "Framer Motion. As a learning exercise, I explored the capabilities of these technologies to add captivating " +
      "animations and enhance the user experience. The project utilizes React, HTML, CSS, and react-framer-motion to " +
      "create a user-friendly interface for browsing and ordering products. \n" +
      "The website offers a seamless ordering process where customers can easily navigate through categories, " +
      "view product details, and add items to their cart. The cart dynamically updates, displaying the total " +
      "price and selected items, allowing customers to review and modify their order effortlessly. Moreover, " +
      "the website incorporates smooth and visually appealing animations using the react-framer-motion library, " +
      "bringing the website to life and creating an engaging experience. \n" +
      "In addition to its functionality, the Pizza Joint Portfolio Project also prioritizes responsiveness." +
      "It is designed to adapt to different devices, ensuring a seamless experience across desktops, tablets, " +
      "and mobile phones.The layout adjusts automatically to optimize the user interface on different screen " +
      "sizes, providing an optimized and visually pleasing experience for all users. \n" +
      "This project demonstrates my ability to create immersive and interactive web experiences using React and " +
      "Framer Motion.It highlights my understanding of animation principles and how they can be applied to " +
      "enhance user engagement.Explore the project to witness the power of animations and experience a seamless " +
      "ordering process.",
    p_card1: "React",
    p_card2: "CSS animations",
    p_card3: "Framer Motion",
    imgUrl: projImgId9,
    linkGit: "",
    linkSite: "https://github.com/jonasmachados/framer-motion",
  },
];

export default ProjectsData;
