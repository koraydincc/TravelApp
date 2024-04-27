import React from 'react';
import { Button } from 'antd';
import { useSpring, animated } from 'react-spring';
import HomePageCarousel from './HomePageCarousel';

function HomePageContent() {
  const animationProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Geçiş süresini belirtin
  });

  return (

        <animated.div
          style={{
            ...animationProps,
            textAlign: 'center',
            padding: '50px', // İçerik aralığı ekleyin
          }}
        >
          <HomePageCarousel/>
          <Button type="primary" size="large" style={{ marginTop: '60px' }}>
            Keşfetmeye Başlayın 
          </Button>
        </animated.div>

  );
}

export default HomePageContent;
