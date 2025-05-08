"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Toggle account dropdown
  const myAccountBtn = document.getElementById("myAccountBtn");
  const accountDropdown = document.getElementById("accountDropdown");

  if (myAccountBtn) {
    myAccountBtn.addEventListener("click", function (e) {
      e.preventDefault();
      accountDropdown.classList.toggle("show");
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (
      accountDropdown &&
      myAccountBtn &&
      !myAccountBtn.contains(e.target) &&
      !accountDropdown.contains(e.target)
    ) {
      accountDropdown.classList.remove("show");
    }
  });

  // Logout functionality
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function (e) {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      window.location.href = "/";
    });
  }

  // Verification button functionality
  const verificationBtn = document.querySelector(".verification-btn");
  const emailInput = document.querySelector(".university-email");

  if (verificationBtn && emailInput) {
    verificationBtn.addEventListener("click", function () {
      const email = emailInput.value.trim();

      if (!email) {
        alert("Please enter your university email");
        return;
      }

      // Check if it looks like a university email
      if (!email.includes(".edu") && !email.includes("ac.")) {
        alert("Please enter a valid university email address");
        return;
      }

      // Here you would normally send the verification email
      alert(`Verification link sent to ${email}. Please check your inbox.`);
      emailInput.value = "";
    });
  }
});
