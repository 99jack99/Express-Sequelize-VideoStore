<h1 align="center">
 📼Videostore📼
</h1>

<div align="center">
<h3 ><em> Created by: </em></h3>
<br>
<em> - Jackson Almeida Da Luz - </em>
</div>

<hr>


<h4 align="center">created with <em>Node.js</em> and <em>Sql</em></h4>

<hr>

<p align="center">
    <a href="">Description</a> 
  <br> -
  <br>
  <a href="">ERD</a> 
  <br> -
  <br>
  <a href="">Dependencies</a> 
  <br> -
  <br>
  <a href="">Endpoints</a> 
  <br> -
  <br>
  
</p>


<br>
<h2>Description</h2>
Videostore is a simulated shopping in which you could buy and rents movies.
It could be more complexed but for learning reasons I decided to keep it simple, just enough to practice technologies I described.
<br>
<img src="assets/imgREADME/videostore.jpg" width=><br>

<hr>

<h2>ERD</h2>
<hr>



<p align="center">
<img src="assets/imgREADME/RE.png" width=><br>
<sub>Relations [Many to Many]</sub>
</p>

<hr>

<h2>Dependecies:</h2>
<ul>
<li>express</li>
<li>sequelize</li>
<li>sequelize-cli</li>
<li>mysql2</li>
<li>jsonwebtoken</li>
<li>nodemon</li>
<li>dotenv</li>
<li>bcrypt</li>
</ul>

![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)  ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![SEQUELIZE](https://img.shields.io/badge/sequelize-%23000000.svg?style=for-the-badge&logo=sequelize&logoColor=white) ![JWT](https://img.shields.io/badge/JSONWEBTOKEN-%23000000.svg?style=for-the-badge&logo=JWT&logoColor=white) ![POSTMAN](https://img.shields.io/badge/postman-%23000000.svg?style=for-the-badge&logo=postman&logoColor=orange)  
 

<hr>
<h2>Endpoints:</h2>

<br>

<ins>| CLIENTS |</ins>
<br>
| /clients/    | <-- get
| /clients/:id       | <-- get
| /clients/:id       | <-- put
| /clients/:id/changepassword      | <-- put
| /clients/register      | <-- post
| /clients/login      | <-- post
<br>

<ins>| FILMS |</ins>
<br>
| /films/    | <-- get
| /films/addfilm       | <-- post
| /films/:tittle       | <-- get
| /films/genre     | <-- get

<br>

<ins>| SALES |</ins>
<br>
| /sales/    | <-- get
| /sales/buy      | <-- post

<br>

<ins>| RENTS |</ins>
<br>
| /rents/    | <-- get
| /rents/rent     | <-- post

<br>
