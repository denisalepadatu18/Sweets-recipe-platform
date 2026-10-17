# Interactive Recipe Platform

An interactive client-side web application built with modern vanilla JavaScript, HTML5, and CSS3. The platform features an extensive catalog of dessert recipes, dynamic user authentication, responsive layouts, customizable themes, and client-side data persistence.


## Key Features

- Client-Side Authentication: Modal-based login flow validating credentials against an asynchronous JSON dataset using Fetch API.
- Session Management and Persistence: LocalStorage integration to maintain active user sessions, custom theme choices, and personalized favorite recipe lists.
- Dynamic DOM Manipulation: Interactive favorite lists with real-time additions, removals, and event propagation control.
- Dark and Light Theme Toggle: Real-time UI theme switcher with persistent user preference storage.
- Interactive Canvas Graphics: Custom vector drawing routines built with the HTML5 Canvas API.
- Form Validation: Robust contact form validation utilizing regular expressions (Regex) to verify email formatting prior to submission.
- Real-Time Utilities: Live dynamic clock in the footer and randomized UI accent color generator.
- Responsive Design: Layouts engineered with CSS Grid, Flexbox, and media queries to support desktop, tablet, and mobile displays.


## Tech Stack

- Markup: Semantic HTML5, Canvas API
- Styling: Modern CSS3 (CSS Grid, Flexbox, Keyframe Animations, CSS Custom Properties / Variables)
- Scripting: Vanilla JavaScript (ES6+, Fetch API, LocalStorage, DOM API, Event Handling)
- Data Source: JSON (users.json)


## Repository Structure

```text
├── photos/                 # Directory containing all project assets and images
├── index.html              # Homepage with hero section, recipe grid, and login modal
├── retete.html             # Full recipe catalog page
├── contact.html            # Contact inquiry form with client-side validation
├── reteta-tort.html        # Chocolate cake detailed recipe
├── reteta-tiramisu.html    # Tiramisu detailed recipe
├── reteta-cheesecake.html  # Classic cheesecake detailed recipe
├── reteta-brownies.html    # Chocolate brownies detailed recipe
├── reteta-chec.html        # Marble cake detailed recipe
├── reteta-tarta.html       # Fruit tart detailed recipe
├── style.css               # Core styling, themes, animations, and responsive rules
├── grid.css                # CSS Grid layout architecture
├── script.js               # Application logic, DOM handling, auth, and state management
├── users.json              # Mock user account dataset for login validation
└── README.md               # Technical documentation
