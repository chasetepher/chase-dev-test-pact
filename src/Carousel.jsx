import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Carousel () {
  return (
    <div>
      <p className='stories'> LATEST STORIES </p>
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      totalSlides={1}
    >
    <Slider className='slider'>
          <Slide className='single-slide' index={0}>
            <img className="Carousel-Image" src='https://s3-alpha-sig.figma.com/img/2293/4c23/51156e95f300f1e879f858ed0ff37e2d?Expires=1653868800&Signature=RolPudSUOTXwacFL-7iH-J6JadpvQXsyjnYlCKEWoi7ZJEu7tWIwA1qXDUIlCRuK6MngRv3yMuKfuXUsyuQMV~vsgMUotdrAuUC1-r-ABBNmNP3BtJIA9uuQ4iF70J4tzzQexKFh6BpYwzy0ldFxEgfFmHuqddV6XZ9vo1zCVW3frUWmDf9UA1kJPhj4H9Zrqe7Y6E-5KPGvZ2gf7T-Pxi1EPGZtlEqrg4qdq5lH3kcUsnbugIqEX4EJvXvNm4L8oxpbV6dtmbys7pmMl1eF3qx-co5uRuDaip53V-q79tD3HkVwv2rHTJu4XqRs-EAqs~6zscWvJByfO8qNOfNOwQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p className='image-category'>CATEGORY</p>
            <p className='category-blurb'>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
          </Slide>
          <Slide className='single-slide' index={1}>
            <img className='Carousel-Image' src='https://s3-alpha-sig.figma.com/img/4322/9d19/d6e415f2f5a22b532358696fdebb6ffb?Expires=1653868800&Signature=C1wofP~zoH4SeXMeYwugngB5EPgSk8UEu43WEWyG~al05h2mOq2Y4lDMi9gJdCfDZxdi97etIjV8JW9gWaoNZk7an0Dw6QICCPYhrLZx6hoX52LUpO7Fdt1XgWNlBOnsKLbUUgKDyKLhvFRTytOOC6tGErTxN5sg0cRnbM2Mk5vCsOHr36iG6Ukdg1MJ32YGlc6bQ2c5mOhjG6wu9BeDbgjA4PfWIhiqOZ7aN4uf6vh2fowmaRiO7X43XQJKdqzLTmXXEr4DCAQ8eLF0Mt8dRoDobnbpCg7HRTNBWfyINvTlSvNhax92XLyG0-wgPGGT307m1-Z6dJ4BNDnbyAFdHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p className='image-category'>CATEGORY</p>
            <p className='category-blurb'>Praesent commodo cursus magna, vel scelerisque</p>
          </Slide>
          <Slide className='single-slide' index={2}>
            <img className='Carousel-Image' src='https://s3-alpha-sig.figma.com/img/f6de/4ced/d5d629bdffe29cba956072e79edb5f3b?Expires=1653868800&Signature=WCDTujesVH0FcqX5G7G7u4mr99GhvnfO66a6cEuHX7GmlUrZ4NyGU7h3mFPGH6IcD5T12B7KaH~LDhyiC3q~owtFYjbg0DHUhEoqMR5-SgK0JEYqRmjymWMwR5ApzKo26E2hpg9Md-0SPQGkIBfgqeUqSQ1H27kxYeWrikKBUFEiqpgHEwpRyNnIGblBNC2p5FjtVzGfEsImuogg1ZMI1FXMKsEQfFKDJkHh1qomNnKOifpfSO0mH97gb-jdSoDhlP8vLw0xfu2pYp9ytM3lmTiSbFznTFByRDVl8VAFvpQRskSGBNkB3XPMjZsfCK-W3WCVmxeSx2dY7W~3tQn5vg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p className='image-category'>CATEGORY</p>
            <p className='category-blurb'>Praesent commodo cursus magna, vel scelerisque</p>
          </Slide>
          <Slide className='single-slide' index={3}>
            <img className='Carousel-Image' src='https://s3-alpha-sig.figma.com/img/4a6e/e0ea/5a70824943cad2432278b6fae4d65967?Expires=1653868800&Signature=TdngrPsAC491jt-Db95Kt8EPcQOdKNDH8qWma8hM7zgeXx7YxMNb9Ns5jAPQlre8v-1Ubtuo2sFg8nuNkA5hQslO7AgnlLF1QPZGSt9vwT56XIO20gCIUMlG4Dx8mqol3Wa5UJZ3m49LmkikkZNKiydrA9bhoOXK-gfAaKBoyo9t3mUtnuQPAeCFJdOfx21iCGlCIv7npH1e26VHt~oTWXzkIuIrhyvi4PyoREQcw-xV9VBU5SAXCtjeppdAn8CA731BC6JpJ1GpgFcyVbr8l94JvMBTSwyiMiorA9WgjiPEoCOqk39C9tUnITvwbEP5~Am-VuvX5UfBqIB~lGfnqg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
            <p className='image-category'>CATEGORY</p>
            <p className='category-blurb'>Praesent commodo cursus magna, vel scelerisque</p>
          </Slide>
        </Slider>
    </CarouselProvider>
    </div>

  );
}
