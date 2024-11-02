import { TypeAnimation } from 'react-type-animation';
 
const ExampleComponent = () => {
  return (
    <div className='text_blog'>
        <h1>Our Blogs</h1>
    <TypeAnimation className='TextTransition '
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Click Me to Learn More About What You Would Like To Know About The Current Industry Demands.',
        1000,
        // wait 1s before replacing "Mice" with "Hamsters"
        'Future-Proofing Careers: The Power of Upskilling and Reskilling',
        1000,
      ]}
      wrapper="span"
      speed={50}
       
      // deletespeed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
    <curser />
    </div>
  );
};
export default ExampleComponent;



