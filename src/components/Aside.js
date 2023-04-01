import camera from '../assets/camera.png'
import home from '../assets/home.svg'
import phone from '../assets/phone.svg'
import news from '../assets/news.svg'
import film from '../assets/film.svg'
export default function Aside(){
    return(
        <aside className="aside">
            <div className="aside_logo">
                <img src={camera} alt=""/>
                 LCA
            </div>
            <div className='aside_links'>
                <span>
                    <img src={home} alt="Home"/>
                    Home
                </span>
                <div className='aside-links--items'>
                    <span>
                        <img src={film} alt="File"/>
                        Category
                    </span>
                    <ul>
                        <label for="science">
                            <input type="checkbox" name="name" id="science"/>
                            Science Fiction
                        </label>
                        <label for="mystery">
                            <input type="checkbox" name="name" id="mystery"/>
                            Mystery
                        </label>
                        <label for="horror">
                            <input type="checkbox" name="name" id="horror"/>
                            Horror
                        </label>
                        <label for="cartoon">
                            <input type="checkbox" name="name" id="cartoon"/>
                            cartoon
                        </label>
                        <label for="comedy">
                            <input type="checkbox" name="name" id="comedy"/>
                            Comedy
                        </label>
                        <label for="detective">
                            <input type="checkbox" name="name" id="detective"/>
                            Detective
                        </label>
                        <label for="biography">
                            <input type="checkbox" name="name" id="biography"/>
                            Biography
                        </label>
                    </ul>
                </div>
                <span>
                    <img src={news} alt="News"/>
                    News
                </span>
            
                <span>
                    <img src={phone} alt="Phone"/>
                    Contact
                </span>
            
            </div>
        </aside>
    )
}