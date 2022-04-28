import { IService } from '@/type';
import React, { FunctionComponent } from 'react';

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {
  const createMarkup = () => {
    return {
      __html: about,
    };
  };
  return (
    <div className="flex items-center p-2 space-x-4 ">
      <Icon className="w-12 h-12 text-blue-600" />
      <div className="max-w-[85%]">
        <h4 className="font-bold">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
};

export default ServiceCard;
