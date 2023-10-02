<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "ejazahmed4688@gmail.com";
    $subject = "New Contact Form Submission from $name";
    $headers = "From: $email";

    $email_message = "Name: $name\n";
    $email_message .= "Phone: $phone\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Message:\n$message";

    mail($to, $subject, $email_message, $headers);
}
?>