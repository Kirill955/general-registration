import React from 'react';
import { useHistory } from 'react-router-dom';

// Style
import './ToBackArrow.scss';

// Components
import { MapStateToPropsType, MapDispatchToPropsType, OwnPropsType } from './typings';

// Static data
import { TEXT } from './staticData';

// Img
import BackArrow from 'assets/images/btn-icons/arrow-left.svg';

export type Props = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType;

// Принимает пропрс который вставляется в адресную строку при клике
export const ToBackArrow: React.FunctionComponent<Props> = ({ pathExit }) => {
  const historyUrl = useHistory();
  const handleClickArrow = () => historyUrl.push(pathExit);
  return (
    <div className="to_back">
      <button onClick={handleClickArrow}>
        <img className="mr-1" src={BackArrow} alt="arrow-left" />
      </button>
      <div className="cl-blue fs-18">{TEXT}</div>
    </div>
  );
};
