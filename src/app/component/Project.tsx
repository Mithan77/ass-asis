import React from 'react';
import Image from 'next/image';

const serve = () => {
  return (
    <div>
      {/* First Grid */}
      <div className="grid grid-cols-3 gap-2 bg-[#4E4d93]">
        <div className="bg-[#4E4d93] border-white mt-[307px] w-[824px] h-[514px] border-t-2">
          <h4 className="w-[161px] h-[30px] mt-[37px]">Use the components</h4>
          <div className="w-[716px] h-[120px] mt-[83px]">
            <p>Styles in Figma mean you don't have to repetitively enter values for typography, colors, and elevations, minimizing the risk of inconsistencies and streamlining the design process. Within this template, you can find color and type styles and their definitions on the style guide page. To use them, simply select them from the Figma style panel as shown below.</p>
            {/* Ensure images are inside the public folder or imported */}
            <Image src="/block 1.png" className="w-[234px] h-[220px] mt-[296px] rounded-t-[12px]" alt="image 1" />
            <Image src="/block 1.2.png" className="w-[226px] h-[310px] mt-[251px] rounded-t-[12px]" alt="image 2" />
            <Image src="/block 1.3.png" className="w-[236px] h-[245px] mt-[296px] rounded-t-[12px]" alt="image 3" />
          </div>
        </div>
      </div>

      {/* Second Grid */}
      <div className="bg-[#4E4d93] border-white mt-[307px] w-[824px] h-[514px] border-t-2">
        <h4 className="w-[161px] h-[30px] mt-[37px]">Use the components</h4>
        <div className="w-[716px] h-[120px] mt-[83px]">
          <p>There are a bunch of pre-configured components for you to use in this free template. Simply go to the Style Guide page and under the components header, you can see everything included. Buttons, steppers, filter options, and more for you to integrate into your screens and modify to your tastes and requirements.</p>
          <Image src="/block 2.1.jpg" className="w-[161px] h-[243.84px] mt-[241px] gap-[24px]" alt="image 1" />
          <Image src="/block 2.2.jpg" className="w-[161px] h-[243.84px] mt-[241px] gap-[24px]" alt="image 2" />
        </div>
      </div>
    </div>
  )}
  export default serve;