import * as React from 'react';

import eye from 'assets/images/icons/eye.svg';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

/**
 * Выводит поле для ввода пароля
 */
export const InputPassword: React.FunctionComponent<Props> = () => {
  return (
    <div className="input-icon">
      <input placeholder="Пароль" type="password" name="password" className="input" />
      <img src={eye} alt="eye-icon" />
    </div>
  );
};
