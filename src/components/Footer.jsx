import { Link } from "react-router-dom";

export default function Footer(props) {
    console.log(props);
        
    return (
        <footer>
        <h1>Footer.JSX</h1>
        {props.children}
        <a href="#" target="_blank" title="Visit Christian's Github">Github</a>
        <a href="#" target="_blank" title="Visit Christian's LinkedIn">LinkedIn</a>
        <a href="#" target="_blank" title="Visit Christian's Indeed">Indeed</a>
        <a href="#" target="_blank" title="Visit Christian's Twitter">Twitter</a>
        <a href="#" target="_blank" title="Visit Christian's Instagram">Instagram</a>
        <a href="#" target="_blank" title="Visit Christian's Spotify">Spotify</a>
        <h5>Website by Christian Palacios 2023</h5>
        </footer>
    );
    }