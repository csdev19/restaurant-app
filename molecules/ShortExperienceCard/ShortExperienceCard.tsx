import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { IShortExperience } from './ShortExperienceCard.types';

const ShortExperienceCard: FunctionComponent<IShortExperience> = ({
  description,
  image,
  provisionalDate,
  title,
}) => {
  return (
    <>
      <div
        className={clsx(
          'w-full',
          'md:w-10/12',
          'm-auto',
          'shadow-2xl',
          'dark:shadow-none',
          'dark:bg-cs-hard-black',
          'bg-white',
          'rounded-2xl',
          'my-12',
          'overflow-auto',
          'opacity-95',
        )}
      >
        <div className="p-4 md:p-8">
          <div className="flex items-center flex-col md:flex-row">
            <div className="h-14 w-14 mb-4 md:mb-0 rounded-full overflow-auto">
              <img src={image} alt="pamer" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-center md:text-left ml-2">{title}</h3>
              <h4 className="text-center md:text-left ml-2">
                {provisionalDate}
              </h4>
            </div>
          </div>

          <div className="mt-8 md:mt-2 md:ml-16">
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortExperienceCard;
