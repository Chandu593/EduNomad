import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import CarouselCard from '../ecompo/CarouselCard'
import ReviewCard from '../ecompo/ReviewCard'

function CarouseL(props) {
    const ratingDetails = [{ profilepic: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'Fib Allen', posteddate: 'Sept 14, 2016', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/women/51.jpg', name: 'Jennifer', posteddate: 'Nov 19, 2014', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/women/49.jpg', name: 'Catherine', posteddate: 'Jan 27, 2018', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Chandru Chatterji', posteddate: 'Oct 11, 2020', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/women/79.jpg', name: 'Smriti Madona', posteddate: 'Jul 7, 2022', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Nichols Johnson', posteddate: 'May 14, 2017', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
    { profilepic: 'https://randomuser.me/api/portraits/men/51.jpg', name: 'Tushar Pandey', posteddate: 'Mar 30, 2019', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' }
    ]
    let subjects = [{ subname: 'Telugu', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.ynfz9J5eF-7meBzw5YpyrAHaFc&pid=Api&P=0&h=180', link: '/telugu' },
    { subname: 'Hindi', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.U5B0Xyf92LSUZBN-M6q0bQHaD4&pid=Api&P=0&h=180', link: '/hindi' },
    { subname: 'English', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.pGIJv3urFPxIq5vczzjrIAHaFW&pid=Api&P=0&h=180', link: '/english' },
    { subname: 'Maths', imgurl: 'https://tse3.mm.bing.net/th?id=OIP.u6MjzcUX7m0OK9hgiLvBCwHaGA&pid=Api&P=0&h=180', link: '/maths' },
    { subname: 'Social', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.yvoTIkDfKb9z80oXivykPwHaEL&pid=Api&P=0&h=180', link: '/social' },
    { subname: 'Biology', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.-61YW9EikN5yNmDTtgQufAHaEH&pid=Api&P=0&h=180', link: '/biology' }]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1460 },
            items: 4,
            slidesToSlide: 3
        },
        tablet: {
            breakpoint: { max: 1459, min: 1130 },
            items: 3,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 1129, min: 760 },
            items: 2,
            slidesToSlide: 1
        },
    };
    return (
        <>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                // autoPlay={true}
                // autoPlaySpeed={1500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={300}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
            >
                {props.for === 'subject' ? (
                    subjects.map((element) => (
                            <CarouselCard key={element.subname} subjectname={element.subname} imgurl={element.imgurl}link={element.link} />
                    ))
                ) : (
                    ratingDetails.map((element) => <ReviewCard key={element.profilepic} profilepic={element.profilepic}posteddate={element.posteddate}description={element.description}name={element.name} />)
                )}
            </Carousel>
        </>
    )
}

export default CarouseL

