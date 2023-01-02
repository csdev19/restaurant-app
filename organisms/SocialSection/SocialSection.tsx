import React, { VoidFunctionComponent } from 'react';
import HoveredCard from 'atoms/HoveredCard/HoveredCard';
import {
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
} from '@shared/Icons';
import {
  GITHUB_URL,
  LINKEDIN_URL,
  TWITTER_URL,
  YOUTUBE_URL,
} from '@shared/constants';

const SocialSection: VoidFunctionComponent = () => {
  const handleClick = (url): void => {
    window.open(url, '_blank');
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
      <HoveredCard onClick={() => handleClick(GITHUB_URL)}>
        <div className="flex items-center	flex-col p-10">
          <GithubIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard onClick={() => handleClick(LINKEDIN_URL)}>
        <div className="flex items-center	flex-col p-10">
          <LinkedinIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard onClick={() => handleClick(YOUTUBE_URL)}>
        <div className="flex items-center	flex-col p-10">
          <YoutubeIcon width={80} height={80} />
        </div>
      </HoveredCard>

      <HoveredCard onClick={() => handleClick(TWITTER_URL)}>
        <div className="flex items-center	flex-col p-10">
          <TwitterIcon width={80} height={80} />
        </div>
      </HoveredCard>
    </div>
  );
};

export default SocialSection;
