import { InView } from 'react-intersection-observer';

const AnimateOnScroll = ({ children }) => {
  return (
    <InView treshold={1}>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          <div className={inView ? 'animate-fade-in' : 'opacity-0'}>
            {children}
          </div>
        </div>
      )}
    </InView>
  );
}

export default AnimateOnScroll;
