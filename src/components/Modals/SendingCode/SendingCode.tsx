import * as React from 'react';

// Style
import './SendingCode.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Button } from '../../Button/Button';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Окно, потдверждающее об отправки кода на email
export const SendingCode: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header mt-4 mb-3">
        <div className="center">
          <div className="fs-18 cl-blue l-h">
            На адрес <span className="border-elem">test@mail.ru</span> отправлен
            <br />
            код для смены пароля.
          </div>
        </div>
      </div>
      <form action="" className="window mb-4">
        <div className="center">
          <div className="pl-1 fs-18 cl-grey_d mb-2">Код не пришел? Отправить еще раз</div>
          <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
        </div>
      </form>
    </div>
  );
};
