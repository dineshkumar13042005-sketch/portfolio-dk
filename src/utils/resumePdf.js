// Professional PDF Resume Generator Utility for Dineshkumar S

export function generateResumePdf() {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Please allow popups to download/print the PDF resume.');
    return;
  }

  printWindow.document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dineshkumar_S_Resume</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', -apple-system, sans-serif;
      color: #0f172a;
      background: #ffffff;
      padding: 40px 50px;
      line-height: 1.5;
    }
    .header {
      text-align: center;
      border-bottom: 2px solid #6366f1;
      padding-bottom: 16px;
      margin-bottom: 22px;
    }
    .name {
      font-size: 26px;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.5px;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      color: #4f46e5;
      margin-top: 4px;
    }
    .contact-info {
      font-size: 12.5px;
      color: #475569;
      margin-top: 8px;
    }
    .section {
      margin-bottom: 20px;
    }
    .section-title {
      font-size: 13.5px;
      font-weight: 700;
      color: #4f46e5;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      border-bottom: 1px solid #e2e8f0;
      padding-bottom: 4px;
      margin-bottom: 10px;
    }
    .objective-text {
      font-size: 12.5px;
      color: #334155;
    }
    .item {
      margin-bottom: 12px;
    }
    .item-header {
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 13px;
      color: #0f172a;
    }
    .item-sub {
      font-size: 12px;
      color: #475569;
      font-weight: 500;
      margin-top: 2px;
    }
    .item-desc {
      font-size: 12px;
      color: #334155;
      margin-top: 4px;
    }
    ul {
      margin: 4px 0 0 18px;
      padding: 0;
    }
    li {
      font-size: 12px;
      color: #334155;
      margin-bottom: 3px;
    }
    @media print {
      body { padding: 20px 30px; }
      @page { margin: 1cm; size: A4; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="name">DINESHKUMAR S</div>
    <div class="title">Front-End Developer | AI & Python</div>
    <div class="contact-info">
      +91 7010957511 &bull; dineshkumar13042005@gmail.com &bull; Coimbatore, India
    </div>
  </div>

  <div class="section">
    <div class="section-title">Career Objective</div>
    <div class="objective-text">
      Motivated Front-End developer with a B.Sc. in Computer Science (Artificial Intelligence) and currently pursuing M.Sc. Computer Science. Possess a strong foundation in HTML, CSS, JavaScript, MongoDB, and SQL, complemented by hands-on Python and data science experience. Passionate about building responsive, user-friendly web applications and solving real-world problems through code.
    </div>
  </div>

  <div class="section">
    <div class="section-title">Education</div>
    
    <div class="item">
      <div class="item-header">
        <span>M.Sc. Computer Science</span>
        <span>Currently Studying</span>
      </div>
    </div>

    <div class="item">
      <div class="item-header">
        <span>B.Sc. Computer Science (Artificial Intelligence)</span>
        <span>2023 &ndash; 2026</span>
      </div>
      <div class="item-sub">PPG College of Arts and Science, Bharathiar University, Coimbatore &bull; Aggregate: 77%</div>
    </div>

    <div class="item">
      <div class="item-header">
        <span>Higher Secondary Certificate (HSC)</span>
        <span>2023</span>
      </div>
      <div class="item-sub">Government Higher Secondary School, Kovilpalayam, Coimbatore &bull; Score: 56%</div>
    </div>

    <div class="item">
      <div class="item-header">
        <span>Secondary School Leaving Certificate (SSLC)</span>
        <span>2021</span>
      </div>
      <div class="item-sub">Achievers Academy Matric Higher Secondary School, Hosur</div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Technical Skills</div>
    <ul>
      <li><strong>Programming Languages:</strong> Python, SQL (Basic)</li>
      <li><strong>Web Development:</strong> HTML, CSS, JavaScript, React.js, MongoDB</li>
      <li><strong>Software & Tools:</strong> MS Word, Excel, PowerPoint, Jupyter Notebook</li>
    </ul>
  </div>

  <div class="section">
    <div class="section-title">Projects</div>

    <div class="item">
      <div class="item-header">
        <span>Driver Drowsiness Detection System</span>
      </div>
      <div class="item-desc">
        Built a real-time driver drowsiness detection system to improve road safety, using Python, OpenCV, and facial landmark detection to track eye movements (Eye Aspect Ratio / EAR) and trigger alerts when drowsiness is detected beyond threshold limits.
      </div>
    </div>

    <div class="item" style="margin-top: 10px;">
      <div class="item-header">
        <span>End-to-End Machine Learning Pipeline with Streamlit Deployment</span>
      </div>
      <div class="item-desc">
        Developed a complete machine learning pipeline covering data preprocessing, feature engineering, model training, evaluation, and prediction with an interactive Streamlit web interface deployment.
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Certifications</div>
    <ul>
      <li>Internet of Things Using Arduino &ndash; NoviTech</li>
      <li>15+ Certifications in Digital Marketing &ndash; Great Learning Academy</li>
      <li>Machine Learning using Python &ndash; Simplilearn</li>
    </ul>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 300);
    }
  </script>
</body>
</html>
  `);
  printWindow.document.close();
}
