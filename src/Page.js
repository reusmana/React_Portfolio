// import './Style.css';
import './Style.css';
import Profile from './Assets/picc.png'
import CVNew from './Assets/CV-Reusmana.pdf'
import Card from './Card'
// import Card from './RouterRoute'

function Index(){

    const keren = (e) => {
        alert("now working today");
    }
    return(
        <>
        <nav>   
        <a href="#" className="logo">Porto<span>folio</span></a>
      
        <ul className="nav-ul">
            <li><a href="#">Home</a></li>
            <li><a href="#tentang">About</a></li>
            <li><a href="#project-saya">Project</a></li>
            <li><a href="#learn">Why Hire me</a></li>
        </ul>
        <a href="#contact-saya" className="contact">Contact</a>
        <div className="hamburger">
            <div className="line"></div>

        </div>
    </nav>
    <div className="hero"></div>
    <section>
        <div className="content">
            <h2 className="hay">Hayy!!!, Nama Saya</h2>
           
            <h2>Reusmana <span>Sujani</span>
                <div className="garis"></div>
            </h2>
            
        </div>
    </section>
    <div className="about-me" id="tentang">
        <h2>About <span>Me</span></h2>
        <div className="image">
            <img src={Profile} title="about" className="bg" />
            <div className="about">
                <h3><q>Saya</q> seorang Freshgraduate, lulusan dari jurusan Ilmu Komputer <span>UNIVERSITAS
                        PAKUAN</span> dengan
                    IPK 3.47, dengan keinginan yang besar, serta dapat bertanggung jawab dengan pekerjaan.
                    Saya seorang pemula dalam Frontend Developer.
                </h3>
                <table className="table">
                    <tr>
                        <td><b>Nama</b></td>
                        <td>:</td>
                        <td>Reusmana Sujani</td>
                    </tr>
                    <tr>
                        <td><b>Alamat</b></td>
                        <td>:</td>
                        <td>Kp.gunung malang RT/RW 01/01 Kecamatan Cikidang Sukabumi</td>
                    </tr>
                    <tr>
                        <td><b>Alamat Sekarang</b></td>
                        <td>:</td>
                        <td>Cirende, Tangerang Banten</td>
                    </tr>
                </table>
                <a download href={CVNew} type="Download">Download CV</a>
            </div>
        </div>
    </div>
    <div className="MY-project" id="project-saya">
        <h1><span className="spanProject">My</span> Project</h1>

        <div className="project">


           <Card />

        </div>
    </div>

    <div className="hire">
        
        <div className="hiringme">
            <h2>"Jika Orang Lain sudah melampaui mu dari dulu" <br /> "Saya Hanya Harus berusaha Lebih keras dari mereka"
            </h2>
            <a href="#contact-saya">Hire me</a>
        </div>
    </div>

<div className="learn" id="learn">
    <h1>What I Do?</h1>

    <div className="flex-learn">
        <div className="card-learn">
            <i className="bx bxs-color-fill"></i>
            <h2>Frontend Developer</h2>
            <p><span>( Pemula )</span></p>
            <p>Experience with HTML, CSS, Javascript, dan Boostrap</p>
        </div>
        <div className="card-learn">
            <i className="bx bxs-data"></i>
            <h2>Backend Developer</h2>
            <p><span>( Pemula/basic )</span></p>
            <p>Experience with PHP, Mysql, Laravel Framework</p>
        </div>
        <div className="card-learn">
            <i className="bx bxl-unity"></i>
            <h2>Media Pembelajaran</h2>
            <p><span>( Pemula/basic )</span></p>
            <p>Experience with Unity Engine</p>
        </div>
        <div className="card-learn">
            <i className="bx bxl-figma"></i>
            <h2>UI/UX</h2>
            <p><span>( Pemula/basic )</span></p>
            <p>Experience with AdobeXD, Figma</p>
        </div>
        <div className="card-learn">
            <i className="bx bxl-blender"></i>
            <h2>3D Modelling</h2>
            <p><span>( Pemula )</span></p>
            <p>Experience with Blender</p>
        </div>
    </div>
</div>

    <div className="contact-me" id="contact-saya">
        <h2>Contact <span>Me</span></h2>
        <div className="card-display">
            <div className="card-1">
                <table className="tabel-card">
                    <tr>
                        <td rowspan="2" className="icon"><i className='bx bxs-map'></i></td>
                        <td>
                            <h3>LOCATION</h3>
                        </td>

                    </tr>

                    <tr>
                        <td>
                            <p>Sukabumi</p>
                            <hr />
                        </td>

                    </tr>
                    <tr>
                        <td className="heightLocation" ></td>
                    </tr>
                    <tr>
                        <td rowspan="2" className="icon"><i className='bx bx-envelope'></i></td>
                        <td>
                            <h3>Email</h3>
                        </td>

                    </tr>
                    <tr>
                        <td>
                            <p>reusmanasujani@gmail.com</p>
                            <hr />
                        </td>

                    </tr>
                    <tr>
                        <td className="heightLocation" ></td>
                    </tr>
                    <tr>
                        <td rowspan="2" className="icon"><i className='bx bxs-phone'></i></td>
                        <td>
                            <h3>Phone</h3>
                        </td>

                    </tr>
                    <tr>
                        <td>
                                <p>(+62) 85210780093</p>
                            <hr />
                        </td>

                    </tr>
                </table>
                

                <table className="icon-baru">
                    <tr>
                        <td><h2><span className="spanProject">Sosial</span> Media <div className="garis"></div> </h2></td>
                        <td><a href="https://wa.link/u579g2"><i className="bx bxl-whatsapp"></i></a></td>
                        <td><a href="https://www.instagram.com/res.mn_/"><i className="bx bxl-instagram"></i></a></td>
                        <td><a href="https://www.linkedin.com/in/reusmana-sujani-2b77ba237/"><i className="bx bxl-linkedin"></i></a></td>
                        <td><a href="https://github.com/reusmana"><i className="bx bxl-github"></i></a></td>
                    </tr>
                </table>

            </div>
            <div className="card-2">
                <div className="tabel-width">
                <form >
                    <div for="" className='margin_text'>Your Name: </div><br />
                    <input  type="text" id="name" name='yourName' required /><br/>
                    <div className='margin_text' >Your Email: </div><br />
                    <input  type="email" id="email" name='yourEmail' required /><br/>
                    <div for="" className='margin_text'>Your Message: </div><br/>
                    <textarea  name="yourMessage" id="message" cols="30" rows="10"></textarea><br/>
                    <button type="submit" className="submit" onClick={() => keren()}>submit</button>
                </form>
            </div>
            </div>
        </div>
    </div>

    <footer>
        <h2>&copy; reusmana 2022</h2>
    </footer>

</>
    )

}

export default Index;