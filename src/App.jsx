import "./App.css";

import loginImg from "./assets/Login.png";
import dashboardImg from "./assets/Dash_employee.png";
import formImg from "./assets/Employee_submit.png";
import managerImg from "./assets/Manager_main.png";
import financeImg from "./assets/Finance_main.png";
// import erdImg from "./assets/erd.png";

function App() {
  const screenshots = [
    {
      title: "Login Page",
      image: loginImg,
    },
    {
      title: "Dashboard",
      image: dashboardImg,
    },
    {
      title: "Create Reimbursement",
      image: formImg,
    },
    {
      title: "Manager Approval",
      image: managerImg,
    },
    {
      title: "Finance Approval",
      image: financeImg,
    },
  ];

  return (
    <div className="container">
      {/* HERO */}
      <section className="hero">
        <h1>Samuel Genaro</h1>
        <h2>Reimbursement Management System</h2>

        <p>
          Web-based reimbursement management application with multi-level
          approval workflow built using React.js and ASP.NET Core.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="section">
        <h2>Project Overview</h2>

        <p>
          Reimbursement Management System is a web application developed to
          simplify employee reimbursement submission and approval processes.
        </p>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <h2>Tech Stack</h2>

        <div className="grid">
          <div className="card">React.js</div>
          <div className="card">ASP.NET Core</div>
          <div className="card">SQL Server</div>
          <div className="card">JWT Authentication</div>
          <div className="card">REST API</div>
          <div className="card">Bootstrap</div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <h2>Main Features</h2>

        <ul>
          <li>Employee reimbursement submission</li>
          <li>Manager approval workflow</li>
          <li>Finance verification process</li>
          <li>Status tracking</li>
          <li>Approval history</li>
          <li>Role based authorization</li>
        </ul>
      </section>

      {/* WORKFLOW */}
      <section className="section">
        <h2>Workflow</h2>

        <div className="workflow">
          <div className="step">Employee</div>
          <div className="arrow">↓</div>

          <div className="step">Submit Reimbursement</div>
          <div className="arrow">↓</div>

          <div className="step">Manager Approval</div>
          <div className="arrow">↓</div>

          <div className="step">Finance Verification</div>
          <div className="arrow">↓</div>

          <div className="step">Completed</div>
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="section">
        <h2>Application Screenshots</h2>

        <div className="screenshots">
          {screenshots.map((item) => (
            <div className="screenshot-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ERD
      <section className="section">
        <h2>Database Design</h2>

        <img src={erdImg} alt="ERD" className="erd" />
      </section> */}

      {/* RESPONSIBILITY */}
      <section className="section">
        <h2>My Responsibilities</h2>

        <ul>
          <li>Frontend Development using React.js</li>
          <li>Backend Development using ASP.NET Core</li>
          <li>Database Design</li>
          <li>REST API Development</li>
          <li>Authentication & Authorization</li>
          <li>Workflow Implementation</li>
        </ul>
      </section>

      {/* CHALLENGE */}
      <section className="section">
        <h2>Technical Challenge</h2>

        <div className="card">
          Implementing multi-level approval workflow while maintaining clear
          reimbursement status tracking and role permissions.
        </div>
      </section>
    </div>
  );
}

export default App;