<?php
	$fullname = $_POST['fullname'];
	$username = $_POST['username'];
	$email = $_POST['email'];
    $number = $_POST['number'];
	$password = $_POST['password'];
    $gender = $_POST['gender'];

	// Database connection
	$conn = new mysqli('localhost','root','','servertest');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(fullname, username, email, number,password,gender) values(?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("sssiss", $firstname, $username,$email,$number, $password, $gender);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>