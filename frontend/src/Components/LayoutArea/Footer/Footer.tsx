import { Copyright } from "@mui/icons-material";
import "./Footer.css";

function Footer(): JSX.Element {
    
    return (
        <div className="Footer">
			 <Copyright sx={{ mt: 5 }}   />
             <span>Your Dream Vacation</span>
             <span>{}</span>
             
        </div>
        
    );
}

export default Footer;
