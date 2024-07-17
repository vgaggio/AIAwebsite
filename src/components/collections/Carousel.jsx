import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Container from './Container';


const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 6000, // Velocidad de transición en milisegundos
        slidesToShow: 5, // Mostrar 3 imágenes a la vez (ajusta según tus necesidades)
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // Tiempo en milisegundos entre cada cambio de slide (0 para movimiento constante)
        cssEase: 'linear', // Movimiento lineal entre slides
        pauseOnHover: false, // No pausar al pasar el mouse por encima
        pauseOnFocus: false, // No pausar al hacer foco en el carrusel
        swipeToSlide: true, // Permite navegar entre slides deslizando
        touchMove: true, // Permite movimiento táctil
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <Container>
            <div>
                <Slider {...settings}>
                    <a href="https://pagomiscuentas.com" target="_blank" >
                        <img src="pago-mis-cuentas.png" alt="Pago Mis Cuentas Medio de Pago" className='ml-10 mr-20 mt-11' />
                    </a>
                    <a href="https://mobbex.com/" target="_blank" >
                    <img src="jF_muslOv7Tnt8AW8CVa__mobbexoriginal.png" alt="Mobbex Medio de Pago" className='ml-14 mt-8 mr-14' />
                    </a>
                    <a href="https://stripe.com/" target="_blank" >
                    <img src="320px-Stripe_Logo,_revised_2016.svg.png" alt="Imagen 2" className='h-26 mb-9 ml-12' />
                    </a>
                    <a href="https://www.prismamediosdepago.com/" target="_blank" >
                    <img src="Logo-Prisma-medios-de-pago.webp" alt="Imagen 2" className='mt-3 ml-10' />
                    </a>
                    <a href="https://netpay.mx/" target="_blank" >
                    <img src="NetPay-1024x278.png" alt="NetPay Medio de Pago" className='mt-8 ml-12 h-14' />
                    </a>
                    <a href="https://www.pagos360.com/" target="_blank" >
                    <img src="PAGOS360-Leonardo-L.-Hermida.webp" alt="Imagen 2" className='mt-7 ml-16' />
                    </a>

                    <a href="https://www.paypal.com/" target="_blank" >
                        <img src="PayPal.png" alt="Imagen 2" className='mt-6 ml-20 mr-28' />
                    </a>
                    <a href="https://www.khipu.com/" target="_blank" >
                    <img src="3253af4d89862bf67569ecc2ad568d6f10d82938.png" alt="Imagen 2" className='mt-7 ml-24 h-16' />
                    </a>

                    <a href="https://www.conekta.com/" target="_blank" >
                        <img src="conekta.webp" alt="Imagen 2" className='mt-2 ml-20' />
                    </a>


                    {/* Agrega más imágenes según sea necesario */}
                </Slider>
            </div>
        </Container>
    );
};

export default Carousel;
