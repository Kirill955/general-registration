import * as React from 'react';

// Components
import SocialIconItem from './SocialIconItem';

// Img
import GoogleImg from 'assets/images/social-icons/google.png';
import FacebookImg from 'assets/images/social-icons/facebook.png';
import InstagramImg from 'assets/images/social-icons/insta.png';
import VKImg from 'assets/images/social-icons/vk.png';

const Google: React.FunctionComponent = () => {
  return <SocialIconItem src={GoogleImg} alt="google" />;
};
const Facebook: React.FunctionComponent = () => {
  return <SocialIconItem src={FacebookImg} alt="facebook" />;
};
const Instagram: React.FunctionComponent = () => {
  return <SocialIconItem src={InstagramImg} alt="instagram" />;
};
const VK: React.FunctionComponent = () => {
  return <SocialIconItem src={VKImg} alt="vk" />;
};

export const SocialIcons = {
  Google: Google,
  Facebook: Facebook,
  Instagram: Instagram,
  VK: VK,
};
