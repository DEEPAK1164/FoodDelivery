// Footer component for footer section
const Footer = () => {
  function getYear() {
    return new Date().getFullYear();
}
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/deepak-maurya-374222237" target="_blank" title="Deepak Maurya's Linkedin Profile">
          Deepak Maurya
        </a>
        <i className="fa-solid fa-copyright"></i>{getYear()}
        <strong>
          Ca<span>tering</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;
  