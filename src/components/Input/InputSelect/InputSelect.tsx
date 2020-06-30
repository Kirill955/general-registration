import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

// Img
import chevrowDown from 'assets/images/btn-icons/chevrow-down.svg';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
/**
 * Принимает текст и выводит текстовое поле со раскрывающей стрелокчой
 */
export const InputSelect: React.FunctionComponent<Props> = ({ text, options }) => {
  return (
    <div className="select">
      <select name="" id="">
        <option disabled selected>
          {text}
        </option>
        {options.map((text) => {
          return <option key={Math.random()}>{text}</option>;
        })}
      </select>
      <img src={chevrowDown} alt="chevrow-down" />
    </div>
  );
};
