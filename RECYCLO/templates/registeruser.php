<?php
// Database connection parameters
$host = 'localhost';
$dbname = 'patient';
$username = 'root';
$password = '';

// Establishing a connection to the database
try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error: " . $e->getMessage());
}

// Function to sanitize input data
function sanitizeInput($data) {
    return htmlspecialchars(strip_tags($data));
}

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve user data from the form
    $fullname = sanitizeInput($_POST['full_name']);
    $mobile = sanitizeInput($_POST['mobile_no']);
    $email = sanitizeInput($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hashing the password
    $address = sanitizeInput($_POST['address']);
    $city = sanitizeInput($_POST['city']);
    $state = sanitizeInput($_POST['state']);




    
    // Insert user data into the "patients" table
    $sql = "INSERT INTO patients (full_name, mobile_no, email, password, address, city, state) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([$fullname, $mobile, $email, $password, $address, $city, $state]);
        echo "User data inserted successfully!";
    } catch (PDOException $e) {
        die("Error: " . $e->getMessage());
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>register Page</title>
    <link rel="stylesheet" href="../vendor/formstyle.css">
</head>
<body>
    <div class="login-page">
      <div class="backbtn"><button>
        <a href="../index.html"><h3>
          Home page</h3>
        </a>
      </button>
      </div>
      <form method="post" action="">
        <label for="full_name">Full Name:</label>
        <input type="text" name="full_name" required>

        <label for="email">Email:</label>
        <input type="email" name="email" required>

        <label for="username">Username:</label>
        <input type="text" name="username" required>

        <label for="password">Password:</label>
        <input type="password" name="password" required>

        <input type="submit" value="Submit">
        <input type="button" value="Back to Home" onclick="redirectToHome()">
        <div class="login-link">
            <p>Done with signup? <a href="login.php">Login now</a></p>
        </div>
      </form>
    </div>
</body>
</html>