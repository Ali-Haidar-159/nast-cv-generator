
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Initialize all elements
  let loginBtn = document.querySelector("#loginBtn");
  let signupBtn = document.querySelector("#signupBtn");
  let blankTemplate = document.querySelector(".blank-template");
  let switchToLoginLink = document.querySelector("#switchToLogin");
  let switchToSignupLink = document.querySelector("#switchToSignup");
  let forgotPasswordLink = document.querySelector("#forgotPasswordLink");
  let switchToLoginFromReset = document.querySelector(
    "#switchToLoginFromReset"
  );

  console.log("DOM fully loaded");
  console.log("Login button:", loginBtn);
  console.log("Signup button:", signupBtn);

  // Blank template navigation
  if (blankTemplate) {
    blankTemplate.addEventListener("click", function () {
      console.log("Blank template clicked");
      window.location.href = `/build`;
    });
  }

  // Login button event
  if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
      console.log("Login button clicked");
      e.preventDefault(); // Prevent default navigation
      $("#loginModal").modal("show");
    });
  }

  // Signup button event
  if (signupBtn) {
    signupBtn.addEventListener("click", function (e) {
      console.log("Signup button clicked");
      e.preventDefault(); // Prevent default navigation
      $("#signupModal").modal("show");
    });
  }

  // Form submissions - Login
  const loginForm = document.querySelector("#loginModal form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      console.log("Login form submitted");
      // Allow the normal form submission to work with your database
      // Only prevent default if you want to handle it via AJAX
      // e.preventDefault();

      // You can still set the localStorage for client-side state
      localStorage.setItem("isLoggedIn", "true");

      // Form will submit naturally to your backend endpoint
    });
  }

  // Form submissions - Signup
  const signupForm = document.querySelector("#signupModal form");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      console.log("Signup form submitted");
      // Check the newsletter checkbox
      const updatesCheckbox = document.getElementById("updates");
      console.log("Newsletter signup:", updatesCheckbox.checked);

      // Allow the normal form submission to work with your database
      // Only prevent default if you want to handle it via AJAX
      // e.preventDefault();

      // Form will submit naturally to your backend endpoint
    });
  }

  // Form submissions - Reset Password
  const resetForm = document.querySelector("#forgotPasswordModal form");
  if (resetForm) {
    resetForm.addEventListener("submit", function (e) {
      const resetEmailInput = document.getElementById("resetEmail");
      const newPasswordInput = document.getElementById("newPassword");
      const confirmPasswordInput = document.getElementById("confirmPassword");
      const resetErrorMessage = document.querySelector(
        "#forgotPasswordModal .error-message"
      );

      let isValid = true;

      // Validate fields
      if (!resetEmailInput.value.trim()) {
        e.preventDefault();
        resetEmailInput.nextElementSibling.style.display = "block";
        resetEmailInput.classList.add("error");
        isValid = false;
      }

      if (!newPasswordInput.value.trim()) {
        e.preventDefault();
        newPasswordInput.nextElementSibling.style.display = "block";
        newPasswordInput.classList.add("error");
        isValid = false;
      }

      if (!confirmPasswordInput.value.trim()) {
        e.preventDefault();
        confirmPasswordInput.nextElementSibling.style.display = "block";
        confirmPasswordInput.classList.add("error");
        isValid = false;
      }

      if (newPasswordInput.value !== confirmPasswordInput.value) {
        e.preventDefault();
        alert("Passwords do not match!");
        isValid = false;
      }

      // If valid, allow the form to submit to your database
      if (isValid) {
        console.log("Password reset form is valid, submitting to backend");
        // Form will submit naturally
      }
    });
  }

  // Switch between modals

  // Signup to Login
  if (switchToLoginLink) {
    switchToLoginLink.addEventListener("click", function (e) {
      e.preventDefault();
      $("#signupModal").modal("hide");
      setTimeout(function () {
        $("#loginModal").modal("show");
      }, 500);
    });
  }

  // Login to Signup
  if (switchToSignupLink) {
    switchToSignupLink.addEventListener("click", function (e) {
      e.preventDefault();
      $("#loginModal").modal("hide");
      setTimeout(function () {
        $("#signupModal").modal("show");
      }, 500);
    });
  }

  // Login to Forgot Password
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();
      $("#loginModal").modal("hide");
      setTimeout(function () {
        $("#forgotPasswordModal").modal("show");
      }, 500);
    });
  }

  // Forgot Password to Login
  if (switchToLoginFromReset) {
    switchToLoginFromReset.addEventListener("click", function (e) {
      e.preventDefault();
      $("#forgotPasswordModal").modal("hide");
      setTimeout(function () {
        $("#loginModal").modal("show");
      }, 500);
    });
  }

  // Show/hide password functionality

  // Login password toggle
  const showPasswordBtn = document.querySelector(".show-password");
  if (showPasswordBtn) {
    showPasswordBtn.addEventListener("click", function () {
      const passwordInput = document.getElementById("password");
      const showText = this;

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showText.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        showText.textContent = "Show";
      }
    });
  }

  // Signup password toggle
  const showPasswordSignupBtn = document.querySelector(".show-password-signup");
  if (showPasswordSignupBtn) {
    showPasswordSignupBtn.addEventListener("click", function () {
      const passwordInput = document.getElementById("signupPassword");
      const showText = this;

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showText.textContent = "Hide";
      } else {
        passwordInput.type = "password";
        showText.textContent = "Show";
      }
    });
  }

  // Field validation event listeners

  // Reset Email validation
  const resetEmailInput = document.getElementById("resetEmail");
  if (resetEmailInput) {
    resetEmailInput.addEventListener("input", function () {
      if (resetEmailInput.value.trim()) {
        resetEmailInput.nextElementSibling.style.display = "none";
        resetEmailInput.classList.remove("error");
      }
    });

    resetEmailInput.addEventListener("blur", function () {
      if (!resetEmailInput.value.trim()) {
        resetEmailInput.nextElementSibling.style.display = "block";
        resetEmailInput.classList.add("error");
      }
    });
  }

  // New Password validation
  const newPasswordInput = document.getElementById("newPassword");
  if (newPasswordInput) {
    newPasswordInput.addEventListener("input", function () {
      if (newPasswordInput.value.trim()) {
        newPasswordInput.nextElementSibling.style.display = "none";
        newPasswordInput.classList.remove("error");
      }
    });

    newPasswordInput.addEventListener("blur", function () {
      if (!newPasswordInput.value.trim()) {
        newPasswordInput.nextElementSibling.style.display = "block";
        newPasswordInput.classList.add("error");
      }
    });
  }

  // Confirm Password validation
  const confirmPasswordInput = document.getElementById("confirmPassword");
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", function () {
      if (confirmPasswordInput.value.trim()) {
        confirmPasswordInput.nextElementSibling.style.display = "none";
        confirmPasswordInput.classList.remove("error");
      }
    });

    confirmPasswordInput.addEventListener("blur", function () {
      if (!confirmPasswordInput.value.trim()) {
        confirmPasswordInput.nextElementSibling.style.display = "block";
        confirmPasswordInput.classList.add("error");
      }
    });
  }

  // Check login status when the page loads
  checkLoginStatus();
});

// Function to check login status and render appropriate UI
function checkLoginStatus() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const bottomButtonDiv = document.querySelector("#bottomButtonDiv");

  if (isLoggedIn && bottomButtonDiv) {
    renderLoggedInUI();
  }
}

// Function to render the logged-in UI
function renderLoggedInUI() {
  const bottomButtonDiv = document.querySelector("#bottomButtonDiv");
  if (bottomButtonDiv) {
    bottomButtonDiv.innerHTML = `
      <div class="account-container my-account-highlight" id="myAccountBtn">
        <i class="fa-regular fa-user user-icon"></i>
        <a href="#" class="account-link">My account</a>
      </div>
      <div class="account-dropdown" id="accountDropdown">
        <a href="/feedback" class="dropdown-item">
          <i class="fa-regular fa-comment"></i> Give Feedback
        </a>
        <a href="/support" class="dropdown-item">
          <i class="fa-regular fa-envelope"></i> Support
        </a>
        <a href="/benefits" class="dropdown-item">
          <i class="fa-solid fa-graduation-cap"></i> Student Benefits
        </a>
        <a href="/settings" class="dropdown-item">
          <i class="fa-solid fa-gear"></i> Settings
        </a>
        <a href="/logout" class="dropdown-item" id="logoutBtn">
          <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </a>
      </div>
    `;

    // Add event listener to My account button
    document
      .getElementById("myAccountBtn")
      .addEventListener("click", function (e) {
        e.preventDefault();
        document.getElementById("accountDropdown").classList.toggle("show");
      });

    // Add event listener to Logout button
    document
      .getElementById("logoutBtn")
      .addEventListener("click", function (e) {
        // e.preventDefault();
        // Logout functionality
        localStorage.removeItem("isLoggedIn");
        location.reload(); // Reload the page to show login/signup buttons again
      });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      const dropdown = document.getElementById("accountDropdown");
      const accountBtn = document.getElementById("myAccountBtn");

      if (
        dropdown &&
        !accountBtn.contains(e.target) &&
        !dropdown.contains(e.target)
      ) {
        dropdown.classList.remove("show");
      }
    });
  }
}

// Add this to your getStartedPageJS.js file

// Google Authentication Button functionality
document.addEventListener("DOMContentLoaded", function () {
  const googleAuthBtn = document.querySelector(".google-auth-btn");

  if (googleAuthBtn) {
    googleAuthBtn.addEventListener("click", function () {
      console.log("Google Authentication initiated");

      // Typically, you would redirect to your Google OAuth endpoint
      // For example:
      // window.location.href = "/auth/google";

      // For demonstration, we'll just show a message
      alert("Redirecting to Google for authentication...");

      // In a real implementation, you would handle this with your backend OAuth flow
    });
  }
});

let queryParameter = new URLSearchParams(window.location.search);
let auth = queryParameter.get("auth");

if (auth === "1") {
  signupBtn.style.visibility = "hidden";
  loginBtn.textContent = "Logout" ;
  loginBtn.href = "/logout"
}
