import data from './data.json';

import Testimonial from './Testimonial';
import { title } from 'components/UI';

const Testimonials = () => {
  return(
    <>
      <h2 className={title()} > Depoimentos </h2>
      <ul className="flex gap-8 md:gap-16 flex-wrap justify-center 2xl:justify-between mt-8 md:mt-12 lg:mt-16">
        {data.map(testimonial=> <Testimonial key={testimonial.id} {...testimonial} /> )}
      </ul>
    </>
  );
}; 

export default Testimonials;
