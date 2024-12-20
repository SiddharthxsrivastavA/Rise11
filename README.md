File Your Claim Dashboard

Overview:
This project is a responsive "File Your Claim" dashboard designed for users to seamlessly file claims with necessary details. The dashboard adapts to various screen sizes, including desktop, tablet, and mobile views, ensuring a smooth user experience across all devices.

Features:
Step-by-Step Claim Filing Process: Users are guided through a multi-step process to file their claims, from providing preliminary details to payment.

Input Forms:
*Claim Value: Includes fields for contract value and claim value with dynamic validation.
*Place & Language Selection: Allows users to specify the place and language for proceedings.
*Statement Submission: Users can either type their statement or upload it as a PDF.
*Document Upload: Includes options to upload contracts, arbitration agreements, and additional documents (up to 25MB).
*Responsive Design: Optimized for desktop, tablet, and mobile devices.

Approach to Building the Dashboard

Design:
Used a clean and minimalist layout to maintain user focus on essential information.
Tailored each component for clarity and ease of use.

Responsive Implementation:
Developed using HTML, CSS (with utility-first framework like Tailwind CSS), and JavaScript.
Used media queries to ensure optimal display on all devices.

Validation:
Added dynamic validation to ensure users enter correct claim values and other required details.

User Guidance:
Implemented clear labeling, placeholder text, and tooltips to guide users effectively.

Challenges Faced and Resolutions
1. Ensuring Responsiveness Across Devices
Challenge: Designing for varying screen sizes without losing functionality or clarity.
Solution: Utilized Tailwind CSS's responsive utilities and thoroughly tested on different devices.
2. Dynamic Validation
Challenge: Calculating claim value as a percentage of the contract value dynamically.
Solution: Implemented real-time JavaScript validation to provide immediate feedback to users.
3. File Upload Restrictions
Challenge: Limiting upload size and handling errors for large files.
Solution: Integrated file input validation with size checks and provided user-friendly error messages.
Assumptions
Users are expected to input claim values in USD.
Maximum file upload size is restricted to 25MB per document.
The language and place of proceedings default to those specified in the agreement unless stated otherwise.
The statement and document uploads are mandatory to proceed to the next steps.

How to Run the Project

Clone the repository:
git clone https://github.com/your-repo-link.git

Install dependencies:
npm install

Run the development server:
npm run dev

Access the dashboard at http://localhost:3000

Technology Stack

Next.js for front-end development.
Tailwind CSS for styling and responsive design.
JavaScript for interactivity and validation.



