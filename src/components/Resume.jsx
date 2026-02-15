const Resume = () => {
  const resumeURL = new URL(
    "../assets/ArshathParvesh_Resume.pdf",
    import.meta.url,
  ).href;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeURL;
    link.download = "Arshath_Parvesh_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-gradient-to-br from-[#1f1f1f] via-[#252525] to-[#1a1a1a] text-gray-200 min-h-screen">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl md:text-6xl font-light">
          Hello,{" "}
          <span className="text-emerald-400 font-semibold">
            Arshath parvesh
          </span>
        </h1>

        <p className="mt-4 text-xl md:text-2xl text-gray-400">
          Full Stack Developer & UI/UX Designer
        </p>

        <p className="mt-6 max-w-2xl text-gray-400 leading-relaxed">
          Passionate Full Stack Developer skilled in React.js, JavaScript, Core
          Java and modern web technologies. I build scalable, high-performance
          applications with clean and intuitive UI.
        </p>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-8 px-8 py-3 border border-emerald-400 text-emerald-400 rounded-lg hover:bg-emerald-400 hover:text-black transition-all duration-300"
        >
          Download Resume
        </button>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10 text-emerald-400">
            Experience
          </h2>

          <div className="space-y-6">
            <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-emerald-400 transition">
              <h3 className="text-xl font-semibold text-white">
                Full Stack Developer – Intellect Design Arena Ltd
              </h3>
              <p className="text-gray-500 mb-4">Aug 2022 – Present | Chennai</p>

              <ul className="space-y-2 text-gray-400">
                <li>• Developed CANVAS fintech framework</li>
                <li>• Built low-code web & mobile platform</li>
                <li>• Developed scalable React.js applications</li>
                <li>• Backend development using Core Java</li>
                <li>• Integrated REST APIs & AI chatbot</li>
                <li>• Implemented blockchain technology</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10 text-emerald-400">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillCard
              title="Languages"
              skills={["JavaScript (ES6+)", "Core Java"]}
            />
            <SkillCard
              title="Frontend"
              skills={["React.js", "HTML5", "CSS3", "Bootstrap", "jQuery"]}
            />
            <SkillCard
              title="Tools"
              skills={["Git", "GitHub", "VS Code", "JIRA", "IntelliJ"]}
            />
            <SkillCard
              title="Others"
              skills={["REST APIs", "Responsive Design", "Agile"]}
            />
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-10 text-emerald-400">
            Education
          </h2>

          <div className="space-y-4 text-gray-400">
            <p>
              <span className="text-white font-medium">
                B.Sc Software System
              </span>{" "}
              – Sri Krishna Arts and Science College (2019–2022)
            </p>
            <p>CGPA: 7.8</p>
            <p>HSC: 64.8% | SSLC: 88.8%</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="py-10 border-t border-gray-800 text-center text-gray-500">
        <p>Email: arshath873@gmail.com</p>
        <p>Phone: +91 7867038911</p>
        <div className="mt-4 space-x-6">
          <a
            href="https://www.linkedin.com/in/arshath-parvesh-m-618490189"
            className="hover:text-emerald-400 transition"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Arshath-parvesh"
            className="hover:text-emerald-400 transition"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({ title, skills }) => (
  <div className="bg-[#2a2a2a] p-6 rounded-xl border border-gray-800 hover:border-emerald-400 transition">
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    <ul className="space-y-2 text-gray-400">
      {skills.map((skill, index) => (
        <li key={index}>• {skill}</li>
      ))}
    </ul>
  </div>
);

export default Resume;
