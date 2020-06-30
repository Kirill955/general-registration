import * as React from 'react';

// Style
import './RestorePassword.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';

// Static data
import { TITLE } from './staticData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводить окно восставновления пароля
export const RestorePassword: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header mb-5">
        <div className="title">{TITLE}</div>
        <div className="method fs-14 cl-grey_d mt-2">
          <div className="active mr-1">По e-mail</div>
          <div>По номеру телефона</div>
        </div>
      </div>
      <form action="" className="window mb-7">
        <Input.Email plcText="Введите  адрес при регистрации" />
        <div className="pl-1 cl-blue fs-18 mb-3">Забыли пароль?</div>
        <div className="center">
          <div className="resotre-password__btn-submit__wrapper">
            <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
          </div>
          <div className="fs-18 cl-grey_d">Регистрация</div>
        </div>
      </form>
    </div>
  );
};
