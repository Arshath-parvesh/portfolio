import { faGithub, faLinkedin, faReact, faJava, faJs, faHtml5, faCss3,faNodeJs, faPython } from "@fortawesome/free-brands-svg-icons";

const WHAT_I_DO = ['UI/UX Design', 'Mobile App Development', 'Backend Development', 'Frontend Development', 'Database Management', 'Cloud Computing', 'DevOps', 'Cybersecurity', 'Data Analysis', 'Full Stack Development'];
const CONTACT_INFO = ['Email: arshath873@gmail.com', 'Phone: +91 7867038911'];
const SOCILA_MEDIA_LINKS = {linkedIn : {link:'linkedin.com/in/arshath-parvesh-618490189/', icon : faLinkedin}, github: {link:'https://github.com/Arshath-parvesh', icon : faGithub}};

export const HomeConstants = {
    WHAT_I_DO,
    CONTACT_INFO,
    SOCILA_MEDIA_LINKS
};

const ABOUT_ME = `Hello! I'm Arshath Parvesh, a passionate web developer with a knack for creating dynamic and responsive web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building user-friendly interfaces and seamless user experiences. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring the latest tech trends or indulging in my love for photography. Let's connect and create something amazing together!`;
const SKILLS = {React : {class : 'text-cyan-400', icon : faReact}, Java : {class : 'text-orange-400', icon : faJava}, JS : {class : 'text-yellow-400', icon : faJs}, Html5 : {class : 'text-red-400', icon : faHtml5}, Css3 : {class : 'text-blue-400', icon : faCss3}};
const BUILDING = {NodeJs : {class : 'text-green-400', icon : faNodeJs}, Python : {class : 'text-yellow-400', icon : faPython}};
export const aboutConstants = {
    ABOUT_ME,
    SKILLS,
    BUILDING
}