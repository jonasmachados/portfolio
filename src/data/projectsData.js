import projImgId1 from "../assets/img/project-bookstore.png";
import projImgId2 from "../assets/img/project-frontend-todo.png";
import projImgId3 from "../assets/img/project-spring.png";
import projImgId4 from "../assets/img/project-api-email.png";
import projImgId5 from "../assets/img/project-memory-naruto.png";
import projImgId6 from "../assets/img/project-app-web-oficina.png";
import projImgId7 from "../assets/img/project-spring-postgre.png";
import projImgId8 from "../assets/img/project-spring-mongodb.png";
import projImgId9 from "../assets/img/project-dsmeta.png";
import projImgId10 from "../assets/img/project-dsmovie.png";
import projImgId11 from "../assets/img/project-frame-motion.png";
import projImgId12 from "../assets/img/project-pokedex.png";
import projImgId13 from "../assets/img/project-crud-employee.png";
import projImgId14 from "../assets/img/project-workshop-javafx.png";
import projImgId15 from "../assets/img/project-app-bookStore thymeleaf.png";
import projImgId16 from "../assets/img/project-spring-postgre.png";
import projImgId17 from "../assets/img/project-spring.png";

const projectsData = [
    {
        id: 1,
        title: "Bookstore Inventory Control System",
        subtitle: "The ultimate stock control solution for bookstores. Manage inventory, track sales, register customers," +
            " and generate reports effortlessly. Discover more now!",
        description: "Bookstore Inventory Control System is a revolutionary web application designed to transform stock " +
            "control for bookstores. With this powerful tool, you can seamlessly manage your bookstore's inventory, " +
            "track sales and purchases, register customers, and generate comprehensive reports.\n"
            + "Built with React on the frontend and SpringBoot on the backend, our application delivers a seamless and intuitive " +
            "user experience. The website is hosted on netlify and render.com, ensuring reliable and accessible performance. \n"
            + "Bookstore Inventory Control System offers a range of essential features to enhance your bookstore operations. " +
            " Efficiently control books in stock, ensuring accurate inventory management. Track all sales and purchases, allowing " +
            "for better financial analysis. Register and manage customer information for personalized service. Generate detailed " +
            "reports, including sales by customers, all sales made, and all purchases. \n"
            + "Access the website and GitHub repository below to explore the Bookstore Inventory Control System!",
        p_card1: "SpringBoot",
        p_card2: "React",
        p_card3: "Full-stack App",
        imgUrl: projImgId1,
        linkGit: "https://github.com/jonasmachados/bookstore-inventory-control-system",
        linkSite: "https://bookstore-jonas.netlify.app",
    },
    {
        id: 2,
        title: "frontend to do list",
        subtitle: "Supercharge your productivity with the Frontend To-Do List! Manage tasks seamlessly and effortlessly. "
            + "Experience the power of modern frontend technologies.",
        description: "The Frontend To-Do List project is a dynamic web application designed to revolutionize the way you "
            + "manage your tasks. With its intuitive interface, users can effortlessly add, view, update, and delete tasks, "
            + "ensuring efficient task organization. \n"
            + "This application is built using a powerful combination of HTML, CSS, and JavaScript, harnessing the "
            + "capabilities of modern frontend technologies. Leveraging the versatility of React.js, it delivers a seamless "
            + "user experience. The integration of Axios ensures smooth communication with the backend, while Yarn "
            + "efficiently manages project dependencies. \n"
            + "Developed as a personal learning project, the Frontend To-Do List showcases the proficiency of frontend "
            + "development skills. It serves as a prime example of how to leverage cutting-edge technologies to create a "
            + "visually appealing and fully functional web application. \n"
            + "Technologies utilized in this project include HTML, CSS, JavaScript, React.js, Axios, and Yarn. "
            + "Developed in the widely acclaimed VS Code, the application is hosted on Netlify, ensuring seamless "
            + "deployment and accessibility.",
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
        subtitle: "Streamline Task Management: Explore my Java & Spring Boot backend project, empowering users to "
            + "effortlessly create, update, and organize tasks and todo lists. Simplify your workflow today!",
        description: "Welcome to my portfolio showcasing my latest project, a backend for a Todo List application "
            + "developed using Java and Spring Boot. This project is a testament to my skills and expertise in creating "
            + "robust and user-friendly software solutions. With a focus on providing comprehensive API functionality, "
            + "I have developed a backend system that enables users to seamlessly manage their tasks and todo lists. \n"
            + "The backend for this Todo List application offers a wide range of functionalities through its APIs. Users "
            + "can easily perform CRUD operations, including creating, reading, updating, and deleting tasks and todo lists. "
            + "This flexibility allows for efficient task management and organization. Whether you are a developer or an "
            + "end-user, you will find this backend solution to be intuitive and highly capable. \n"
            + "One of the key objectives of this project was to create an application that is easy to use and set up. With "
            + "the detailed instructions provided in the README file, developers can quickly get the application up and running. "
            + "The clean and well-structured codebase follows best practices, ensuring that developers can easily understand and "
            + "maintain the project. The use of Java, Spring Boot, Maven, Postman, and H2 Database technologies adds to the "
            + "overall reliability and performance of the application. \n"
            + "In conclusion, this backend project for a Todo List application showcases my proficiency in Java and Spring Boot "
            + "development. Its extensive API functionalities empower users to effectively manage their tasks and todo lists. "
            + "With a user-friendly interface, easy setup process, and clean codebase, this project demonstrates my commitment "
            + "to delivering high-quality software solutions. I am excited to further explore and contribute to the "
            + "field of software development with my skills and expertise.",
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
        subtitle: "Simplify Email Communication: Experience the power of Spring Boot API for sending emails. "
            + "Seamlessly connect with customers and streamline your messaging process. Explore now!",
        description: "Welcome to my project, an API developed using SpringBoot that simplifies email communication. "
            + "This application enables you to seamlessly send messages to clients by leveraging the power of the Spring Boot "
            + "Starter Mail framework. \n"
            + "With this project, you can effortlessly connect with your customers. The frontend of the application includes "
            + "a user-friendly form where you can input the client's email, subject, and message text. By making a POST "
            + "request to consume the API, the backend processes the information and ensures the delivery of the message to \n"
            + "The technology stack utilized in this project includes JDK 15, a development environment for building "
            + "applications using the Java programming language. Spring Boot, a microservice-based Java web framework, "
            + "provides a fully production-ready environment with its prebuilt code and extensive configurability options. \n"
            + "For project management and dependency management, Maven is employed, ensuring smooth development and build "
            + "processes. Postman, an API platform, facilitates the design, testing, and iteration of APIs, ensuring the "
            + "functionality and reliability of the email API. PostgreSQL, a powerful open-source relational database "
            + "management system, provides robust data storage and management capabilities. Heroku, a cloud platform as a "
            + "service (PaaS), enables seamless deployment and hosting of applications. \n"
            + "In conclusion, my email API project utilizing SpringBoot offers a streamlined solution for efficient "
            + "communication with clients. By leveraging the simplicity and reliability of the Spring Boot Starter Mail "
            + "framework, you can enhance your email communication and engage with your audience effectively. The use of "
            + "innovative technologies like JDK 15, Spring Boot, Maven, Postman, PostgreSQL, and Railway ensures a robust "
            + "and reliable solution for your email communication needs. Experience the convenience and effectiveness of this "
            + "project and enhance your customer engagement today.",
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
        subtitle: "Experience the thrill of Naruto Memory Game! Test your memory skills with this captivating front-end "
            + "project. Can you match all the Naruto-themed cards? Play now!",
        description: "Welcome to the Naruto Memory Game, a front-end application developed as part of the Bootcamp TQI "
            + "Fullstack Developer - DIO. This project aims to create an engaging memory game inspired by the Naruto anime "
            + "using JavaScript, HTML, and CSS. \n"
            + "Immerse yourself in the world of Naruto with our memory game. The objective is simple: match pairs of "
            + "Naruto-themed cards. As you progress through the game, you'll be greeted by beautifully designed cards "
            + "featuring characters from the beloved anime series. Challenge yourself to complete the game in the shortest "
            + "time possible while testing your memory skills. \n"
            + "This memory game comes packed with features to enhance your gaming experience. A timer is included to track "
            + "your progress, adding a sense of urgency and encouraging you to improve your time with each playthrough. "
            + "Additionally, the application keeps a record of your score by counting the number of moves you take to complete "
            + "the game, allowing you to track your performance and strive for better results. \n"
            + "To bring this project to life, we utilized a set of powerful technologies. JavaScript, a versatile programming "
            + "language, forms the backbone of the game's functionality, enabling interactivity and smooth gameplay. HTML, the "
            + "standard markup language, was employed to structure the game's elements and create an intuitive user interface. "
            + " CSS, the style sheet language, was used to beautify the game and create visually appealing cards and layouts. \n"
            + "The Naruto Memory Game is a captivating front-end project that combines the thrill of a memory game with the "
            + "nostalgic charm of the Naruto anime series. Immerse yourself in the world of Naruto as you challenge your memory, "
            + " improve your skills, and strive for the best score. With its engaging gameplay and stunning card designs, this "
            + "project is a testament to the power of JavaScript, HTML, and CSS in creating interactive and enjoyable web "
            + "applications. Experience the excitement of the Naruto Memory Game and test your memory prowess today!",
        p_card1: "JavaScript",
        p_card2: "HTML + CSS",
        p_card3: "Frontend",
        imgUrl: projImgId5,
        linkGit: "https://github.com/jonasmachados/memory-game-naruto",
        linkSite: "",
    },
    {
        id: 6,
        title: "App Web Oficina Thymeleaf",
        subtitle: "Manage your car's maintenance with ease! This Spring Boot-powered app lets you track services like "
            + "oil changes, tire rotations, and more. Take control of your vehicle's upkeep today.",
        description: "The App Web Oficina Thymeleaf is a project developed using Spring Boot for the back-end and "
            + "PostgreSQL as the database. It is an application designed to help car owners keep track of their maintenance "
            + "tasks. With this app, you can easily log and manage services such as oil changes, battery replacements, air "
            + "and oil filter changes, tire rotations, alignment, and balancing, among others. \n"
            + "By using the VApp Web Oficina Thymeleaf, car owners can have full control over their vehicle's maintenance "
            + "history. They can easily view all the services that have been performed on their car and keep track of their "
            + "car's overall condition. \n"
            + "The main function of this app is to provide a centralized platform for storing and retrieving information about "
            + "vehicle maintenance. It allows users to input details about each service and keep a comprehensive record of their "
            + "car's maintenance activities. \n"
            + "Technologies used in this project include JDK 15, NetBeans IDE, Spring Boot, PostgreSQL, Maven, Postman, and "
            + "H2 Database Engine for testing purposes. On the front-end, Thymeleaf, HTML, and CSS were used to create a "
            + "user-friendly interface for seamless interaction with the app. \n"
            + "Overall, the App Web Oficina Thymeleaf offers car owners a convenient and efficient solution for managing their "
            + "vehicle's maintenance tasks. Stay on top of your car's maintenance needs and ensure its optimal performance with "
            + "this reliable and user-friendly app.",
        p_card1: "SpringBoot",
        p_card2: "Thymeleaf",
        p_card3: "Full-stack App",
        imgUrl: projImgId6,
        linkGit: "https://github.com/jonasmachados/AppWebOficina-Thymeleaf",
        linkSite: "",
    },
    {
        id: 7,
        title: "Workshop PostgreSQL",
        subtitle: "Streamline order management with the Workshop-PostgreSQL project. Place orders, integrate products, "
            + "and ensure seamless fulfillment. Discover a robust backend solution for efficient control. Click now!",
        description: "The Workshop-PostgreSQL project is a backend application developed as part of the Java COMPLETO "
            + "Programação Orientada a Objetos course by Dr. Nelio Alves on Udemy. It is a comprehensive order management "
            + "system that allows clients to place orders and efficiently process them by integrating the requested products. \n"
            + "The application's key feature is its order management capability, providing clients with the ability to create "
            + "and manage orders seamlessly. This ensures a smooth workflow and enables effective tracking of the entire order lifecycle. "
            + "The project leverages the power of Spring Boot and JPA/Hibernate to build a robust backend infrastructure. "
            + "This combination of technologies ensures reliability, scalability, and efficient data management. \n"
            + "Database support is an integral part of the project, with H2 Database used for testing and PostgreSQL for "
            + "production. This flexible approach allows for easy switching between databases and supports the application's "
            + "growth and scalability. \n"
            + "By utilizing industry-standard technologies and adhering to best practices, the Workshop-PostgreSQL project aims "
            + "to deliver a robust and efficient order management system that meets the needs of businesses in a reliable and "
            + "scalable manner.",
        p_card1: "Spring Boot",
        p_card2: "PostgreSQL",
        p_card3: "Backend",
        imgUrl: projImgId7,
        linkGit: "https://github.com/jonasmachados/workshop-postgreSQL",
        linkSite: "",

    },
    {
        id: 8,
        title: "SpringMongo Blog Engine",
        subtitle: "Powerful Backend for Your Next Project - SpringMongo Blog Engine: Simplify Your Development "
            + "and Amplify Your Results!",
        description: "SpringMongo Blog Engine is a project developed using Spring Boot and MongoDB. It aims to provide a "
            + "user - friendly platform for creating and managing blog posts with the ability to add comments.The core "
            + "component of the project is the Post object, representing user- generated posts with the flexibility to "
            + "include multiple comments. \n"
            + "With its robust implementation, the project covers all essential CRUD operations, enabling users to "
            + "effortlessly manage users, posts, and comments.Users can register, create new posts, add comments to "
            + "existing posts, and perform other vital actions.The project leverages industry - standard technologies "
            + "such as JDK 15, Spring Boot, Maven, Postman, MongoDB Community Server, and MongoDB Compass. \n"
            + "By combining the power of Spring Boot and MongoDB, SpringMongo Blog Engine empowers users to unleash their "
            + "creativity, offering a seamless and efficient platform for expressing ideas and engaging with an "
            + "interactive community.Experience the convenience of managing your blog content with ease, backed by "
            + "reliable and scalable technologies.Join us on this exciting journey of innovative blogging with "
            + "SpringMongo Blog Engine. ",
        p_card1: "Spring Boot",
        p_card2: "Mongo DB",
        p_card3: "Full-stack App",
        imgUrl: projImgId8,
        linkGit: "https://github.com/jonasmachados/spring-mongo-blog-engine",
        linkSite: "",

    },
    {
        id: 9,
        title: "DS Meta",
        subtitle: "Boost your sales with real-time SMS notifications! Generate detailed sales reports and stay "
            + "informed about every transaction. Click to explore the project!",
        description: "This full-stack application combines the power of Spring Boot and ReactJS to deliver a dynamic and "
            + "responsive system.The back- end is built with Spring Boot, utilizing JDK 15 and Maven for efficient "
            + "development and management.The H2 Database Engine ensures seamless data storage, while Postman aids in API "
            + "testing. \n"
            + "The project's main objective is to generate detailed sales reports, including essential information such "
            + "as the sale's ID, date, seller's name, and total value. Additionally, users can take advantage of the "
            + "Notify button to send SMS notifications with real-time sale updates to registered mobile phones. \n"
            + "On the front - end, the application leverages TypeScript, HTML, CSS, and JavaScript to create an engaging "
            + "user interface.The development environment of choice is VS Code, enabling a streamlined workflow."
            + "The project is deployed using Netlify for the front - end and Heroku for the back - end. \n"
            + "Experience the seamless integration of Spring Boot and ReactJS in this full - stack project.Discover how "
            + "these technologies work together to build scalable, feature - rich applications with an intuitive user "
            + "experience.",
        p_card1: "SpringBoot",
        p_card2: "TypeScript",
        p_card3: "Full-stack App",
        imgUrl: projImgId9,
        linkGit: "https://github.com/jonasmachados/dsmeta",
        linkSite: "https://ds-sale.netlify.app",
    },
    {
        id: 10,
        title: "DS Movie",
        subtitle: "Experience the magic of movies with DSMovie! Dive into a captivating film catalog and unleash your "
            + "inner critic. Click here to explore this exciting full-stack project.",
        description: "DSMovie is an exciting full-stack project that brings the world of films to your fingertips. "
            + "Developed using Spring Boot and TypeScript, it offers a captivating film catalog where users can browse "
            + "and evaluate movies. Powered by PostgreSQL, the project ensures efficient data storage and retrieval. \n"
            + "With DSMovie, you can explore a vast collection of films, complete with titles, images, and ratings."
            + "Engage in the cinematic experience by providing your own evaluations with just your email and rating.The "
            + "user- friendly interface, crafted with TypeScript, HTML, CSS, and JavaScript, promises an intuitive and "
            + "visually appealing journey. \n"
            + "Technologies Used: \n"
            + "Back - end: JDK 15, Maven, Postman, PostgreSQL, Heroku \n"
            + "Front - end: TypeScript, HTML, CSS, JavaScript, Yarn, Node, ReactJS, Netlify \n"
            + "Unleash your love for movies and dive into the DSMovie project.Experience the magic of cinema in this "
            + "seamless and immersive full - stack application.",
        p_card1: "SpringBoot",
        p_card2: "TypeScript",
        p_card3: "Full-stack App",
        imgUrl: projImgId10,
        linkGit: "https://github.com/jonasmachados/dsmovie",
        linkSite: "https://jonasms-dsmovie.netlify.app",
    },
    {
        id: 11,
        title: "Framer Motion",
        subtitle: "Discover the power of captivating animations with my Framer Motion project. Immerse yourself in a "
            + "world of seamless motion and elevate your web experience.",
        description: "Framer Motion Portfolio Project is a simple delivery website that showcases my skills in React and "
            + "Framer Motion. As a learning exercise, I explored the capabilities of these technologies to add captivating "
            + "animations and enhance the user experience. The project utilizes React, HTML, CSS, and react-framer-motion to "
            + "create a user-friendly interface for browsing and ordering products. \n"
            + "The website offers a seamless ordering process where customers can easily navigate through categories, "
            + "view product details, and add items to their cart. The cart dynamically updates, displaying the total "
            + "price and selected items, allowing customers to review and modify their order effortlessly. Moreover, "
            + "the website incorporates smooth and visually appealing animations using the react-framer-motion library, "
            + "bringing the website to life and creating an engaging experience. \n"
            + "In addition to its functionality, the Framer Motion Portfolio Project also prioritizes responsiveness."
            + "It is designed to adapt to different devices, ensuring a seamless experience across desktops, tablets, "
            + "and mobile phones.The layout adjusts automatically to optimize the user interface on different screen "
            + "sizes, providing an optimized and visually pleasing experience for all users. \n"
            + "This project demonstrates my ability to create immersive and interactive web experiences using React and "
            + "Framer Motion.It highlights my understanding of animation principles and how they can be applied to "
            + "enhance user engagement.Explore the project to witness the power of animations and experience a seamless "
            + "ordering process.",
        p_card1: "React",
        p_card2: "CSS animations",
        p_card3: "Framer Motion",
        imgUrl: projImgId11,
        linkGit: "",
        linkSite: "https://github.com/jonasmachados/framer-motion",
    },
    {
        id: 12,
        title: "Pokedex",
        subtitle: "Discover and Explore Pokémon with the Pokédex App! Dive into a world of 1st generation Pokémon and "
            + "uncover their abilities, types, and stats. Start your journey now!",
        description: "The Pokédex App is a captivating web application that immerses users in the exciting world of "
            + "Pokémon. Powered by the Pokémon API (https://pokeapi.co/api), it offers a comprehensive collection of 1st "
            + "generation Pokémon for exploration. \n"
            + "With its user-friendly interface, the app provides detailed information about each Pokémon, including their "
            + "abilities, types, and stats. Users can effortlessly navigate the Pokémon catalog, discovering new Pokémon "
            + "based on their preferences and interests. \n"
            + "Designed for Pokémon enthusiasts, the Pokédex App offers an immersive experience, allowing users to delve "
            + "into the captivating universe of their favorite creatures. It's the ultimate resource for exploring, learning, "
            + "and expanding knowledge about Pokémon. \n"
            + "The project utilizes a range of technologies, including HTML, CSS, JavaScript, and Node.js. By leveraging "
            + "these powerful tools, the app delivers a seamless and enjoyable user experience. \n"
            + "To dive into the enchanting world of Pokémon and explore the complete catalog, visit the Pokédex App GitHub "
            + "repository. Start your adventure and unleash the magic of Pokémon with this captivating web application.",
        p_card1: "JavaScript",
        p_card2: "Node.js",
        p_card3: "Frontend",
        imgUrl: projImgId12,
        linkGit: "https://github.com/jonasmachados/Pokedex",
        linkSite: "",
    },
    {
        id: 13,
        title: "Crud Employee",
        subtitle: "Discover a simple yet effective manage employee data with this full-stack project combining "
            + "Spring Boot and React.js. Explore it now!",
        description: "This full-stack project leverages the power of Spring Boot for the back-end and React.js for "
            + "the front-end, with MySQL as the underlying database. The CRUD Employee app offers a seamless and "
            + "intuitive user interface for efficiently managing employee data. \n"
            + "The application features a user - friendly interface that allows users to easily navigate through "
            + "employee records.The homepage provides a comprehensive list of all employees, enabling quick access to "
            + "individual profiles and relevant information.Users can effortlessly create, update, and delete employee "
            + "records with just a few clicks. \n"
            + "The CRUD Employee app streamlines the management of employee data.With the ability to create new employee "
            + "profiles, update existing information, and delete unnecessary records, users can maintain accurate and "
            + "up - to - date employee data effortlessly.The application ensures data integrity and offers a smooth "
            + "experience for managing employee information. \n"
            + "The integration of Spring Boot and React.js provides a powerful and efficient foundation for the project."
            + "Leveraging the capabilities of these technologies, the CRUD Employee app delivers a seamless experience "
            + "with real - time data updates, smooth navigation, and responsive design.The MySQL database ensures secure "
            + "data storage and efficient retrieval for optimal performance. \n"
            + "In conclusion, this full - stack project showcases the fusion of Spring Boot, React.js, and MySQL to "
            + "create a user - friendly and efficient CRUD Employee app.Its intuitive interface, streamlined data "
            + "management, and seamless integration make it a valuable asset for businesses seeking an effective solution "
            + "for managing employee data",
        p_card1: "React.Js",
        p_card2: "Spring Boot",
        p_card3: "Full-stack App",
        imgUrl: projImgId13,
        linkGit: "https://github.com/jonasmachados/crud-employee",
        linkSite: "",
    },
    {
        id: 14,
        title: "Workshop Javafx",
        subtitle: "Streamline workshop management with this JavaFX desktop application. Effortlessly manage sellers and "
            + "departments with intuitive record management features. Click here to explore the system!",
        description: "Introducing a powerful JavaFX desktop application that revolutionizes workshop management. Designed "
            + "with efficiency in mind, this application enables seamless creation, retrieval, updating, and deletion of "
            + "records for both sellers and departments. With its user-friendly interface, navigating and interacting with "
            + "the application is a breeze, ensuring a smooth workflow. The integration with MySQL database using JDBC "
            + "guarantees reliable and efficient data storage and retrieval, providing a robust foundation for your workshop "
            + "management needs. \n"
            + "Discover the extensive features of this application, which include comprehensive CRUD operations for "
            + "managing sellers and departments. Whether you need to add new records, retrieve specific information, "
            + "update existing data, or remove unnecessary entries, this application simplifies the entire process, "
            + "saving you valuable time and effort. The intuitive user interface ensures that even users with minimal "
            + "technical expertise can easily navigate and perform these operations effortlessly. \n"
            + "One of the key strengths of this workshop management system is its robust database integration. By "
            + "leveraging MySQL and utilizing JDBC for seamless connectivity, the application ensures reliable and "
            + "efficient data storage and retrieval. This allows you to securely store all your workshop-related "
            + "information, ensuring it is readily accessible whenever you need it. Whether you're managing a small "
            + "workshop or a large-scale operation, this application provides the stability and reliability you need "
            + "to keep your data organized and accessible at all times. \n"
            + "Experience the convenience and efficiency of this JavaFX desktop application in simplifying your workshop "
            + "management tasks. From creating new seller and department records to updating existing information and "
            + "performing seamless data retrieval, this application offers a comprehensive suite of features tailored "
            + "to meet your needs. Say goodbye to manual record-keeping and embrace the power of technology to streamline "
            + "your workshop management processes.",
        p_card1: "Java",
        p_card2: "Javafx",
        p_card3: "Full-stack App",
        imgUrl: projImgId14,
        linkGit: "https://github.com/jonasmachados/workshop-javafx-jdbc",
        linkSite: "",
    },
    {
        id: 15,
        title: "App BookStore Thymeleaf",
        subtitle: "Discover the magic of AppBookStore! Experience seamless book management with the simplicity of "
            + "Spring Boot and Thymeleaf. Click now to explore!",
        description: "AppBookStore-Spring-Thymeleaf is a powerful web application developed with Spring Boot and "
            + "Thymeleaf. It offers a comprehensive CRUD functionality, enabling users to effortlessly manage books and "
            + "categories. The domain model consists of interconnected entities, ensuring efficient organization and "
            + "categorization of books. \n"
            + "Utilizing cutting-edge technologies such as JDK 11, NetBeans, and Maven, this project delivers a seamless "
            + "development experience. The integration with H2 Database Engine for development and PostgreSQL for production "
            + "guarantees robust data storage. \n"
            + "With its user-friendly interface and elegant HTML and CSS styling, AppBookStore provides a visually appealing "
            + "and intuitive browsing experience. Users can effortlessly create, retrieve, update, and delete books, as "
            + "well as manage categories. \n"
            + "Embark on a journey with AppBookStore-Spring-Thymeleaf, where you can explore the world of books with ease and "
            + "efficiency. Experience the perfect blend of functionality and aesthetics.",
        p_card1: "Spring Boot",
        p_card2: "Thymeleaf",
        p_card3: "Full-stack App",
        imgUrl: projImgId15,
        linkGit: "https://github.com/jonasmachados/AppBookStore-Spring-Thymeleaf",
        linkSite: "",
    },
    {
        id: 16,
        title: "Gym Management System",
        subtitle: "Power up your gym management with our efficient backend solution. Streamline customer registration, "
            + "memberships, and physical evaluations. Discover the Gym Management System now",
        description: "The Gym Management System is a powerful Spring Boot application designed to streamline gym "
            + "operations and enhance customer management.This comprehensive backend solution allows you to efficiently"
            + "handle customer information, memberships, and physical evaluations, ensuring a seamless gym experience. \n"
            + "Using Java 11, Maven, and Spring frameworks, the application leverages cutting- edge technologies such as "
            + "Spring Web and Spring Data JPA.This ensures robust functionality and seamless integration with other "
            + "systems.The PostgreSQL Driver provides secure and efficient data storage, while Hibernate Validator ensures data "
            + "integrity and validation. \n"
            + "The Gym Management System backend offers key features to optimize your gym's operations. It enables you to "
            + "effortlessly register and manage customer information, including personal details and membership status. "
            + "You can easily assign and update membership details for each customer, tailoring them to their specific needs. "
            + "Additionally, the system allows you to record and track comprehensive physical evaluations, including "
            + "measurements and fitness goals. \n"
            + "By implementing the Gym Management System backend, you can streamline administrative tasks, improve "
            + "customer satisfaction, and enhance overall efficiency.It provides you with the necessary tools to "
            + "effectively manage customer information, memberships, and physical evaluations, resulting in a smooth "
            + "and successful gym operation.",
        p_card1: "Spring Boot",
        p_card2: "PostgreSQL",
        p_card3: "Backend",
        imgUrl: projImgId16,
        linkGit: "https://github.com/jonasmachados/academia-springboot-tqi",
        linkSite: "",
    },
    {
        id: 17,
        title: "beer inventory management",
        subtitle: "Beer Inventory Management System: A Spring Boot project that showcases beer management with CRUD "
            + "operations. Explore endpoints and take control of your beer inventory!",
        description: "The beer inventory management project is a Spring Boot application developed as part of the "
            + "Bootcamp TQI Fullstack Developer module.It focuses on showcasing a robust beer inventory management system. \n"
            + "The application provides a set of powerful endpoints to manage beers and their related information.These "
            + "endpoints allow users to create new beers, retrieve beers by name, retrieve a list of all beers, delete "
            + "beers by ID, and increment the quantity of a beer. \n"
            + "The project leverages JDK 11 and the Spring Boot MVC framework for the backend implementation.The data is "
            + "stored in an H2 Database Engine, which offers a reliable and efficient in-memory database solution. \n"
            + "To start working with the project, you can clone the repository and import it into your preferred IDE."
            + "Build and run the project using Maven or your IDE's tools. Once the project is up and running, you can "
            + "access the application in your browser at http://localhost:8080. \n"
            + "Feel free to explore the provided endpoints and manage the beer inventory according to your specific "
            + "requirements.Enjoy the beer inventory management experience empowered by this Spring Boot application.",
        p_card1: "Spring Boot",
        p_card2: "Spring MVC",
        p_card3: "Backend",
        imgUrl: projImgId17,
        linkGit: "https://github.com/jonasmachados/beer-inventory-management",
        linkSite: "",

    }
];

export default projectsData;
