const firebaseConfig = {
  apiKey: "AIzaSyAud3Kp1d8hFlMDDfVgUtZKwSC-R9tqTP8",
  authDomain: "student-registration-2024.firebaseapp.com",
  databaseURL: "https://student-registration-2024-default-rtdb.firebaseio.com",
  projectId: "student-registration-2024",
  storageBucket: "student-registration-2024.appspot.com",
  messagingSenderId: "1092080538776",
  appId: "1:1092080538776:web:f3d45f65f9804e7e282ced",
  measurementId: "G-MBSCVXMVBH"
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
