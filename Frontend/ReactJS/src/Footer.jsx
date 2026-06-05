import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            © {new Date().getFullYear()} All Rights Reserved | React Demo App
        </footer>
    );
}

export default Footer;