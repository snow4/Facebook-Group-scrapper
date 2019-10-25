var data;

var welcome = `<h1>Welcome</h1>
<h3>To facebook Scrapping</h3>
<br><br><br>
<div id='logoutbtn'>
<button class="l-action-btn" id="logout">Logout</button></div>`;

var login = `

<div id= 'headText'>Log in to get Going</div>
<br>
<div id='logform'>
<div id='etext'>
Email: 
</div>

<br>
<input type="email" id='logEmail' class="custom-input"><br><br>

<div id='ptext'>
Password:
</div>

<br>
<input type="password" class="custom-input" id='logPassword'><br><br>
<br>
<Button class="action-btn" id='loginbtn'>Login</Button><br><br>

* Don't have account?
<Button id='lsignupbtn'>Sign up</Button>

</div>
`;

var signup = `

<div id='signform'>
<h1>Sign Up</h1>

<div id='sname'>
Name</div>

<input type="text" id="name" class="s-custom-input">
<div id ="error_name"></div><br>

<div id='sphone'>
Phone
</div>

<input type="number" id="phone" class="s-custom-input">
<div id ="error_phone"></div>
<br>

<div id='semail'>
Email 
</div>

<input type="email" id="email" class="s-custom-input">
<div id ="error_email"></div>
<br>

<div id='spassword'>
Password
<input type="password" id="password" class="s-custom-input">
<div id ="error_password"></div>
<br>
<Button id='signupbtn' class="s-action-btn">Signup</Button><br><br>
<Button id='BackLogin' class="s-action-btn">Back to Login</Button><br><br>
</div>
`;

chrome.storage.local.get(function(data) {
  if (data.token != null) {
    console.log("welcome page");
    document.getElementById("welcome_screen").innerHTML = welcome;
    // logout of welcome screen
    document.getElementById("logout").addEventListener("click", function() {
      logOut();
    });
  } else {
    console.log("login page");
    document.getElementById("login_form").innerHTML = login;
    loginPage();

    // ============----------

    // ====================================
    // login button of login page
  }
});

function logOut() {
  chrome.storage.local.set({ token: null }, function() {
    console.log("token removed");
    chrome.storage.local.set({ email: null }, function() {
      console.log("email removed");
    });
  });
  document.getElementById("welcome_screen").innerHTML = null;
  document.getElementById("login_form").innerHTML = login;
  loginPage();
}

function loginPage() {
  document.getElementById("lsignupbtn").addEventListener("click", function() {
    console.log("enterd signup");
    document.getElementById("signup_form").innerHTML = signup;
    document.getElementById("login_form").innerHTML = null;

    signUpPage();
  });

  // login button of login page
  document.getElementById("loginbtn").addEventListener("click", function() {
    // document.getElementById("login_form").innerHTML = login;
    // document.getElementById("signup_form").innerHTML = null;
    LoginPageDetails();
  });
}

function signUpPage() {
  document.getElementById("signupbtn").addEventListener("click", function() {
    console.log("enterd signup");

    signUpDetails();
  });

  document.getElementById("BackLogin").addEventListener("click", function() {
    console.log("enterd login");
    document.getElementById("login_form").innerHTML = login;
    document.getElementById("signup_form").innerHTML = null;
    loginPage();
  });
}

function LoginPageDetails() {
  // ====================================
  // login button of login page

  console.log("login");

  var u_email = document.getElementById("logEmail").value.toString();
  var u_password = document.getElementById("logPassword").value.toString();
  console.log("email", u_email, "password", u_password);
  if (u_email != null && u_password != null) {
    var login_data = {
      email: u_email,
      password: u_password
    };
    console.log(JSON.stringify(login_data));
    chrome.storage.local.set({ email: u_email }, function() {
      console.log("email saved");
    });
  }

  axios
    .post("https://fb-chrome-app.herokuapp.com/api/login", login_data)
    .then(resp => {
      document.getElementById("login_form").innerHTML = null;
      document.getElementById("welcome_screen").innerHTML = welcome;
      document.getElementById("logout").addEventListener("click", function() {
        logOut();
      });
      console.log(resp, resp.data.token);

      chrome.storage.local.set({ token: resp.data.token }, function() {
        console.log("token saved");
      });
    });
}

function signUpDetails() {
  // ----------------------------------
  // signup button of sign up page

  var u_name = document.getElementById("name").value.toString();
  var u_phone = document.getElementById("phone").value.toString();
  var u_email = document.getElementById("email").value.toString();
  var u_password = document.getElementById("password").value.toString();
  console.log(document.getElementById("name").value.toString());

  if (
    u_name != null &&
    u_phone != null &&
    u_email != null &&
    u_password != null
  ) {
    data = {
      name: u_name,
      phone: u_phone,
      email: u_email,
      password: u_password
    };
    console.log(data);

    //                ------------------------------

    axios
      .post("https://fb-chrome-app.herokuapp.com/api/signup", data)
      .then(console.log);
  } else {
    if (document.getElementById("name").value == null) {
      document.getElementById("error_name").innerHTML =
        "*this is an invalid name";
    } else if (document.getElementById("phone").value == null) {
      document.getElementById("error_phone").innerHTML =
        "*this is an invalid phone";
    } else if (document.getElementById("email").value == null) {
      document.getElementById("error_email").innerHTML =
        "*this is an invalid email";
    } else if (document.getElementById("password").value == null) {
      document.getElementById("error_password").innerHTML =
        "*this is an invalid password";
    }
  }
}
