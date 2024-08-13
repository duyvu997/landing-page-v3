import React from 'react';
import Slider from 'react-slick';
import WorkItem from './WorkItem';

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Carousel = React.forwardRef((props: any, ref: React.Ref<Slider>) => {
  const { work } = props;

  return (
    <Slider
      ref={ref}
      {...sliderSettings}>
      {(work.items || []).map((item: any, index: number) => (
        <div
          key={index}
          className='py-2'>
          <WorkItem {...item} />
        </div>
      ))}
    </Slider>
  );
});

Carousel.displayName = 'Carousel';

export default Carousel;
