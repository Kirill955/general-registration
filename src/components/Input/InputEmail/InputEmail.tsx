import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
// Выводит поле для ввода email
export const InputEmail: React.FunctionComponent<Props> = () => {
  return <input type="email" placeholder="Email" name="email" className="input" />;
};
