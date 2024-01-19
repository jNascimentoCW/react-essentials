// export default function TabButton({ children, onClick, isSelected }) {
export default function TabButton({ children, isSelected, ...props }) {
    return (
        <li>
            {/* <button
                className={isSelected ? "active" : "undefined"}
                onClick={onClick}
            > */}
            <button className={isSelected ? "active" : "undefined"} {...props}>
                {children}
            </button>
        </li>
    );
}
