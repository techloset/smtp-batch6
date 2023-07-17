import CardImg from "../../assets/img/trick-treat1-img.png"
export default function ProductCard(props) {
    return (
        <div className="trick__content">
            <img src={props.src} alt="" className="trick__img" />
            <h3 className="trick__title">Toffee</h3>
            <span className="trick__subtitle">Candy</span>
            <span className="trick__price">${props.price}</span>
            <button className="button trick__button">
                <i className='bx bx-cart-alt trick__icon'></i>
            </button>
        </div>
    )
}
