import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
// Выводит checkbox с текстом
export const InputCheckbox: React.FunctionComponent<Props> = ({ name, id, labelText, htmlFor }) => {
  return (
    <div className="checkbox">
      <input type="radio" name={name} id={id} />
      <label htmlFor={htmlFor}>{labelText}</label>
    </div>
  );
};
