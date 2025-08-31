document.addEventListener('DOMContentLoaded', () => {
    const prompts = `
HTML/CSS Website Development 

Create a fully responsive e-commerce product page using semantic HTML5 and CSS3 with Flexbox layout. Implement a mobile-first approach with hamburger menu navigation that transforms to standard navigation at 768px breakpoint.
Build a CSS animation portfolio piece that demonstrates mastery of keyframes, transforms, and transitions. Include at least 3 different animation sequences that trigger on scroll using only CSS (no JavaScript).
Develop a fully accessible login form (WCAG 2.1 compliant) with proper ARIA labels, error validation states, and focus management using only HTML and CSS.
Create a responsive photo gallery with lightbox functionality using CSS Grid. Implement hover effects, responsive image sizing, and proper aspect ratio preservation without JavaScript.
Build a multi-column blog layout with CSS Grid that features a sticky sidebar, responsive typography, and print-friendly media queries.
Implement a pure CSS animated loading spinner with 5 different animation variations that respond to different states (loading, success, error, etc.).
Create a responsive pricing table with comparison features using CSS variables for theming. The table should collapse appropriately on mobile and include hover effects on desktop.
Develop a CSS-only dark/light mode toggle that persists user preference using CSS variables and localStorage (via minimal inline JavaScript for storage only).
Build a responsive navigation bar with dropdown menus that meets accessibility standards, includes skip navigation links, and works in all major browsers.
Create a responsive image carousel using only HTML and CSS (no JavaScript) with proper keyboard navigation support and ARIA roles for accessibility.

JavaScript/Three.js 3D Physics

Implement a basic physics simulation using Three.js and Physijs where multiple geometric shapes fall and collide with realistic physics properties. 
Create a JavaScript 3D physics demo using Ammo.js and Three.js that demonstrates rigid body dynamics with at least 5 interacting objects with different physical properties. 
Build a Three.js scene with realistic gravity simulation where objects interact with proper collision detection and response using a physics engine. 
Develop a JavaScript physics simulation that demonstrates cloth physics in Three.js, allowing user interaction through mouse events to manipulate the fabric.
Create a 3D ball maze game using Three.js where the player tilts the maze (via mouse or device orientation) to navigate a ball to the goal, incorporating proper physics.
Implement a vehicle physics simulation in Three.js with working suspension, wheel rotation, and realistic movement on varied terrain.
Build a JavaScript 3D physics demo that simulates water effects using particle systems in Three.js with realistic object buoyancy and fluid dynamics.
Create a destruction simulation in Three.js where a structure collapses with realistic physics when a force is applied, using appropriate physics libraries. 
Develop a Three.js scene with soft body physics simulation, demonstrating deformable objects that interact with rigid bodies in a realistic manner.
Implement a JavaScript physics simulation that demonstrates rope physics in Three.js with proper tension, collision, and user interaction capabilities.

Python/Pygame Physics

Create a 2D physics simulation in Python using Pygame that demonstrates accurate gravity, collision detection, and momentum conservation with at least 10 interacting objects. 
Build a particle system simulation in Pygame that demonstrates fluid dynamics with adjustable parameters for viscosity, density, and external forces.
Implement a 2D ragdoll physics system in Pygame with proper joint constraints and realistic movement when subjected to forces.
Create a Python physics simulation using Pygame that demonstrates realistic projectile motion with air resistance, variable gravity, and collision response.
Build a 2D platformer physics engine from scratch in Python/Pygame that handles slopes, moving platforms, and proper character movement physics.
Implement a soft body physics simulation in Pygame using a mass-spring system that demonstrates realistic deformation and collision response.
Create a Python physics simulation that demonstrates orbital mechanics using Pygame, allowing users to adjust mass, velocity, and gravitational constants.
Build a 2D fluid simulation in Pygame that demonstrates realistic water behavior with surface tension, buoyancy, and object interaction.
Implement a 2D vehicle physics simulation in Pygame with working suspension, wheel friction, and realistic handling characteristics.
Create a non-spherical collision detection system in Pygame using pixel-perfect collision or polygon-based physics for irregular shapes. 

Java Mathematics 

Write a Java program that implements the Fast Fourier Transform algorithm with visualization of the frequency spectrum for input audio data.
Create a Java application that solves systems of linear equations using LU decomposition, with step-by-step explanation of the matrix operations.
Implement Dijkstra's algorithm in Java with visualization of the shortest path calculation on a weighted graph, including animation of the search process.
Write a Java program that generates and renders fractals (Mandelbrot or Julia sets) with adjustable parameters and zoom functionality.
Create a Java application that implements the RSA encryption algorithm with visualization of the mathematical operations involved in key generation.

Advanced Cross-Technology Benchmarks

Build a full-stack application where a Python backend (Flask) processes complex mathematical optimizations, with results visualized in a Three.js 3D physics simulation in the frontend.
Create a web application that allows users to design 2D physics simulations in the browser (using HTML5 Canvas), with the ability to export the simulation parameters to a Java-based high-precision solver.
Implement a machine learning model in Python (TensorFlow/PyTorch) that predicts 3D physics outcomes, with results displayed in an interactive Three.js visualization that allows comparison with actual physics simulations.
Develop a responsive web application using HTML/CSS/JavaScript that allows users to input mathematical problems, with a Java backend solving complex equations and returning step-by-step solutions with visualizations.
Create a hybrid application that uses Python for mathematical computation, Java for complex algorithm processing, and Three.js for 3D visualization of physics simulations, with all components communicating via REST API.

Reasoning and logic

- Solve: Three mislabeled fruit boxes (Apples, Oranges, Mixed). Every label is wrong. Choose one fruit from one box to relabel all; explain steps.  
- Plan with constraints: Allocate a $8k security budget over 90 days with 10 eng-days/month and no downtime; provide week-by-week actions and rationale.  
- Deductive puzzle: If all A are B, some B are C, and no C are D, can some A be not D? Show the full logical derivation.  
- Scheduling: Four people with overlapping constraints; produce three valid 1-hour meeting slots and justify each conflict resolution.  
- Hypothesis testing: Engagement down 15% after feature release, campaign, and competitor price cut. Propose ranked hypotheses and an experiment plan.

General code review

Act as a senior engineer. Review the following code for correctness, readability, maintainability, and testability. Identify issues by severity (blocker/major/minor) and propose concrete fixes with short justifications.
Produce a structured review with sections: Summary, Strengths, Risks, Bugs, Design Concerns, Naming/Style, Tests Missing, Suggested Refactors. End with a prioritized fix list and estimated effort.
Evaluate adherence to team standards (lint rules, naming, layering). Point out deviations and suggest changes with code diffs. Include at least three targeted unit tests to add.
For each function, list preconditions, postconditions, and invariants inferred from the code. Flag any violations or missing checks and show how to enforce them.
Identify dead code, feature flags past expiry, or unreachable branches. Propose a safe removal plan and tests ensuring no behavior change.

Explain Using Analogies

"Explain the concept of (concept/theory) using an analogy or comparison to something familiar. Make it relatable and easy to understand with clear examples."
"Create a quick reference guide for (skill/subject) that includes essential formulas, key points, and concise summaries for easy review."
"Suggest interactive activities or exercises that will help me actively engage with and better understand (topic/skill). Include step-by-step instructions and expected outcomes."
"Provide real-world scenarios or applications where I can apply (concept/skill) to reinforce my learning. Include detailed examples and practical exercises."
"List common mistakes or pitfalls to avoid when learning (skill/subject) and provide strategies for overcoming them. Include tips for maintaining good practices."
"Design a daily practice routine to help me steadily improve in (skill/subject) over time. Include specific exercises, time allocations, and progression milestones."
"Create mnemonic devices to help me remember important information related to (topic/subject). Explain how each mnemonic works and provide examples."
"Break down (skill/subject) into small, achievable goals that will keep me motivated and on track. Include a timeline and criteria for measuring success."
"Suggest ways to find or create a study group or learning community to practice and discuss (skill/subject) with peers. Include strategies for effective group learning."
"Set up a spaced repetition schedule to review and retain information for (topic/subject). Include intervals, review methods, and tips for long-term retention."
"Write a math-intensive task: Derive the formula for the volume of a sphere."
    };

    let currentSection = null;

    prompts.split('\n').forEach(line => {
        line = line.trim();
        if (!line) return;

        if (line === 'HTML/CSS Website Development') {
            currentSection = sections['html-css'];
        } else if (line === 'JavaScript/Three.js 3D Physics') {
            currentSection = sections['three-js'];
        } else if (line === 'Python/Pygame Physics') {
            currentSection = sections['pygame'];
        } else if (line === 'Java Mathematics') {
            currentSection = sections['java-math'];
        } else if (line === 'Advanced Cross-Technology Benchmarks') {
            currentSection = sections['advanced'];
        } else if (line === 'Reasoning and logic') {
            currentSection = sections['reasoning'];
        } else if (line === 'General code review') {
            currentSection = sections['code-review'];
        } else if (line === 'Explain Using Analogies') {
            currentSection = sections['analogies'];
        } else {
            if (currentSection) {
                const promptsContainer = currentSection.querySelector('.prompts');
                const ul = promptsContainer.querySelector('ul') || document.createElement('ul');
                if (!promptsContainer.querySelector('ul')) {
                    promptsContainer.appendChild(ul);
                }
                const li = document.createElement('li');
                li.textContent = line;
                ul.appendChild(li);
            }
        }
    });

    const headers = document.querySelectorAll('h2');
    headers.forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });

    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Check for saved dark mode preference
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Save dark mode preference
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.removeItem('dark-mode');
        }
    });
});
