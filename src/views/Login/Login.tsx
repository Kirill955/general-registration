import React from 'react';

// Style
import './Login.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import { Modals } from '../../components/Modals/Modals';
import { Button } from '../../components/Button/Button';

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

export const Login: React.FunctionComponent<Props> = () => {
  return (
    <div className="login">
      <Button.ToBackArrow pathExit="/" />
      <Modals.SignIn />
    </div>
  );
};
