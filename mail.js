const firebaseConfig = {
    apiKey: "AIzaSyCgYbnH_e1SfH7dYbvbc4ol2vkzktEUxbQ",
    authDomain: "pallavi-project-1cefc.firebaseapp.com",
    databaseURL: "https://pallavi-project-1cefc-default-rtdb.firebaseio.com",
    projectId: "pallavi-project-1cefc",
    storageBucket: "pallavi-project-1cefc.appspot.com",
    messagingSenderId: "473217124983",
    appId: "1:473217124983:web:02686905032d2084d2d472",
    measurementId: "G-0NRR3XS484"
    };
    // initialize firebase
    firebase.initializeApp(firebaseConfig);
    // Declaring variables
    var afullnamev, Rollnov, coursenamev, genderv, phonev, emailv, addressv;
    // Reading form variables
    function readFormVar() {
    afullnamev = document.getElementById("fullname").value;
    Rollnov = document.getElementById("Rollno").value;
    coursenamev = document.getElementById("coursename").value;
    genderv = document.getElementById("gender").value;
    phonev = document.getElementById("phone").value;
    emailv = document.getElementById("email").value;
    addressv = document.getElementById("address").value;
    };
    // Saving data in Firebase
    function submitForm() {
    // Read form variables
    readFormVar();
    var emailCheck = emailv;
    // Validating email pattern
    var pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (pattern.test(emailCheck)) {
    // Save data to Firebase
    firebase.database().ref('/student/' + afullnamev).set({
    a__Full_name: afullnamev,
    b__Roll_no: Rollnov,
    c__Course_name: coursenamev,
    d__Gender: genderv,
    e__Phone_no: phonev,
    f__Email: emailv,
    g__Address: addressv,
    });
    alert("Email is valid, Data Inserted");
    } else {
    alert("Please enter a valid email address, data is not inserted");
    // Email is invalid, display error message
    }
    }
    // Get reference to button
    var btn = document.getElementById("submit");
    // Add event listener for the button, for action "click"
    btn.addEventListener("click", submitForm);