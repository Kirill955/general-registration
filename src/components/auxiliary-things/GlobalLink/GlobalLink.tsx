import * as React from 'react';

// Style
import './GlobalLink.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

/* Принимает путь и текст ссылки, className не обязательный пропс, однако если требуется 
поменять стили можно задать свой класс и стилизовать его 
*/
export const GlobalLink: React.FunctionComponent<Props> = ({ href, text, className }) => {
  return (
    <a href={href} className={`clobal-link ${className ? className : null}`}>
      {text}
    </a>
  );
};
