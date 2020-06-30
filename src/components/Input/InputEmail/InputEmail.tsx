import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
/* Выводит поле для ввода email, по дефолту в placeholder выводится Email, 
но можно передать другое значение через plcText*/
export const InputEmail: React.FunctionComponent<Props> = ({ plcText }) => {
  return (
    <input type="email" placeholder={plcText ? plcText : 'Email'} name="email" className="input" />
  );
};
