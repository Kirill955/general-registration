import * as React from 'react';

// Style
import './ButtonSubmit.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

// Static data
import { SUBMIT } from './staticData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;
// Конпка для обрабоитки форм
export const ButtonSubmit: React.FunctionComponent<Props> = ({ onClick }) => {
  return (
    <button type="submit" className="btn-submit" onClick={onClick}>
      {SUBMIT}
    </button>
  );
};
