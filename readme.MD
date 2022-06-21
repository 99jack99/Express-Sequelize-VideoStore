
|  <img src="./assets/imgREADME/express.png" width="100%" height="100%"/>  | <img src="./assets/imgREADME/sequelize.webp" width="100%" height="100%"/>    |  <img src="./assets/imgREADME/nodemon.png" width="100%" height="100%"/>    |
|:--:|:--:|:--:|
|<img src="./assets/imgREADME/jwt.png" width="100%" height="100%"/>|<img src="./assets/imgREADME/bcrypt.jpg" width="100%" height="100%"/>| <img src="./assets/imgREADME/mysql.png" width="100%" height="100%"/>|

<h1 align="center">📼​ VIDEOSTORE 📼​</h1>

<h1 align="center"></h1>
<h3 align="center"><em style="color: #ba932f" >Created by: Jackson Almeida</em></h3>
<hr>

<h2>🚩​​ Intro</h2>

<p align="center">
  <a href="">Description</a> 
  <br> 
  <a href="">Diagram</a> 
  <br>
  <a href="">List of endpoints</a>
  <br>
  <a href="">Extras</a>
  <br>
  <a href="">Improvements</a>
</p>
<hr>

<h2>📝​ Description</h2>
<br>

***Videostore*** Its a backend project... in more detail, its a videoclub simulated business in which I decided to use relational data base for obvious purposes.
MVC architectural structure has also been used.
<br>
In there, it is shown **clients** and **films**, whose they have N-N (many to many) relation.
*A client can buy many films and rent many film.


<hr>
<h2>​🆔​ Diagram</h2>
Here you can see a Screenshot from inverse engineering of workbench: 


<img border="3" src="./assets/imgREADME/RE.png" width="100%" height="400"/>
<div align="center"><sub align="center">Videostore Database - ER Diagram </sub></div>
<br>
<hr>
<h2>❓​ List of endpoints</h2>

| Table | Type |	Endpoints | Function |Extras|
|:-----:|:----:|:-----:|:-----:	|:---:|
| Client | get | .../clients/  | Obtain ALL clients | Token needed| 
| Client | get | .../clients/user/:id  | Obtain ONE clients |Token needed|
| Client | post | .../clients/register  | Inscribe client |-|
| Client | post | .../clients/login  | Login client |- [Creates token here]|
| Client | put | .../clients/user/:id  | Update client info|Token needed|
| Client | put | .../clients/user/:id/changepassword  | Update client password|Token needed|
| Film | get | .../films/ | Obtain ALL film|-|
| Film | post | .../films/addfilm | Create film|admin needed|
| Film | get | .../films/:tittle | Obtain a film by its tittle|-|
| Film | get | .../rents/genre | Obtain films by genre|-|
| Rent | get | .../rents/ | Obtain all rents done|admin needed|
| Rent | post | .../rents/rent | Create rent|admin needed|
| Sale | get | .../sales/ | Obtain all sales done|admin needed|
| Sale | post | .../sales/sale | Create sale|admin needed|

<hr>
<h2>🛡️​​ Extras</h2>
<br>
* All Passwords are <strong>encrypted</strong> with Bcrypt.
<br>
* Some <strong>fields are regulated</strong> for the purpose of <strong>security</strong>.
<br>
* Some fields avoid <strong>unwated information</strong> for the purpose of not filling our database with rubish.

<hr>

<h2>😭 Improvements</h2>
- Even though there are regulations and the project is for the purpose of learning, I wish I would have added <strong>more functions</strong> which they are more <strong>used in real life projects</strong>.
<br>
<sub><em>for example, verify email*, and dni* </em></sub>
<br>
<br>
- A <strong>file</strong> with different <strong>functionalities</strong> is also a good practice in which I would add functions that I would normally use in order to avoid replicate code.
<hr>
<br>
<h2>​🤟​🖖​🖐️​</h2>
<h2>Thank you for visiting!</h2>
<img src="./assets/imgREADME/bye.gif" width="100%" height="300"/>
