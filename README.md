![SQLCraft logo](./src/assets/images/sqlcraft-banner.jpg)
[![install size](https://packagephobia.com/badge?p=sqlcraft)](https://packagephobia.com/result?p=sqlcraft) [![npm version](https://badge.fury.io/js/sqlcraft.svg)](https://badge.fury.io/js/sqlcraft)

SQLCraft is a software package designed to generate scripts to assist developers in interacting with relational databases.

## 👉 Getting Started
Here is an example of how to use many of SQLcraft's main functions :
 ```javascript
//  Select all id of the table users with the condition id < 5
sqlcraft.SELECT("id", "users", "id < 5")

// Delete all the informations of the id 3 on the table users
sqlcraft.DELETE("users", "id = 5")

// Update the age of the user Arnaud so that he's 24
sqlcraft.UPDATE("users", "age = 24", "name = Arnaud")
```

## 🔧 Installation
### Step 1: Clone the Repository
Begin by cloning the repository from your console using the following command :
```
git clone https://github.com/Sasorishi/SQLCraft.git
```

### Step 2: Install Dependencies
Install all the required dependencies listed in the package.json file with the following command :
```
npm install
```

### Step 3: Launch the Application
To start the application, run the following command in your console :
```
npm start
```

### Step 4: Test the Application
Open your web browser and paste the following URL :
```
http://localhost:3000/
```

## 📜 License
Distributed under the MIT License. See `LICENSE.md` for more information.

## ❔ About
We are a team of 3 students from [IIM](https://www.iim.fr/), a school based in France and our project was to create an npm package useful to the community in 3 days.

The project does not stop there and we intend to update it in the future.

Below you will find the team's contacts and of course do not hesitate to contact us with any questions :
* Ayman BENAMMOUR : [benammourayman@gmail.com](mailto:benammourayman@gmail.com) | [GitHub](https://github.com/ayman-benammour) | [Linkedin](https://www.linkedin.com/in/ayman-benammour/)
* Kévin GUEST : [GitHub](https://github.com/k-guest)
* Alban ON : [GitHub](https://github.com/Sasorishi)
