const Dropdown = ({ children, gopen }) => {
    if (!gopen) return null
    return (
        <>
        {children}
        </>
    );
}
 
export default Dropdown;