import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, TestTube, GitBranch, Award, GraduationCap, Briefcase, ChevronDown } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'skills', 'experience', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Kavi 
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-purple-400'
                        : 'text-gray-300 hover:text-purple-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-gray-700'
                      : 'text-gray-300 hover:text-purple-400 hover:bg-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4YjVjZjYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJWMzRoLTJ6bTAtNHYyaDJWMzBoLTJ6bTAgNHYyaDJWMzRoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="text-center animate-fade-in">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
                KP
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
              Kavi Priya Thiyagarajan
            </h1>

            <p className="text-2xl sm:text-3xl text-purple-300 mb-4">
              QA Engineer | Manual & Automation Testing
            </p>

            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Delivering quality-first solutions with 3.5 years of expertise in eGRC applications
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Contact Me
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="px-8 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all transform hover:scale-105 shadow-lg border border-purple-500/30"
              >
                View Work
              </button>
            </div>

            <div className="flex gap-6 justify-center">
              <a
                href="https://www.linkedin.com/in/kavi-priya-thiyagarajan-2aa09534a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://github.com/kavipriya0508"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110"
              >
                <Github size={28} />
              </a>
            </div>

            <div className="mt-16 animate-bounce">
              <button onClick={() => scrollToSection('about')} className="text-purple-400">
                <ChevronDown size={32} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-purple-500/20">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Detail-oriented <span className="text-purple-400 font-semibold">QA Engineer</span> with <span className="text-purple-400 font-semibold">3.5 years of experience</span> in Manual and Automation Testing at <span className="text-purple-400 font-semibold">Kumaran Systems</span>, with strong domain expertise in <span className="text-purple-400 font-semibold">eGRC (Enterprise Governance, Risk, and Compliance)</span> applications.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Experienced in Capital Adequacy Requirements, Issue Management, Standards, RCSA, Compliance, and Controls modules. Proficient in STLC, defect lifecycle management, automation frameworks, and API testing.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Strong focus on delivering high-quality enterprise solutions in <span className="text-purple-400 font-semibold">Agile environments</span>. I collaborate closely with Business Analysts, Developers, and Stakeholders to manage requirement changes, ensure quality delivery, and drive continuous process improvement.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">3.5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">2</div>
                  <div className="text-gray-400 text-sm">Major Projects</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-4 text-center border border-purple-500/10">
                  <div className="text-3xl font-bold text-purple-400 mb-1">30%</div>
                  <div className="text-gray-400 text-sm">Automation Increase</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold text-purple-300">Programming Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Python</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Java</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold text-blue-300">Automation Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Selenium</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Playwright</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">TestNG</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">PyTest</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Maven</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <TestTube className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold text-purple-300">Testing Types</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">UI Testing</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">API Testing</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Functional</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Regression</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Performance</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <GitBranch className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold text-blue-300">CI/CD & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Jenkins</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">Git</span>
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">GitHub Actions</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <ExternalLink className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold text-purple-300">API & Testing Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Postman</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">JIRA</span>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold text-blue-300">Databases</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-300 rounded-full text-sm border border-blue-500/30">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Briefcase className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-300">Tester</h3>
                  <p className="text-gray-400">Kumaran Systems Pvt Ltd, Chennai</p>
                  <p className="text-sm text-purple-400">November 2022 - Present</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-purple-500/20">
                <h4 className="text-2xl font-semibold text-purple-300 mb-4">Project 1: eGRC - Enterprise Governance, Risk, and Compliance</h4>

                <div className="mb-4">
                  <h5 className="text-lg font-semibold text-blue-300 mb-2">Domain Areas:</h5>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Capital Adequacy</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Issue Management</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Standards</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">RCSA</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Controls</span>
                    <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm border border-purple-500/30">Compliance</span>
                  </div>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Key Responsibilities & Achievements:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Worked as a GRC Functional and Automation Tester on the MetricStream eGRC platform in UAT and QA environments</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Developed comprehensive test strategies, test plans, and detailed test cases aligned with project objectives</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Executed functional, integration, regression, smoke, and sanity testing across multiple GRC modules</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Performed UI automation and API validation to ensure seamless data flow between integrated systems</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Collaborated with development, QA, and business teams to resolve functional and technical issues</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-purple-500/20">
                <h4 className="text-2xl font-semibold text-purple-300 mb-4">Project 2: TAC (Test Automation Center)</h4>

                <div>
                  <h5 className="text-lg font-semibold text-blue-300 mb-3">Key Responsibilities & Achievements:</h5>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Designed and developed automation scripts using Selenium with Python, integrated with the KTAC framework</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span className="font-semibold text-purple-300">Increased overall automation coverage by 30%</span> through creation of regression, connectivity, and client-specific automation test cases
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Implemented automation execution dashboards for improved test monitoring and faster defect identification</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>Integrated automation suites with CI/CD pipelines (Jenkins) for scheduled and on-demand executions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-2">Selenium WebDriver with Python</h3>
              <p className="text-gray-400 text-center text-sm">Udemy</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-2">Postman API Testing</h3>
              <p className="text-gray-400 text-center text-sm">Udemy</p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all transform hover:scale-105">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-purple-300 text-center mb-2">Playwright Python Automation Testing</h3>
              <p className="text-gray-400 text-center text-sm">Udemy</p>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-purple-500/20">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-purple-300 mb-2">Bachelor of Technology</h3>
                  <p className="text-xl text-blue-300 mb-2">Information Technology</p>
                  <p className="text-gray-400 mb-1">Kongunadu College of Engineering and Technology</p>
                  <p className="text-gray-400">Tamil Nadu</p>
                  <p className="text-purple-400 mt-2 font-semibold">Graduated: 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8 shadow-xl border border-purple-500/20">
              <p className="text-gray-300 text-center text-lg mb-8">
                I'm always open to discussing new opportunities, collaborations, or just connecting with fellow professionals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="mailto:kavithiyagarajan05@gmail.com"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 border border-purple-500/10 hover:border-purple-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-purple-300">kavithiyagarajan05@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+916385411484"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 border border-purple-500/10 hover:border-purple-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-purple-300">+91-6385411484</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/kavi-priya-thiyagarajan-2aa09534a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 border border-purple-500/10 hover:border-purple-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Linkedin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="text-purple-300">Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://github.com/kavipriya0508"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-900 transition-all transform hover:scale-105 border border-purple-500/10 hover:border-purple-500/30"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Github className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="text-purple-300">View my projects</p>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-gray-400 justify-center">
                <MapPin size={20} />
                <span>Chennai, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 border-t border-purple-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            2026 Kavi Priya Thiyagarajan. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
