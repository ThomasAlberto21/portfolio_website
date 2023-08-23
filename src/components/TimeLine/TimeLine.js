import React, { useState, useRef, useEffect } from 'react';

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from './TimeLineStyles';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Section id='about'>
      <SectionDivider />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I'm a Front-end developer and UI/UX Designer with experience in React
        JS, Vue Js and Figma. I'm currently working on a project using React JS,
        Vue JS and Figma as tool UI Design.
      </SectionText>
      <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => {
            return (
              <CarouselMobileScrollNode
                key={index}
                final={index === TOTAL_CAROUSEL_COUNT - 1}
              >
                <CarouselItem
                  index={index}
                  id={`carousel__item-${index}`}
                  active={activeItem}
                  onClick={(e) => handleClick(e, index)}
                >
                  <CarouselItemTitle>
                    {item.year}
                    <CarouselItemImg
                      width='208'
                      height='6'
                      viewBox='0 0 208 6'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M0 0H208V4H0V0Z'
                        fill='url(#paint0_linear)'
                        fill-opacity='0.33'
                      />
                      <defs>
                        <linearGradient
                          id='paint0_linear'
                          x1='-4.30412e-10'
                          y1='0'
                          x2='208'
                          y2='0'
                          gradientUnits='userSpaceOnUse'
                        >
                          <stop stop-color='white' />
                          <stop
                            offset='0.79478'
                            stop-color='white'
                            stop-opacity='0'
                          />
                        </linearGradient>
                      </defs>
                    </CarouselItemImg>
                  </CarouselItemTitle>
                  <CarouselItemText>{item.text}</CarouselItemText>
                </CarouselItem>
              </CarouselMobileScrollNode>
            );
          })}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type='button'
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons>
    </Section>
  );
};

export default Timeline;
