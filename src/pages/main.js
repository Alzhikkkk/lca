import endgame from '../assets/endgame.jpg';
import inception from '../assets/inception.jpg';
import parasite from '../assets/parasite.jpg';
import maleficent from '../assets/maleficent.jpeg';
import harry from '../assets/harry.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';

export default function Main(){
    return(
        <main className="main">
            <section className="slider">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    >
                   <SwiperSlide className="slider_items" style={{background: `url(${endgame}) no-repeat`, backgroundPosition: "right", backgroundSize: "cover"}}>
                       <div className="slider_items--text">
                                <h1>Avengers:EndGame</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eu purus ac gravida. Quisque sit amet interdum arcu. Vivamus consequat ultricies tincidunt.</p>
                       </div>
                       <div className="slider_items--button">
                           <button>Watch Now</button>
                           <button>+Add Cart</button>
                       </div>
                   </SwiperSlide>

                   <SwiperSlide className="slider_items" style={{background: `url(${endgame}) no-repeat`, backgroundPosition: "right", backgroundSize: "cover"}}>
                       <div className="slider_items--text">
                                <h1>Avengers:EndGame</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eu purus ac gravida. Quisque sit amet interdum arcu. Vivamus consequat ultricies tincidunt.</p>
                       </div>
                       <div className="slider_items--button">
                           <button>Watch Now</button>
                           <button>+Add Cart</button>
                       </div>
                   </SwiperSlide>

                   <SwiperSlide className="slider_items" style={{background: `url(${endgame}) no-repeat`, backgroundPosition: "right", backgroundSize: "cover"}}>
                       <div className="slider_items--text">
                                <h1>Avengers:EndGame</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium eu purus ac gravida. Quisque sit amet interdum arcu. Vivamus consequat ultricies tincidunt.</p>
                       </div>
                       <div className="slider_items--button">
                           <button>Watch Now</button>
                           <button>+Add Cart</button>
                       </div>
                   </SwiperSlide>

                </Swiper>
            </section>
            <section className='top'>
                  <div className='top-items'>
                        <img src={inception} alt="Inception"/>
                        <div className='top_items--text'> 
                            <h1>Inception</h1>
                            <h3>Action</h3>
                        </div>
                  </div>

                  <div className='top-items'>
                        <img src={inception} alt="Inception"/>
                        <div className='top_items--text'> 
                            <h1>Inception</h1>
                            <h3>Action</h3>
                        </div>
                  </div>

                  <div className='top-items'>
                        <img src={inception} alt="Inception"/>
                        <div className='top_items--text'> 
                            <h1>Inception</h1>
                            <h3>Action</h3>
                        </div>
                  </div>

                  <div className='top-items'>
                        <img src={inception} alt="Inception"/>
                        <div className='top_items--text'> 
                            <h1>Inception</h1>
                            <h3>Action</h3>
                        </div>
                  </div>

                  <div className='top-items'>
                        <img src={inception} alt="Inception"/>
                        <div className='top_items--text'> 
                            <h1>Inception</h1>
                            <h3>Action</h3>
                        </div>
                  </div>
            </section>

            <section className='news'>
                <h1>News</h1>
                <div className='news_wrapper'>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                     <div className='news_wrapper--items'>
                            <img src={parasite} alt="Parasite"/>
                            <div className='wrapper_items--text'>
                                <h1>Korean Movie Parasite Won An Oscar</h1>
                                <p>Ready to dig up a fresh cinematic artifact? As we get closer to the summer,...</p>
                                <h3><span style={{color: 'red'}}>Movies</span> | 2 hours ago</h3>
                            </div>
                     </div>
                </div>
            </section>
            <section className='trailer'>
                <div className='trailer_video'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/IuY4-6qWm-8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div className='trailer_slider'>
                <Swiper
                    slidesPerView={4}
                    direction='vertical'
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide className="trailer-items" style={{background: `url(${maleficent}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Maleficent</h1>
                        </SwiperSlide>
                        <SwiperSlide className="trailer-items" style={{background: `url(${harry}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Harry Potter</h1>
                        </SwiperSlide>
                        <SwiperSlide className="trailer-items" style={{background: `url(${maleficent}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Maleficent</h1>
                        </SwiperSlide>
                        <SwiperSlide className="trailer-items" style={{background: `url(${harry}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Harry Potter</h1>
                        </SwiperSlide>
                        <SwiperSlide className="trailer-items" style={{background: `url(${maleficent}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Maleficent</h1>
                        </SwiperSlide>
                        <SwiperSlide className="trailer-items" style={{background: `url(${maleficent}) no-repeat`, backgroundPosition: "center", backgroundSize: "cover"}}>
                                <h1>Maleficent</h1>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </main>
    )
}