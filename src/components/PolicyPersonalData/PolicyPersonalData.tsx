import * as React from 'react';

// Style
import './PolicyPersonalData.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';

// Static Data
import { TITILE, P1, P2, P3, P4, P5, P6, P7, P8 } from './staticData';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

export const PolicyPersonalData: React.FunctionComponent<Props> = () => {
  return (
    <div className="policy-wrapper">
      <h6 className="policy-title">{TITILE}</h6>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P1.TITLE}</h6>
        <p className="policy-paragrap">{P1.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P2.TITLE}</h6>
        <p className="policy-paragrap">{P2.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P3.TITLE}</h6>
        <p className="policy-paragrap">{P3.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P4.TITLE}</h6>
        <p className="policy-paragrap">{P4.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P5.TITLE}</h6>
        <p className="policy-paragrap">{P5.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P6.TITLE}</h6>
        <p className="policy-paragrap">{P6.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P7.TITLE}</h6>
        <p className="policy-paragrap">{P7.TEXT}</p>
      </div>
      <div className="policy-item">
        <h6 className="policy-subtitle">{P8.TITLE}</h6>
        <p className="policy-paragrap">{P8.TEXT}</p>
      </div>
    </div>
  );
};
