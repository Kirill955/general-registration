import * as React from 'react';

// Style
import './EnterNewPassword.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

export const EnterNewPassword: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <form action="" className="window mb-7 mt-4">
        <Input.Password plsText="Ввести новый пароль" />
        <Input.Password plsText="Подтвердить новый пароль" />
        <div className="center mt-1">
          <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
        </div>
      </form>
    </div>
  );
};
