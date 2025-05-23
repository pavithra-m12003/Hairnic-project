import React, { useState, useEffect } from 'react'
import tick from '../Components/image/tick.jpg'
import home from '../Components/image/home.jpg';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


const Container = () => {

    const [show, setShow] = useState(false);
    const [get, setGet] = useState({});
    const [second, setSecond] = useState(60);
    const [mins, setmins] = useState(60)
    const [hour, setHour] = useState(24)
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(prevSeconds => prevSeconds - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);
    useEffect(() => {
        if (second === 0) {
            setmins(prevMins => prevMins - 1);
            setSecond(60);
        }
        else {
            setmins(mins);
        }
    })
    useEffect(() => {
        if (mins === 0) {
            setHour(h => h - 1)
            setmins(60)
        }
        else {
            setHour(hour);
        }
    })
    const handleShow = (data) => {
        debugger;
        setShow(true)
        setGet(data)
    }
    const handleClose = () => {
        setShow(false)
    }
    const [color, setColor] = useState(false);
    const handleColor = () => {
        setColor(!color);
    }
    const [deal, setDeal] = useState(false);
    const handleDeal = () => {
        setDeal(!deal);
    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };
    // const data = [
    //     {
    //         heading: 'Foods that are good for your hair growing',
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.'
    //     },
    //     {
    //         heading: 'How to take care of hair naturally',
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
    //     },
    //     {
    //         heading: 'How to use our natural & organic shampoo',
    //         desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',

    //     }
    // ]

    const details = [
        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-1.jpg',
            title: 'Foods that are good for your hair growing',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
            brief: 'fjioehfiofhiowfihi'
        },
        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-2.jpg',
            title: 'How to take care of hair naturally',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
        },
        {
            img: 'https://demo.htmlcodex.com/2727/single-product-website-template/img/blog-3.jpg',
            title: 'How to use our natural & organic shampoo',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.',
        }
    ]

    return (
        <>
            <div className='container-fluid d-flex banner'>
                <div className='row'>
                    <div className='col-lg-6 box mt-5'>

                        <h3>natural & organic</h3>
                        <h1>Hair <span>shampoo</span> for healthy hair</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus, sed auctor ex malesuada id. Orci varius natoque penatibus et magnis dis parturient montes.</p>

                        <div>
                            <button className='button1 m-2'>shop now</button>
                            <button className='button2 m-2'>contact us</button>
                        </div>
                    </div>
                    <div className='col-lg-6 mt-5 mb-5' img>
                        <img className='animationImage' src='https://themewagon.github.io/hairnic/img/shampoo.png ' width="100%" />
                    </div>

                </div>
            </div>
            <div className='container-fluid mt-5'>
                <div className='row' >
                    <div className='col-lg-4 '>
                        <div className='box2 '>
                            <div className='box22'>
                            </div>
                            <img src='https://cdn-icons-png.flaticon.com/512/40/40107.png' />
                            <h5>100% natural</h5>
                        </div>

                    </div>
                    <div className='col-lg-4 '>
                        <div className='box2'>
                            <div className='box22'>
                            </div>
                            <img src='https://www.svgrepo.com/show/35033/water-drop.svg' />
                            <h5>anti hair fall</h5>
                        </div>
                    </div>
                    <div className='col-lg-4 '>
                        <div className='box2'>
                            <div className='box22'>
                            </div>
                            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f8dc5431091769.5640f77be5837.png' />
                            <h5>Hypoallergenic</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='img'>
                            <img className='animationImage' src='https://themewagon.github.io/hairnic/img/shampoo-1.png' width="100%" />
                        </div>
                    </div>
                    <div className={`col-lg-6 desc ${color === true ? 'pink' : ''}`}>
                        <h1><span>Healthy Hair </span>Is A Symbol Of Our Beauty</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus. Praesent tristique odio ut rutrum pellentesque. Fusce eget molestie est, at rutrum est.</p>
                        <p>Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor.</p>
                        <button onClick={handleColor}>shop now</button>
                    </div>
                </div>
            </div>
            <div className='container-fluid deal'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='offer'>
                            <img className='animationImage' src='https://themewagon.github.io/hairnic/img/shampoo-2.png' width="100%" />
                        </div>
                    </div>

                    <div className='col-lg-6'>
                        <div className={`offertime ${deal === true ? 'red' : ''}`}>
                            <p>Natural & Organic Shampoo</p>
                            <h3>Deals of the Day</h3>
                            <h1>$99.99</h1>
                            <h5>Fresh Organic Shampoo</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat rutrum lectus sed auctor.</p>
                            <div className='d-flex gap-5 justify-content-center tim'>
                                <h3>507
                                    <p>days</p>
                                </h3>
                                <h3>{hour}
                                    <p>hours</p>
                                </h3>

                                <h3>{mins}
                                    <p>mins</p>
                                </h3>
                                <h3>{second}
                                    <p>secs</p></h3>
                            </div>

                            <div className="bt1">
                                <button onClick={handleDeal}>shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header mt-5'>
                <div className='head'>
                    <h1>Best Benefits Of Our <span>Natural Hair Shampoo</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-4 mt-5'>
                            <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>Natural & Organic</h4> <hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>
                            <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>Anti Hair Fall</h4><hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>

                            <div className='d-flex flex-diretion-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>Anti-dandruff</h4><hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <img className='animationImage' src='https://demo.htmlcodex.com/2727/single-product-website-template/img/shampoo.png' width='100%' />

                        </div>
                        <div className='col-lg-4 mt-5'>
                            <div className='d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>No Internal Side Effect</h4><hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>
                            <div className=' d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>No Skin Irritation</h4><hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>
                            <div className='d-flex flex-direction-coloum justify-content-center align-item-center gap-3'>
                                <img src={tick} width='10%' height='28px' />
                                <div className='style'>
                                    <h4>No Artificial Smell</h4><hr />
                                    <p>Lorem ipsum dolor sit amet adipiscing elit aliquet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid uses'>
                <div className='row'>
                    <div className='info'>
                        <h1>How To Use Our <span>Natural & Organic </span>Hair Shampoo</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    </div>
                    <div className='col-lg-4'>
                        <div className='info1'>
                            <img src={home} width='10%' height='28px' />
                            <h3>Wash Hair With Water</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='info1'>
                            <img src={home} width='10%' height='28px' />
                            <h3>Apply Shampoo On Hair</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='info1'>
                            <div>
                                <img src={home} width='10%' height='28px' />
                            </div>
                            <h3>Wait 5 Mins And Wash</h3>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='products'>
                        <h1>Our Natural <span>Hair Products</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    </div>
                    <div className='col-lg-3'>
                        <div className='product1'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-1.png' />
                            <p>Hair Shining Shampoo</p>
                            <h4>$99.99</h4>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='product1'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-2.png' />
                            <p>Anti-dandruff Shampoo</p>
                            <h4>$99.99</h4>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='product1'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-1.png' />
                            <p>Anti Hair Fall Shampoo</p>
                            <h4>$99.99</h4>
                            <button>add to cart</button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='product1'>
                            <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/product-2.png' />
                            <p>Hair Growing Shampoo</p>
                            <h4>$99.99</h4>
                            <button>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='blog'>
                        <h1>From Our <span>Blog Articles</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                    </div>
                    {details?.map((item, index) => (
                        <div key={index} className='col-lg-4'>
                            <div className='hair'>
                                <img src={item?.img} width="100%" />
                                <h4>{item?.title}</h4>
                                <p>{item?.para}</p>
                                <button onClick={(e) => handleShow(item)}>read more</button>
                            </div>
                        </div>
                    ))}

                </div>-
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h1>{get?.title}</h1>

                    </Modal.Body>
                </Modal>
            </div>
            <div>
                <Swiper
                    pagination={pagination}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>

                        <div className='container-fluid move '>
                            <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                            </p>
                            <div className='round1'>
                                <div className='round'>
                                    <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-2.jpg' height='120px' width='120px' />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                            <h2>Client Name</h2>
                            <p><i>Profession</i></p>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='container-fluid move '>
                            <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                            </p>
                            <div className='round1'>
                                <div className='round'>
                                    <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-2.jpg' height='120px' width='120px' />
                                </div>
                            </div> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                            <h2>Client Name</h2>
                            <p><i>Profession</i></p>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='container-fluid move '>
                            <h1><span>Our Customer</span> Said About Our Natural Shampoo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.
                            </p>
                            <div className='round1'>
                                <div className='round'>
                                    <img src='https://demo.htmlcodex.com/2727/single-product-website-template/img/testimonial-2.jpg' height='120px' width='120px' />
                                </div>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus.</p>
                            <h2>Client Name</h2>
                            <p><i>Profession</i></p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='inpu '>
                <h1>Let's Subscribe <span>The Newsletter</span></h1>
                <p>Subscribe now to get 30% discount on any of our products</p>
                <form className='d-flex justify-content-center m-3 inpt'>
                    <input type='text' placeholder='Enter Your Email' /><i className="itag  bi bi-send-fill "></i>
                </form>
            </div>
            <div className='container-fluid mt-5 p-4'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <div className='des2'>
                            <h1>Hairnic</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet, erat non malesuada consequat, nibh erat tempus risus, vitae porttitor purus nisl vitae purus.</p>
                        </div>
                    </div>
                    <div className='col-lg-3 h'>
                        <h3>Get In Touch</h3>
                        <div className='row'>
                            <div className='col-md-3 im'>
                                <img src='https://w7.pngwing.com/pngs/26/801/png-transparent-viber-social-media-computer-icons-viber-text-hand-logo.png' width={30} height={25} />
                                <img src='https://w7.pngwing.com/pngs/26/801/png-transparent-viber-social-media-computer-icons-viber-text-hand-logo.png' width={30} height={25} />
                                <img src='https://w7.pngwing.com/pngs/26/801/png-transparent-viber-social-media-computer-icons-viber-text-hand-logo.png' width={30} height={25} />
                            </div>
                            <div className='col-md-9 pg'>
                                <p>123 Street, New York, USA</p>
                                <p>+012 345 67890</p>
                                <p>info@example.com</p>
                            </div>
                        </div>
                        <div className='i d-flex'>
                            <img src='https://static.vecteezy.com/system/resources/previews/022/227/330/non_2x/twitter-logo-icon-free-png.png' width={50} height={50} />
                            <img src='https://cdn-icons-png.freepik.com/256/14064/14064490.png?semt=ais_hybrid' width={50} height={50} />
                            <img src='https://static.vecteezy.com/system/resources/previews/023/741/148/non_2x/instagram-logo-icon-social-media-icon-free-png.png' width={50} height={50} />
                            <img src='https://static.vecteezy.com/system/resources/previews/023/741/148/non_2x/instagram-logo-icon-social-media-icon-free-png.png' width={50} height={50} />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='h'>
                            <h3 >Our Products</h3>
                            <dl>
                                <dd> &gt; hair fall shampoo</dd>
                                <dd> &gt; anti dandruff shampoo</dd>
                                <dd> &gt; hair shining shampoo</dd>
                                <dd> &gt; hair growth shampoo</dd>
                                <dd> &gt; anti smell shampoo</dd>
                            </dl>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='h'>
                            <h3 >Popular Link</h3>
                            <dl>
                                <dd> &gt; about us</dd>
                                <dd> &gt;contact us</dd>
                                <dd> &gt; privacy policy</dd>
                                <dd> &gt; terms and conditions</dd>
                                <dd> &gt; careers</dd>
                            </dl>
                        </div>
                    </div>

                </div>
            </div>

            <div className='container-fluid mt-5 gt'>
                <div className='row'>
                    <div className='col-lg-7 mt-4'>
                        <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                    </div>
                    <div className='col-lg-5 mt-4'>
                        <ul className='d-flex gap-5 justify-content-end'>
                            <li>home</li>
                            <li>cookies</li>
                            <li>help</li>
                            <li>FAQs</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container;