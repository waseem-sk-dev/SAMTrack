<!-- PROJECT SHIELD BADGES -->
<p align="center">
  <a href="https://github.com/waseem-sk-dev/samtrack">
    <img src="https://img.shields.io/github/stars/waseem-sk-dev/samtrack.svg?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/waseem-sk-dev/samtrack">
    <img src="https://img.shields.io/github/forks/waseem-sk-dev/samtrack.svg?style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/waseem-sk-dev/samtrack/issues">
    <img src="https://img.shields.io/github/issues/waseem-sk-dev/samtrack.svg?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/waseem-sk-dev/samtrack/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/waseem-sk-dev/samtrack.svg?style=for-the-badge" alt="License">
  </a>
</p>

<br />

<h1 align="center">📊 SamTrack</h1>

<p align="center">
  A real-time admin and user tracking system with a responsive dashboard, built using <b>Spring Boot</b> and <b>Angular</b>.
  <br />
  <a href="#features">Explore Features</a>
  ·
  <a href="#getting-started">Installation</a>
  ·
  <a href="#screenshots">Screenshots</a>
  ·
  <a href="#contributing">Contribute</a>
  ·
  <a href="#license">License</a>
</p>

---

## 📌 Overview

**SamTrack** is a full-stack web application that provides a comprehensive admin dashboard for managing users, tracking attendance, and monitoring activity. Designed with clean architecture and a modern UI, it ensures smooth navigation, responsive layouts, and real-time interactions.

---

## 🚀 Features

- 🔐 Role-based Authentication (Admin/User)
- 👤 Add, View, Edit, Deactivate Users
- 📆 Attendance & Activity Tracking
- 📊 Responsive Dashboard with Widgets
- 📥 Export Data (Coming Soon)
- 📫 Email Notifications (Optional Setup)
- 🧩 Modular Code Architecture

---

## 🛠️ Tech Stack

| Layer        | Technologies |
|--------------|--------------|
| **Frontend** | Angular, TypeScript, CSS |
| **Backend**  | Spring Boot, Rest Apis, Spring Data JPA |
| **Database** | MySQL  |
| **Dev Tools**| Git, GitHub, Postman, VS Code, IntelliJ IDEA |

---

## 📁 Project Structure
```
samtrack/
├── backend/
│ └── src/main/java/com/samtrack/
│ ├── controller/
│ ├── service/
│ ├── model/
│ └── repository/
├── frontend/
│ └── src/app/
│ ├── components/
│ ├── services/
│ ├── models/
│ └── pages/
```

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Java 17+](https://adoptium.net/)
- [Maven](https://maven.apache.org/)
- [MySQL](https://www.mysql.com/)

### Installation
```
1. **Clone the repo**
```bash
git clone https://github.com/yourusername/samtrack.git
```
Backend Setup

```bash
cd samtrack/backend
mvn clean install
mvn spring-boot:run
```
Frontend Setup

```bash
cd samtrack/frontend
npm install
ng serve
Visit in Browser
```
---

```bash

Frontend: http://localhost:4200
Backend API: http://localhost:8080/api/
<!--📷 Screenshots
(Add your real screenshots in the assets/screenshots/ folder and embed below)-->

<p align="center"> <img src="assets/screenshots/dashboard.png" width="90%" /> <img src="assets/screenshots/user-management.png" width="90%" /> </p>
```
---
🤝 Contributing
Contributions are welcome! To get started:
```
Fork the repository

Create your feature branch: git checkout -b feature/my-feature

Commit your changes: git commit -m 'Add my feature'

Push to the branch: git push origin feature/my-feature

Open a pull request
```
---

📝 License
Distributed under the MIT License. See LICENSE for more information.
```
👤 Author
Waseem Sk Dev
📍 Pune, Maharashtra
📫 shaikhrgp@gmail.com


<p align="center">⭐️ Star this repo to support the project!</p> ```
