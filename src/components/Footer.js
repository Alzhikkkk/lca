import camera from '../assets/camera.png'

export default function Footer(){
    return(
        <footer className="footer">
             <div className="aside_logo">
                <img src={camera} alt=""/>
                 LCA
            </div>
            <div className="footer-links">
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </div>
            <div className="footer-contact">
                Write you email to contact with us
                <span>
                    <input type="email" name="email" placeholder="Enter email"/>
                    <button>GO</button>
                </span>
            </div>
        </footer>
    )
}