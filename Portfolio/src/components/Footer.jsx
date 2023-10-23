export default function Footer(props) {
    console.log(props);
        
    return (
        <footer>
        <h1>Footer.JSX</h1>
        {props.children}
        </footer>
    );
    }