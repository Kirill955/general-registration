import * as React from 'react';

// Style
import './EnterCode.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Button } from '../../Button/Button';

// Static data
import { TITLE } from './staticData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

export const EnterCode: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header mb-5">
        <div className="title">{TITLE}</div>
      </div>
      <form action="" className="window mb-1">
        <div className="group">
          <input type="text" placeholder="" name="" />
          <input type="text" placeholder="" name="" />
          <input type="text" placeholder="" name="" />
          <input type="text" placeholder="" name="" />
        </div>
        <div className="center mt-2">
          <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
        </div>
      </form>
    </div>
  );
};
