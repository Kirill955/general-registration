import * as React from 'react';

// Style
import './Registration.scss';

// Components
import { OwnPropsType, MapDispatchToPropsType, MapStateToPropsType } from './typings';
import { Input } from '../../Input/Input';
import { Button } from '../../Button/Button';

// Static data
import {
  REGISTR,
  REGISTR_CONDITIONS,
  LEADERS,
  IMG_PROFILE,
  IMG_PROFILE_CONDITIONS,
  DENDER,
  MALE,
  FEMALE,
  POLICY,
  CONSENT,
} from './staticData';

// Img
import avatar from 'assets/images/user/avatar.png';
import chevrowDown from 'assets/images/btn-icons/chevrow-down.svg';
import trash from 'assets/images/btn-icons/trash.svg';

type Props = OwnPropsType & MapDispatchToPropsType & MapStateToPropsType;

// Выводит модалку с окном регистрацию
export const Registration: React.FunctionComponent<Props> = () => {
  return (
    <div className="main">
      <div className="header center mb-4">
        <div className="title">{REGISTR}</div>
        <div className="fs-16 cl-grey_d mt-2">{REGISTR_CONDITIONS}</div>
        <div className="t-up cl-blue fs-14 mt-1 fw-500">{LEADERS}</div>
      </div>
      <form action="" className="window ml-1 mr-1">
        <Input.Text plsText="Имя" inputName="#" />
        <Input.Text plsText="Фамилия" inputName="#" />
        <Input.Text plsText="Отчество" inputName="#" />
        <Input.Text plsText="Страна" inputName="#" />
        <div className="group .g-2">
          <Input.Select text="Город" options={['Город', 'Город']} />
          <Input.Select text="Регион" options={['Регион', 'Регион']} />
        </div>

        <div className="about mb-2">
          <div className="photo-profile">
            <div className="avatar-img">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="avatar-info">
              <div className="fs-16 cl-grey_d mr-1">{IMG_PROFILE}</div>
              <img src={trash} alt="" />
            </div>
          </div>

          <div className="fs-14 cl-grey_d mt-2">{IMG_PROFILE_CONDITIONS}</div>

          <div className="fs-16 cl-grey_d mt-3 mb-2">Дата рождения</div>
          <div className="group g-more">
            <Input.Number plsText="дд" inputName="#" />
            <Input.Number plsText="мм" inputName="#" />
            <Input.Number plsText="гг" inputName="#" />
            <div className="select gender-s">
              <select name="" id="">
                <option disabled selected>
                  {DENDER}
                </option>
                <option>{MALE}</option>
                <option>{FEMALE}</option>
              </select>
              <img src={chevrowDown} alt="chevrow-down" />
            </div>
          </div>

          <div className="group gender-l cl-grey_d fs-14">
            <div className="fs-16">{DENDER}</div>
            <Input.Checkbox name="gender" id="male" labelText={MALE} htmlFor="male" />
            <Input.Checkbox name="gender" id="female" labelText={FEMALE} htmlFor="female" />
          </div>
        </div>

        <Input.Email />
        <Input.Password plsText="Пароль" />
        <Input.Password plsText="Подтвердить пароль" />

        <div className="center cl-grey_d gender-l">
          <Input.Checkbox name="policy" id="policy" labelText={POLICY} htmlFor="policy" />
        </div>

        <div className="center cl-grey_d mt-2 mb-4">
          <Button.Submit onClick={() => console.log('click in ButtomSubmit')} />
          <div className="fs-14 cl-grey_d gender-s">{CONSENT}</div>
        </div>
      </form>
    </div>
  );
};
