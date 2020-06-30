import * as React from 'react';

import arrowDown from 'assets/images/icons/chevrow-down.svg';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
/**
 * Принимает текст и выводит текстовое поле со раскрывающей стрелокчой
 */
export const InputSelect: React.FunctionComponent<Props> = ({ text }) => {
  return (
    <div className="select">
      <select name="" id="">
        <option disabled selected>
          {text}
        </option>
        <option>{text}</option>
        <option>{text}</option>
      </select>
      <img src={arrowDown} alt="chevrow-down" />
    </div>
  );
};
