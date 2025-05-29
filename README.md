# Mortgage Calculator

A web application built with React and Vite to calculate monthly mortgage payments and the total amount to be paid, allowing you to compare between "Repayment" and "Interest Only" mortgage types.

## Features
- Interactive mortgage calculator.
- Selection between two mortgage types: Repayment and Interest Only.
- Field validation and user-friendly error messages.
- Clear and visual results.
- Modern interface using Tailwind CSS.

## Installation
1. Clone this repository or download the files.
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser at `http://localhost:5173` (or the port indicated in the terminal).

## Usage
1. Enter the mortgage amount, term in years, and interest rate.
2. Select the mortgage type.
3. Click on "Calculate Repayments" to see the results.
4. Use "Clear All" to reset the form.

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Main Project Structure
- `src/App.jsx`: Main application component.
- `src/components/`: Reusable components (form, results, illustrations).
- `src/utils/`: Calculation logic and validations.
- `public/assets/`: Images, icons, and fonts.

## Available Scripts
- `npm run dev`: Starts the development server.
- `npm run build`: Builds the production version.
- `npm run preview`: Previews the production build.

