<?php
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

//Database connection

$conn = new mysqli('localhost', 'root', '', 'login_page');
if ($conn->connect_error) {
die("Connection failed: " .$conn->connect_error);
}
else{
    $stmt = $conn->prepare("insert into registration(username, password, email) values(?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email);
    $stmt->execute();
    echo "Registration Successfully...";
    $stmt->close();
    $conn->close();
    header("Location: index.html"); // Redirect to index.html
    exit(); // Terminate the current script
}
?>