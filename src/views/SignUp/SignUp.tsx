import React from 'react';

// Style
import './SignUp.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import { Modals } from '../../components/Modals/Modals';
import { Button } from '../../components/Button/Button';

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

export const SignUp: React.FunctionComponent<Props> = () => {
  return (
    <div className="registration">
      <Button.ToBackArrow pathExit="/" />
      <Modals.Registration />
    </div>
  );
};
