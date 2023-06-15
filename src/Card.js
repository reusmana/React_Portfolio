import './Style.css';
import Img1 from './Assets/Project1/2.png'
import Img2 from './Assets/Project2/0.png'
import Img3 from './Assets/3.jpg'
// import { Outlet, Link } from "react-router-dom";

function Card(){
    return (
        <><div className="card-img">
            <img src={Img1} alt="" />
            <div className="descripsi">
                <h3>Web Developer</h3>
                <p>Project ini dibuat ketika saya sedang melakukan PL/Kerja Lapangan.</p>
                <a href='https://reusmana.github.io/Portofolio_reusmana/detail.html' >Read More</a>
                {/* <Link to="/detail1">Read More</Link> */}
            </div>
        </div>
        <div className="card-img">
            <img src={Img2} alt="" />
            <div className="descripsi">
                <h3>Media Pembelajaran</h3>
                <p>Project ini dibuat untuk bahan Skripsi.</p>
                {/* <Link to="/detail2">Read More</Link>         */}
                <a href='https://reusmana.github.io/Portofolio_reusmana/detail_2.html' >Read More</a>
            </div>
        </div>
        <div className="card-img">
            <img src={Img3} alt="" />
            <div className="descripsi">
                <h3>3D Modelling</h3>
                <p>Latihan Membuat 3D Modelling.</p>
                {/* <Link to="/detail3">Read More</Link> */}
                <a href='https://reusmana.github.io/Portofolio_reusmana/detail_3.html' >Read More</a>
            </div>
        </div>
        {/* <Outlet /> */}
        </>
    )
}

export default Card;