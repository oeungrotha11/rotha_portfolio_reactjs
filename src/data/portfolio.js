import { siDocker, siDjango, siFlutter, siGithub, siJavascript, siLaravel, siMysql, siNginx, siOpenapiinitiative, siReact, siSpringboot } from "simple-icons";

const projects = [
  { number: "01", title: "E-Commerce API", description: "A Laravel-based e-commerce backend with authentication, categories, products, variants, cart, wishlist, checkout and order management.", tags: ["Laravel", "PHP", "MySQL", "REST API", "Sanctum"], link: "#" },
  { number: "02", title: "POS Mobile App", description: "A Flutter POS application with product browsing, categories, search, cart management, authentication and REST API integration.", tags: ["Flutter", "Dart", "REST API", "Provider"], link: "#" },
  { number: "03", title: "Order Management API", description: "A Spring Boot REST API using layered architecture, DTOs, ModelMapper, authentication and database persistence for order workflows.", tags: ["Spring Boot", "Java", "JPA", "MySQL"], link: "#" },
  { number: "04", title: "Customer Management API", description: "A Django REST API project focused on structured CRUD operations, database models and API endpoints for customer management.", tags: ["Django", "Python", "REST API", "MySQL"], link: "#" }
];

const skills = [
  ["React", "Frontend"], ["JavaScript", "Frontend"], ["Laravel", "Backend"],
  ["Spring Boot", "Backend"], ["Django", "Backend"], ["Flutter", "Mobile"], ["Dart", "Mobile"],
  ["MySQL", "Database"], ["REST API", "Architecture"], ["Git / GitHub", "Tools"],
  ["Docker", "DevOps"], ["Nginx", "DevOps"], ["AWS EC2", "Cloud"]
];

const skillIcons = {
  React: siReact, JavaScript: siJavascript, Laravel: siLaravel,
  "Spring Boot": siSpringboot, Django: siDjango, Flutter: siFlutter,
  MySQL: siMysql, "REST API": siOpenapiinitiative, "Git / GitHub": siGithub,
  Docker: siDocker, Nginx: siNginx
};

export { projects, skills, skillIcons };
