import * as React from 'react';

// Style
import './VerificationEmail.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Button } from '../../Button/Button';

// Static data
import { TITLE } from './statisData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит модалку с подтверждением email
export const VerificationEmail: React.FunctionComponent<Props> = ({ email }) => {
  return (
    <div className="main">
      <div className="header mt-4 mb-3">
        <div className="title">{TITLE}</div>
        <div className="center mt-4">
          <div className="fs-18 cl-blue l-h">
            На адрес <span className="border-elem">{email}</span> отправлено письмо
            <br />
            для подтверждения учетной записи
          </div>
        </div>
      </div>
      <form action="" className="window mb-4">
        <div className="center">
          <div className="pl-1 fs-18 cl-grey_d mb-2">Письмо не пришло? Отправить еще раз</div>
          <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
        </div>
      </form>
    </div>
  );
};
