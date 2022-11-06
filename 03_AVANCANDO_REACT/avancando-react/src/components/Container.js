const Container = ({ children, text }) => {
    return (
        <div>
            <p>Container</p>
            {children}
            <p>{text}</p>
        </div>
    )
}

export default Container