// Function to display the error message
function displayError(message) {
    document.getElementById("error").textContent = message;
    document.getElementById("resultY").textContent = "--";
    document.getElementById("resultM").textContent = "--";
    document.getElementById("resultD").textContent = "--";
  }
  
  // Function to display the age
  function displayAge(years, months, days) {
    document.getElementById("resultY").textContent = years;
    document.getElementById("resultM").textContent = months;
    document.getElementById("resultD").textContent = Math.abs(days); // Remove the negative sign
    document.getElementById("error").textContent = "";
  }
  
  // Function to calculate the age based on the entered date
  function calculateAge() {
    // Get the input values
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    
    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);
  
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based
    const currentDay = currentDate.getDate();
  
    // Validate the input values
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      displayError("Please enter valid date values.");
      return;
    }
  
    if (day < 1 || day > 31) {
      displayError("Please enter a day between 1 and 31.");
      return;
    }
  
    if (month < 1 || month > 12) {
      displayError("Please enter a month between 1 and 12.");
      return;
    }
  
    if (year > currentYear) {
      displayError("Please enter a valid year.");
      return;
    }
  
    // Check for invalid dates (e.g., 31/04/1991)
    const inputDate = new Date(year, month - 1, day);
    if (
      inputDate.getFullYear() !== year ||
      inputDate.getMonth() + 1 !== month ||
      inputDate.getDate() !== day
    ) {
      displayError("Please enter a valid date.");
      return;
    }
  
    // Calculate the age
    let ageYear = currentYear - year;
    let ageMonth = currentMonth - month;
    let ageDay = currentDay - day;
  
    // Adjust the age if the current date is before the birth date
    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
      ageYear--;
      ageMonth += 12;
    }
  
    // Display the age
    displayAge(ageYear, ageMonth, ageDay);
  }
  
  // Function to handle the submit button click event
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    calculateAge();
  }
  
  // Add event listener to the form
  document
    .querySelector(".imgcontainer")
    .addEventListener("click", handleSubmit);
  