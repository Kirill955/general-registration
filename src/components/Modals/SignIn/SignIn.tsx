import * as React from 'react';

// Style
import './SignIn.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Input } from '../../Input/Input';
import { SocialIcons } from '../../SocialIcons/SocialIcons';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит модальное окно входа в систему
export const SignIn: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header mb-5">
        <div className="title">Вход</div>
        <div className="method fs-14 cl-grey_d mt-2">
          <div className="active mr-1">По e-mail</div>
          <div>По номеру телефона</div>
        </div>
      </div>
      <form action="" className="window mb-7">
        <Input.Email />
        <Input.Password />
        <div className="pl-1 cl-blue fs-18 mb-3">Забыли пароль?</div>
        <div className="center">
          <button type="submit" className="btn-enter">
            <span className="pl-4 pr-4">Войти</span>
          </button>
          <div className="fs-18 cl-grey_d">Регистрация</div>
        </div>
      </form>
      <div className="footer">
        <div className="center cl-black fs-18 mb-2">Войти с помощью</div>
        <div className="socials">
          <SocialIcons.Google />
          <SocialIcons.Facebook />
          <SocialIcons.Instagram />
          <SocialIcons.VK />
        </div>
      </div>
    </div>
  );
};
