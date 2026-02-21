function chooseWebsite() {
      const choice = prompt(
        "Which type of website would you like to explore?\n1. Portfolio\n2. E-commerce\n3. Blog\n4. Landing Page",
        "Enter 1, 2, 3, or 4"
      );

      switch(choice) {
        case "1":
          alert("You selected Portfolio! Check out some frontend projects here.");
          break;
        case "2":
          alert("You selected E-commerce! Explore some shopping site designs.");
          break;
        case "3":
          alert("You selected Blog! See blog layouts and interactive posts.");
          break;
        case "4":
          alert("You selected Landing Page! Learn about hero sections and CTAs.");
          break;
        default:
          alert("No valid option selected. Please click the button and choose 1-4.");
      }
    }