import Header from "./Header";

export default function MakeHeader()
{
    const domNode = document.getElementById("Header");
    const root = ReactDOM.createRoot(domNode);
    root.render(<Header />);

}