import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит поле для ввода цифр, в plsText указываем вид даты(дд, мм, гг и т.д.)
export const InputNumber: React.FunctionComponent<Props> = ({ plsText, inputName }) => {
  return <input type="text" placeholder={plsText} name={inputName} className="input" />;
};
