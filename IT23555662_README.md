# Sinhala Transliteration Automation Testing

## 📌 Project Overview

This project demonstrates automated testing of a Sinhala transliteration web application using Playwright.

The system converts English text into Sinhala text. Test cases are created and validated using both manual (Excel) and automated (Playwright) approaches.

---

## 🧪 Testing Approach

### 1. Manual Testing

* 50 test cases created in Excel
* Includes:

  * Test Case ID
  * Input Type
  * Input Text
  * Expected Output
  * Actual Output
  * Status (Pass/Fail)

---

### 2. Automated Testing

* Tool: Playwright
* Language: JavaScript
* Test File: `tests/test.spec.js`

Automated scenarios include:

* Valid Sinhala conversion
* Special characters
* Mixed language input
* Edge cases

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

---

## ▶️ Run Tests

```bash
npx playwright test --headed
```

---

## 📂 Project Structure

```
Assignment1_Project/
│
├── tests/
│   └── test.spec.js
│
├── Assignment1_Test_Cases.xlsx
├── package.json
├── README.md
```

---

## 🌐 Tested Website

https://www.pixelssuite.com/chat-translator

---

## 📊 Results

* Automation successfully executed
* Sample test cases validated using Playwright
* Full test coverage documented in Excel

---

## 👨‍💻 Author

Lasitha Rathnayaka
