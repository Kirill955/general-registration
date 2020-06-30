import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

// Static data
import { MESSAGE } from './staticData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит модалку с сообщением об успешном подтверждением email
export const SuccessEmail: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header mt-3 mb-4">
        <div className="center">
          <div className="fs-18 cl-blue l-h">{MESSAGE}</div>
        </div>
      </div>
      <form action="" className="window mb-5">
        <div className="center">
          <button type="button" className="btn-enter">
            <span className="pl-4 pr-4">На главную</span>
          </button>
        </div>
      </form>
    </div>
  );
};
