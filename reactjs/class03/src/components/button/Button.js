function Button(props) {
    return (
        <div className="home__buttons">
            <a href="#" className="button">{props.title}</a>
            {/* <a href="#" className="button--link button--flex">Track Record <i className='bx bx-right-arrow-alt button__icon'></i></a> */}
        </div>
    )
}

export default Button