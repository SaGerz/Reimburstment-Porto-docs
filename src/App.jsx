import "./App.css";
import { useState, useEffect, useCallback } from "react";

import login from "./assets/Login.png";

import dashEmployee from "./assets/Dash_employee.png";
import employeeMain from "./assets/Employee_main.png";
import employeeSubmit from "./assets/Employee_submit.png";

import dashManager from "./assets/Dash_manager.png";
import managerMain from "./assets/Manager_main.png";
import managerApprove from "./assets/Manager_approve.png";
import managerReport from "./assets/Manager_report.png";

import dashFinance from "./assets/Dash_finance.png";
import financeMain from "./assets/Finance_main.png";
import financePayment from "./assets/Finance_payment.png";
import financeReport from "./assets/Finance_report.png";

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6L5 9L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const techStack = [
  { abbr: "RJS", name: "React.js" },
  { abbr: "NET", name: "ASP.NET Core" },
  { abbr: "SQL", name: "SQL Server" },
  { abbr: "JWT", name: "JWT Auth" },
  { abbr: "API", name: "REST API" },
  { abbr: "BSP", name: "Bootstrap" },
];

const workflowSteps = [
  "Employee Mengajukan Reimbursement",
  "Status Pending Approval",
  "Manager Melakukan Approval / Rejection",
  "Finance Melakukan Pembayaran",
  "Reimbursement Selesai",
];

const responsibilities = [
  "Mengembangkan Frontend menggunakan React.js",
  "Mengembangkan Backend menggunakan ASP.NET Core",
  "Membuat REST API",
  "Merancang Database SQL Server",
  "Mengimplementasikan JWT Authentication",
  "Mengembangkan Workflow Approval Reimbursement",
  "Mengembangkan Modul Pembayaran Finance",
];

const modules = [
  {
    icon: "👤",
    title: "Modul Employee",
    desc: "Employee dapat membuat pengajuan reimbursement, melihat riwayat, serta memantau status pengajuan.",
    screens: [
      { title: "Dashboard Employee", image: dashEmployee },
      { title: "Daftar Reimbursement", image: employeeMain },
      { title: "Form Pengajuan", image: employeeSubmit },
    ],
  },
  {
    icon: "✅",
    title: "Modul Manager",
    desc: "Manager bertugas melakukan approval atau penolakan terhadap reimbursement yang diajukan employee.",
    screens: [
      { title: "Dashboard Manager", image: dashManager },
      { title: "Daftar Approval", image: managerMain },
      { title: "Approval Reimbursement", image: managerApprove },
      { title: "Laporan Approval", image: managerReport },
    ],
  },
  {
    icon: "💳",
    title: "Modul Finance",
    desc: "Finance bertanggung jawab melakukan pembayaran reimbursement yang disetujui dan menghasilkan laporan.",
    screens: [
      { title: "Dashboard Finance", image: dashFinance },
      { title: "Daftar Pembayaran", image: financeMain },
      { title: "Proses Pembayaran", image: financePayment },
      { title: "Laporan Finance", image: financeReport },
    ],
  },
];

function Lightbox({ image, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-close" onClick={onClose} aria-label="Tutup">✕</div>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt={title} />
        <div className="lightbox-title">{title}</div>
      </div>
    </div>
  );
}

function App() {
  const [lightbox, setLightbox] = useState(null);
  const openLightbox = useCallback((image, title) => setLightbox({ image, title }), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <div>
      {lightbox && (
        <Lightbox image={lightbox.image} title={lightbox.title} onClose={closeLightbox} />
      )}
      {/* NAV PILL */}
      <div className="nav-dot">
        <span className="dot" />
        Sistem Reimbursement
      </div>

      <div className="container">

        {/* HERO */}
        <section className="hero">
          <div className="hero-badge">
            <span>💼</span>
            Web Application
          </div>

          <h1>Sistem Manajemen<br />Reimbursement</h1>

          <p>
            Aplikasi berbasis web untuk mengelola proses pengajuan reimbursement
            karyawan — mulai dari pengajuan, approval manager, hingga pembayaran
            oleh finance.
          </p>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">3</div>
              <div className="label">Role Pengguna</div>
            </div>
            <div className="hero-stat">
              <div className="num">11</div>
              <div className="label">Halaman UI</div>
            </div>
            <div className="hero-stat">
              <div className="num">6</div>
              <div className="label">Teknologi</div>
            </div>
          </div>
        </section>

        {/* TENTANG SISTEM */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 01 — Overview</span>
            <h2>Tentang Sistem</h2>
          </div>
          <div className="about-card">
            <p style={{ color: "var(--text-secondary)", fontSize: "0.97rem", lineHeight: "1.9" }}>
              Sistem ini dikembangkan untuk membantu proses reimbursement karyawan agar lebih
              terstruktur, mudah dipantau, dan terdokumentasi dengan baik melalui alur approval
              yang jelas antar tiga level pengguna: Employee, Manager, dan Finance.
            </p>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 02 — Process</span>
            <h2>Alur Proses Reimbursement</h2>
          </div>

          <div className="workflow">
            {workflowSteps.map((text, i) => (
              <div className="workflow-item" key={i}>
                <div className="step">
                  <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="step-text">{text}</div>
                </div>
                {i < workflowSteps.length - 1 && (
                  <div className="connector" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* TECH STACK */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 03 — Stack</span>
            <h2>Teknologi yang Digunakan</h2>
          </div>

          <div className="tech-grid">
            {techStack.map((tech) => (
              <div className="tech-card" key={tech.abbr}>
                <div className="tech-icon">{tech.abbr}</div>
                <div className="tech-name">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* LOGIN */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 04 — Auth</span>
            <h2>Halaman Login</h2>
            <p className="section-desc">
              Autentikasi pengguna menggunakan JWT dengan role-based access control.
            </p>
          </div>

          <div className="login-wrapper">
            <div className="login-frame" onClick={() => openLightbox(login, "Login Sistem")}>
              <img src={login} alt="Login Sistem" />
              <div className="frame-label">
                <div className="frame-label-dot" />
                <span>Login Sistem</span>
                <span className="frame-zoom-hint">🔍 Klik untuk zoom</span>
              </div>
            </div>
          </div>
        </section>

        {/* MODULES */}
        {modules.map((mod, idx) => (
          <section className="section" key={mod.title}>
            <div className="section-header">
              <span className="section-tag">// {String(idx + 5).padStart(2, "0")} — Module</span>
              <h2>{mod.title}</h2>
            </div>

            <div className="module-header">
              <div className="module-icon">{mod.icon}</div>
              <div className="module-info">
                <h3>{mod.title}</h3>
                <p>{mod.desc}</p>
              </div>
            </div>

            <div className="screenshots">
              {mod.screens.map((item) => (
                <div
                  className="screenshot-card"
                  key={item.title}
                  onClick={() => openLightbox(item.image, item.title)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(item.image, item.title)}
                >
                  <div className="img-wrapper">
                    <img src={item.image} alt={item.title} />
                    <div className="img-zoom-icon">🔍</div>
                  </div>
                  <h3>{item.title}</h3>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* RESPONSIBILITIES */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 08 — Contributions</span>
            <h2>Peran Saya dalam Pengembangan</h2>
          </div>

          <div className="resp-grid">
            {responsibilities.map((item, i) => (
              <div className="resp-item" key={i}>
                <div className="resp-check">
                  <CheckIcon />
                </div>
                <div className="resp-text">{item}</div>
              </div>
            ))}
          </div>
        </section>

        {/* CHALLENGE */}
        <section className="section">
          <div className="section-header">
            <span className="section-tag">// 09 — Challenges</span>
            <h2>Tantangan Pengembangan</h2>
          </div>

          <div className="challenge-card">
            <p>
              Tantangan utama dalam pengembangan sistem ini adalah memastikan proses
              reimbursement berjalan sesuai alur bisnis melalui beberapa level pengguna
              yang memiliki hak akses dan tanggung jawab berbeda — mulai dari employee,
              manager, hingga finance — dengan state management yang konsisten di setiap
              transisi status.
            </p>
          </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p>Sistem Manajemen Reimbursement — React.js + ASP.NET Core + SQL Server</p>
        </div>
      </footer>
    </div>
  );
}

export default App;