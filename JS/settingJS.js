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

  // Settings page elements
  const upgradeBtn = document.querySelector(".upgrade-btn");
  const setPasswordBtn = document.querySelector(".set-password-btn");
  const deleteAccountBtn = document.querySelector(".delete-account-btn");
  const careerUpdatesCheckbox = document.getElementById("careerUpdates");

  // Upgrade button
  if (upgradeBtn) {
    upgradeBtn.addEventListener("click", function () {
      window.location.href = "/planpricing";
    });
  }

  // Set password button
  if (setPasswordBtn) {
    setPasswordBtn.addEventListener("click", function () {
      // Open password setup modal or redirect to password setup page
      alert("Password setup functionality will be implemented here");
    });
  }

  // Delete account button
  if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener("click", function () {
      if (
        confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        )
      ) {
        // Send request to delete account
        alert("Account deletion functionality will be implemented here");
        // After successful deletion, redirect to home
        // window.location.href = '/';
      }
    });
  }

  // Career updates checkbox
  if (careerUpdatesCheckbox) {
    // Load saved preference
    const notificationsEnabled =
      localStorage.getItem("notificationsEnabled") === "true";
    careerUpdatesCheckbox.checked = notificationsEnabled;

    careerUpdatesCheckbox.addEventListener("change", function () {
      // Save preference
      localStorage.setItem("notificationsEnabled", this.checked);
    });
  }

  // Handle page navigation for menu items
  const resumeLink = document.querySelector(".nav-menu a:nth-child(1)");
  const coverLetterLink = document.querySelector(".nav-menu a:nth-child(2)");
  const jobTrackerLink = document.querySelector(".nav-menu a:nth-child(3)");
  const moreLink = document.querySelector(".nav-menu a:nth-child(5)");

  if (resumeLink) {
    resumeLink.addEventListener("click", function (e) {
      if (!this.getAttribute("href")) {
        e.preventDefault();
        window.location.href = "/get-started";
      }
    });
  }

  if (coverLetterLink) {
    coverLetterLink.addEventListener("click", function (e) {
      if (!this.getAttribute("href")) {
        e.preventDefault();
        window.location.href = "/cover-letter";
      }
    });
  }

  if (jobTrackerLink) {
    jobTrackerLink.addEventListener("click", function (e) {
      if (!this.getAttribute("href")) {
        e.preventDefault();
        window.location.href = "/job-tracker";
      }
    });
  }

  if (moreLink) {
    moreLink.addEventListener("click", function (e) {
      if (!this.getAttribute("href")) {
        e.preventDefault();
        window.location.href = "/more";
      }
    });
  }

  // Highlight current page in nav menu
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-menu a");

  navLinks.forEach((link) => {
    link.classList.remove("selected-nav");
  });

  if (currentPath === "/settings") {
    // No navigation item is selected on settings page
  } else if (currentPath === "/get-started" || currentPath.includes("resume")) {
    resumeLink.classList.add("selected-nav");
  } else if (currentPath.includes("cover-letter")) {
    coverLetterLink.classList.add("selected-nav");
  } else if (currentPath.includes("job-tracker")) {
    jobTrackerLink.classList.add("selected-nav");
  } else if (currentPath.includes("more")) {
    moreLink.classList.add("selected-nav");
  }
});
