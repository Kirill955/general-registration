import * as React from 'react';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

/**
 * Принимает текст placeholder и имя input
 */
export const InputText: React.FunctionComponent<Props> = ({ plsText, inputName }) => {
  return <input type="text" placeholder={plsText} name={inputName} className="input" />;
};
