import "./App.css";

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

function App() {
  const employeeScreens = [
    {
      title: "Dashboard Employee",
      image: dashEmployee,
    },
    {
      title: "Daftar Reimbursement",
      image: employeeMain,
    },
    {
      title: "Form Pengajuan Reimbursement",
      image: employeeSubmit,
    },
  ];

  const managerScreens = [
    {
      title: "Dashboard Manager",
      image: dashManager,
    },
    {
      title: "Daftar Approval",
      image: managerMain,
    },
    {
      title: "Approval Reimbursement",
      image: managerApprove,
    },
    {
      title: "Laporan Approval",
      image: managerReport,
    },
  ];

  const financeScreens = [
    {
      title: "Dashboard Finance",
      image: dashFinance,
    },
    {
      title: "Daftar Pembayaran",
      image: financeMain,
    },
    {
      title: "Proses Pembayaran",
      image: financePayment,
    },
    {
      title: "Laporan Finance",
      image: financeReport,
    },
  ];

  return (
    <div className="container">

      {/* HERO */}
      <section className="hero">
        <h1>Sistem Manajemen Reimbursement</h1>

        <p>
          Aplikasi berbasis web yang digunakan untuk mengelola proses
          pengajuan reimbursement karyawan mulai dari pengajuan,
          approval manager, hingga proses pembayaran oleh finance.
        </p>
      </section>

      {/* LATAR BELAKANG */}
      <section className="section">
        <h2>Tentang Sistem</h2>

        <p>
          Sistem ini dikembangkan untuk membantu proses reimbursement
          karyawan agar lebih terstruktur, mudah dipantau, dan terdokumentasi
          dengan baik melalui alur approval yang jelas.
        </p>
      </section>

      {/* WORKFLOW */}
      <section className="section">
        <h2>Alur Proses Reimbursement</h2>

        <div className="workflow">
          <div className="step">
            Employee Mengajukan Reimbursement
          </div>

          <div className="arrow">↓</div>

          <div className="step">
            Status Pending Approval
          </div>

          <div className="arrow">↓</div>

          <div className="step">
            Manager Melakukan Approval / Rejection
          </div>

          <div className="arrow">↓</div>

          <div className="step">
            Finance Melakukan Pembayaran
          </div>

          <div className="arrow">↓</div>

          <div className="step">
            Reimbursement Selesai
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="section">
        <h2>Teknologi yang Digunakan</h2>

        <div className="grid">
          <div className="card">React.js</div>
          <div className="card">ASP.NET Core Web API</div>
          <div className="card">SQL Server</div>
          <div className="card">JWT Authentication</div>
          <div className="card">REST API</div>
          <div className="card">Bootstrap</div>
        </div>
      </section>

      {/* LOGIN */}
      <section className="section">
        <h2>Halaman Login</h2>

        <div className="screenshots">
          <div className="screenshot-card">
            <img src={login} alt="Login" />
            <h3>Login Sistem</h3>
          </div>
        </div>
      </section>

      {/* EMPLOYEE */}
      <section className="section">
        <h2>Modul Employee</h2>

        <p>
          Employee dapat membuat pengajuan reimbursement,
          melihat riwayat pengajuan, serta memantau status
          reimbursement yang telah diajukan.
        </p>

        <div className="screenshots">
          {employeeScreens.map((item) => (
            <div className="screenshot-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MANAGER */}
      <section className="section">
        <h2>Modul Manager</h2>

        <p>
          Manager bertugas melakukan approval atau penolakan
          terhadap reimbursement yang diajukan oleh employee.
        </p>

        <div className="screenshots">
          {managerScreens.map((item) => (
            <div className="screenshot-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCE */}
      <section className="section">
        <h2>Modul Finance</h2>

        <p>
          Finance bertanggung jawab melakukan pembayaran
          reimbursement yang telah disetujui oleh manager
          serta menghasilkan laporan reimbursement.
        </p>

        <div className="screenshots">
          {financeScreens.map((item) => (
            <div className="screenshot-card" key={item.title}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* TANGGUNG JAWAB */}
      <section className="section">
        <h2>Peran Saya Dalam Pengembangan</h2>

        <ul>
          <li>Mengembangkan Frontend menggunakan React.js</li>
          <li>Mengembangkan Backend menggunakan ASP.NET Core</li>
          <li>Membuat REST API</li>
          <li>Merancang Database SQL Server</li>
          <li>Mengimplementasikan JWT Authentication</li>
          <li>Mengembangkan Workflow Approval Reimbursement</li>
          <li>Mengembangkan Modul Pembayaran Finance</li>
        </ul>
      </section>

      {/* CHALLENGE */}
      <section className="section">
        <h2>Tantangan Pengembangan</h2>

        <div className="card">
          Tantangan utama dalam pengembangan sistem ini adalah
          memastikan proses reimbursement berjalan sesuai alur
          bisnis melalui beberapa level pengguna yang memiliki
          hak akses dan tanggung jawab berbeda.
        </div>
      </section>

    </div>
  );
}

export default App;