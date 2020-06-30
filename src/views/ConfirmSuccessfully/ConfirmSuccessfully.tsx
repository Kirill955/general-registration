import React from 'react';

// Style
import './ConfirmSuccessfully.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';
import { Modals } from '../../components/Modals/Modals';
import { Button } from '../../components/Button/Button';

type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;
export const ConfirmSuccessfully: React.FunctionComponent<Props> = () => {
  return (
    <div className="email-submit2">
      <Button.ToBackArrow pathExit="/" />
      <Modals.SuccessEmail />
    </div>
  );
};
