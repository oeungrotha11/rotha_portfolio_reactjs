import { siDocker, siDjango, siFlutter, siGithub, siJavascript, siLaravel, siMysql, siNginx, siOpenapiinitiative, siReact, siSpringboot, siDart } from "simple-icons";
import internCert from "../assets/intern cert.jpg";
import frontReactCert from "../assets/front react cert.jpg";
import backLaravelCert from "../assets/back laravel cert.jpg";
import cPlusPlusCert from "../assets/cert c++.jpg";
import foodiePreviewVideo from "../assets/flutter preview images and vdo/foodie preview.mp4";
import accountScreen from "../assets/flutter preview images and vdo/account screen.png";
import addToCartPopup from "../assets/flutter preview images and vdo/add to cart popup.png";
import bakongPaymentScreen from "../assets/flutter preview images and vdo/bakong payment screen.png";
import cartScreen from "../assets/flutter preview images and vdo/cart screen.png";
import checkoutScreenDetail from "../assets/flutter preview images and vdo/checkout screen detail.png";
import checkoutScreen from "../assets/flutter preview images and vdo/checkout screen.png";
import detailScreen from "../assets/flutter preview images and vdo/detail screen.png";
import homeScreen from "../assets/flutter preview images and vdo/home screen.png";
import locationScreen from "../assets/flutter preview images and vdo/location screen.png";
import loginScreen from "../assets/flutter preview images and vdo/login screen.png";
import orderSuccessScreen from "../assets/flutter preview images and vdo/oder success screen.png";
import orderHistoryScreen from "../assets/flutter preview images and vdo/order history screen.png";
import searchScreen from "../assets/flutter preview images and vdo/search screen.png";
import googleSignInScreen from "../assets/flutter preview images and vdo/sigin with google.png";

const flutterPreview = {
  video: foodiePreviewVideo,
  screens: [
    { title: "Home", image: homeScreen },
    { title: "Search", image: searchScreen },
    { title: "Product details", image: detailScreen },
    { title: "Add to cart", image: addToCartPopup },
    { title: "Cart", image: cartScreen },
    { title: "Checkout", image: checkoutScreen },
    { title: "Checkout details", image: checkoutScreenDetail },
    { title: "Bakong payment", image: bakongPaymentScreen },
    { title: "Order success", image: orderSuccessScreen },
    { title: "Order history", image: orderHistoryScreen },
    { title: "Location", image: locationScreen },
    { title: "Sign in", image: loginScreen },
    { title: "Sign in with Google", image: googleSignInScreen },
    { title: "Account", image: accountScreen },
  ],
};

const projects = [
  { number: "01", slug: "e-commerce-shopping", title: "E-Commerce Shopping", description: "A Laravel-based e-commerce backend with authentication, categories, products, variants, cart, wishlist, checkout and order management.", tags: ["Laravel", "ReactJs", "MySQL", "REST API", "Sanctum"], liveUrl: "https://ecommerce-shopping-ht-frontend.vercel.app/" },
  { number: "02", slug: "food-ordering-mobile-app", title: "Food Ordering Mobile App", description: "A Flutter food ordering application with product browsing, categories, search, cart management, authentication and REST API integration.", tags: ["Flutter", "Dart", "REST API", "Provider"] },
  { number: "03", slug: "order-management-api", title: "Order Management API", description: "A Spring Boot REST API using layered architecture, DTOs, ModelMapper, authentication and database persistence for order workflows.", tags: ["Spring Boot", "Java", "JPA", "MySQL"] },
  { number: "04", slug: "customer-management-api", title: "Customer Management API", description: "A Django REST API project focused on structured CRUD operations, database models and API endpoints for customer management.", tags: ["Django", "Python", "REST API", "MySQL"] }
];
  
const skills = [
  ["React", "Frontend"], ["JavaScript", "Frontend"], ["Laravel", "Backend"],
  ["Spring Boot", "Backend"], ["Django", "Backend"], ["Flutter", "Mobile"], ["Dart", "Mobile"],
  ["MySQL", "Database"], ["REST API", "Architecture"], ["Git / GitHub", "Tools"],
  ["Docker", "DevOps"], ["Nginx", "DevOps"], ["AWS EC2", "Cloud"]
];

const certificates = [
  { title: "Internship Certificate", provider: "Work Experience", issuer: "Professional Training", category: "Experience", year: "2026", image: internCert },
  { title: "React Frontend Certificate", provider: "Frontend Learning", issuer: "Web Development", category: "Frontend", year: "2026", image: frontReactCert },
  { title: "Laravel Backend Certificate", provider: "Backend Learning", issuer: "PHP & API Development", category: "Backend", year: "2026", image: backLaravelCert },
  { title: "C++ Programming Certificate", provider: "Programming Fundamentals", issuer: "Software Development", category: "Programming", year: "2025", image: cPlusPlusCert },
];

const skillIcons = {
  React: siReact, JavaScript: siJavascript, Laravel: siLaravel,
  "Spring Boot": siSpringboot, Django: siDjango, Flutter: siFlutter, Dart: siDart,
  MySQL: siMysql, "REST API": siOpenapiinitiative, "Git / GitHub": siGithub,
  Docker: siDocker, Nginx: siNginx
};

export { projects, skills, certificates, skillIcons, flutterPreview };
