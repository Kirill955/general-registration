import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит блок с иконкой принимает путь и альтернативный текст
export const SocialIconItem: React.FunctionComponent<Props> = ({ src, alt }) => {
  return (
    <div className="social_item">
      <img src={src} alt={alt} />
    </div>
  );
};
