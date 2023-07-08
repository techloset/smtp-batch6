import cardImg from '../../assets/img/category1-img.png'
function MainCard() {
    return (
        <div className="category__data">
            <img src={cardImg} alt="" className="category__img" />
            <h3 className="category__title">Ghosts</h3>
            <p className="category__description">Choose the ghosts, the scariest there are.</p>
        </div>
    )
}

export default MainCard