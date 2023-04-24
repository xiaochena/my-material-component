import React from 'react';
import { Image } from 'antd';
import './index.scss';

const GeneralImage: React.FC<{}> = () => {
  const images = ['https://fakeimg.pl/200x200?text=Hello', 'https://fakeimg.pl/200x200?text=Hello'];
  return (
    <div className="general-image">
      {images.map((item, index) => (
        <Image src={item} key={index} className="general-image-image" preview={false} />
      ))}
    </div>
  );
};

GeneralImage.displayName = 'GeneralImage';

export default GeneralImage;
