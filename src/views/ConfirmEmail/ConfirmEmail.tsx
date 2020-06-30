import React from 'react';

// Style
import './ConfirmEmail.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import { Modals } from '../../components/Modals/Modals';
import { Button } from '../../components/Button/Button';

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
export const ConfirmEmail: React.FunctionComponent<Props> = () => {
  return (
    <div className="email-submit">
      <Button.ToBackArrow pathExit="/" />
      <Modals.VerificationEmail email="test@mail.ru" />
    </div>
  );
};
