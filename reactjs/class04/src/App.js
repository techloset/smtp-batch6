// import 'bootstrap/dist/css/bootstrap.min.css'


// import Slider from "react-slick";
// import './css/styles.css'
// import './css/swiper-bundle.min.css'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
// import HomePage from './pages/HomePage';



function App() {

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const handlerSum = (a,b)=>{
      alert(a+b)
  }

  handlerSum(10,123)
 
  return (
    <div >
      {/* <button onClick="handlerSum(2,5)">click</button> */}
      <button onClick={()=>handlerSum(2,5)}>click</button>


      {/* <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus est numquam omnis minima repellat rerum? Deserunt beatae iure architecto sequi magnam fugit et corrupti placeat. Unde id culpa temporibus at!</p>
        </div>
        <div className="col-md-6">
        <Slider {...settings} >
        <SliderItem />
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
        </div>
      </div>
     </div> */}

      {/* <HomePage data={myHandler}/> */}
    </div>
  );
}

export default App;
