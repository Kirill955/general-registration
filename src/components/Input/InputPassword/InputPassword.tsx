import * as React from 'react';

import eye from 'assets/images/icons/eye.svg';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

/**
 * Выводит поле для ввода пароля или любых других скрытых полей
 */
export const InputPassword: React.FunctionComponent<Props> = ({ plsText }) => {
  return (
    <div className="input-icon">
      <input placeholder={plsText} type="password" name="password" className="input" />
      <img src={eye} alt="eye-icon" />
    </div>
  );
};
