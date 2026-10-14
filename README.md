# 👗 Outfitly - Smart Outfit Planner
### College Web Technologies & Modern Front-End Lab Practicals (13 Weeks)

Welcome to **Outfitly**, a complete 13-week laboratory project centered on an intelligent digital wardrobe and outfit planner system. Every practical in this repository has been structured separately with clean code, detailed explanations, and runnable files tailored for college lab record submissions.

---

## 📚 Syllabus & Practicals Index

| Week | Practical Topic | Folder Location | Technologies Used | How to Run |
|:---:|---|---|---|---|
| **01** | HTML static home and login pages | [`week-01-html-pages/`](file:///week-01-html-pages/) | HTML5 Semantic Tags | Open `index.html` in browser |
| **02** | HTML registration form with basic input validation | [`week-02-html-registration/`](file:///week-02-html-registration/) | HTML5 Forms & Native Validation | Open `register.html` in browser |
| **03** | Inline, internal, and external CSS | [`week-03-css-styling/`](file:///week-03-css-styling/) | CSS3 (Inline, Internal `<style>`, External `.css`) | Open `index.html` in browser |
| **04** | JavaScript registration form validation | [`week-04-js-form-validation/`](file:///week-04-js-form-validation/) | JavaScript ES6, RegEx, DOM Events | Open `index.html` in browser |
| **05** | HTML, CSS, and JavaScript outfit catalogue | [`week-05-outfit-catalogue/`](file:///week-05-outfit-catalogue/) | JavaScript DOM API, Array methods, CSS Grid | Open `index.html` in browser |
| **06** | XML file containing outfit information | [`week-06-xml-outfit-data/`](file:///week-06-xml-outfit-data/) | XML 1.0 (Well-Formed Schema) | Open `outfits.xml` in browser |
| **07** | DTD to validate the XML file | [`week-07-xml-dtd-validation/`](file:///week-07-xml-dtd-validation/) | XML + External DTD Schema Validation | Open in XML viewer / browser |
| **08** | Fetch API to load text asynchronously | [`week-08-fetch-text/`](file:///week-08-fetch-text/) | Fetch API, `async/await`, `response.text()` | Run via VS Code Live Server |
| **09** | Fetch API to retrieve and parse JSON/XML data | [`week-09-fetch-json-xml/`](file:///week-09-fetch-json-xml/) | Fetch API, `response.json()`, `DOMParser` | Run via VS Code Live Server |
| **10** | Fetch API POST request to send data | [`week-10-fetch-post/`](file:///week-10-fetch-post/) | Fetch API POST, JSON payload serialization | Run via VS Code Live Server |
| **11** | TypeScript classes, interfaces, and functions | [`week-11-typescript-basics/`](file:///week-11-typescript-basics/) | TypeScript 5.x, Generics, OOP | Run `node dist/outfit.js` or `index.html` |
| **12** | Angular components, data binding, and directives | [`week-12-angular-basics/`](file:///week-12-angular-basics/) | Angular 17+ Standalone Components, Directives | Run `npm start` in folder |
| **13** | Angular forms, routing, and services | [`week-13-angular-advanced/`](file:///week-13-angular-advanced/) | Angular Reactive Forms, Routing, Services | Run `npm start` in folder |

---

## 🚀 Quick Execution Guide

### Weeks 1 through 7 (Standard Static Front-End & XML)
1. Navigate into any folder (e.g., `week-01-html-pages` through `week-07-xml-dtd-validation`).
2. Double-click the `.html` or `.xml` file to open it directly in any modern web browser (Google Chrome, Microsoft Edge, or Mozilla Firefox).

### Weeks 8 through 10 (Fetch API & Asynchronous Network Calls)
> **Note for College Labs:** Browsers restrict asynchronous `fetch()` requests on local `file:///` URLs due to CORS security rules.
1. Open the project in **VS Code**.
2. Right-click `index.html` in either `week-08`, `week-09`, or `week-10` and select **"Open with Live Server"**.
3. *(Alternative)*: From the folder in terminal, run `npx http-server` or `python -m http.server 8000`.

### Week 11 (TypeScript Classes, Interfaces & Functions)
```powershell
cd week-11-typescript-basics
# To recompile source code:
npx -p typescript tsc -p .
# To execute via Node.js runtime:
node dist/outfit.js
# Or double-click index.html to view on screen
```

### Week 12 (Angular Components, Data Binding & Directives)
```powershell
cd week-12-angular-basics
npm install        # One-time install
npm start          # Runs development server on http://localhost:4200/
```

### Week 13 (Angular Forms, Routing & Services)
```powershell
cd week-13-angular-advanced
npm install        # One-time install
npm start          # Runs development server on http://localhost:4200/
```

---

## 📁 Repository Directory Structure

```text
Outfitly/
├── README.md                              <-- Master project index
├── week-01-html-pages/                    <-- Practical 1: Static HTML Home & Login
│   ├── index.html
│   ├── login.html
│   └── README.md
├── week-02-html-registration/             <-- Practical 2: HTML5 Form Validation
│   ├── register.html
│   └── README.md
├── week-03-css-styling/                   <-- Practical 3: Inline, Internal & External CSS
│   ├── index.html
│   ├── styles.css
│   └── README.md
├── week-04-js-form-validation/            <-- Practical 4: JavaScript Form Validation
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── week-05-outfit-catalogue/              <-- Practical 5: JS Outfit Catalogue & Filter
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── week-06-xml-outfit-data/               <-- Practical 6: Well-formed XML Outfit Data
│   ├── outfits.xml
│   ├── view-outfits.html
│   └── README.md
├── week-07-xml-dtd-validation/            <-- Practical 7: DTD Schema Validation
│   ├── outfits.dtd
│   ├── outfits.xml
│   ├── validate-demo.html
│   └── README.md
├── week-08-fetch-text/                    <-- Practical 8: Fetch API Async Text
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── daily-tip.txt
│   ├── fabric-care.txt
│   └── README.md
├── week-09-fetch-json-xml/                <-- Practical 9: Fetch JSON & XML Parsing
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── outfits.json
│   ├── outfits.xml
│   └── README.md
├── week-10-fetch-post/                    <-- Practical 10: Fetch POST Request
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── week-11-typescript-basics/             <-- Practical 11: TypeScript Classes & Interfaces
│   ├── tsconfig.json
│   ├── package.json
│   ├── src/outfit.ts
│   ├── dist/outfit.js
│   ├── index.html
│   └── README.md
├── week-12-angular-basics/                <-- Practical 12: Angular Components & Directives
│   ├── src/app/
│   │   ├── models/outfit.model.ts
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   └── outfit-card/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   └── app.component.css
│   └── README.md
└── week-13-angular-advanced/              <-- Practical 13: Angular Forms, Routing & Services
    ├── src/app/
    │   ├── models/outfit.model.ts
    │   ├── services/outfit.service.ts
    │   ├── components/navbar/
    │   ├── pages/
    │   │   ├── home/
    │   │   ├── catalogue/
    │   │   └── add-outfit/
    │   ├── app.routes.ts
    │   ├── app.component.ts
    │   └── app.component.html
    └── README.md
```

---

## 🎓 College Practical Record Notes

Every practical folder includes an individualized `README.md` containing:
1. **Aim / Objective** of the experiment.
2. **Technologies & Standards Used**.
3. **Concepts Demonstrated**.
4. **Step-by-step Execution Instructions**.
5. **Expected Output & Test Cases**.

You can directly copy the code and documentation into your college practical observation/record book.
