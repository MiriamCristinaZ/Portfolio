function openContactForm() {
  // Open a new tab with a sample form
  var newTab = window.open("", "_blank");

  // Check if the new window was successfully opened
  if (newTab) {
    newTab.document.write("<html><head><title>Contact Form</title>");
    newTab.document.write("<style>");
    newTab.document.write(
      "body { font-family: Arial, sans-serif; background-color: #f0f0f0; margin: 0; padding: 20px; }"
    );
    newTab.document.write("h1 { text-align: center; }");
    newTab.document.write(
      "form { max-width: 400px; margin: 0 auto; background-color: #ffffff; padding: 20px; border: 1px solid #ccc; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); }"
    );
    newTab.document.write("label { display: block; margin-bottom: 10px; }");
    newTab.document.write(
      'input[type="text"], input[type="email"], input[type="tel"] { width: 100%; padding: 10px; margin-bottom: 15px; border: 1px solid #ccc; }'
    );
    newTab.document.write(
      'input[type="submit"] { background-color: #007BFF; color: #fff; border: none; padding: 10px 20px; cursor: pointer; }'
    );
    newTab.document.write("</style>");
    newTab.document.write("</head><body>");

    newTab.document.write("<h1>Contact Form</h1>");
    newTab.document.write("<form>");
    newTab.document.write('<label for="name">Name:</label>');
    newTab.document.write('<input type="text" name="name" id="name">');
    newTab.document.write("<br>");
    newTab.document.write('<label for="email">Email:</label>');
    newTab.document.write('<input type="email" name="email" id="email">');
    newTab.document.write("<br>");
    newTab.document.write('<label for="phone">Phone Number:</label>');
    newTab.document.write('<input type="tel" name="phone" id="phone">');
    newTab.document.write("<br>");
    newTab.document.write('<input type="submit" value="Submit">');
    newTab.document.write("</form>");
    newTab.document.write("</body></html>");
    newTab.document.close();
  } else {
    // Handle the case where the new tab couldn't be opened
    alert("A new tab could not be opened. Please check your browser settings.");
  }
}
