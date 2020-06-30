// Style
import './Modals.scss';

// Components
import SignIn from './SignIn';
import Registration from './Registration';
import VerificationEmail from './VerificationEmail';
import SuccessEmail from './SuccessEmail';
import RestorePassword from './RestorePassword';
import SendingCode from './SendingCode';
import EnterCode from './EnterCode';
import EnterNewPassword from './EnterNewPassword';

/**
 * Компонент для всех модалок
 */
export const Modals = {
  Registration: Registration,
  SignIn: SignIn,
  VerificationEmail: VerificationEmail,
  SuccessEmail: SuccessEmail,
  RestorePassword: RestorePassword,
  SendingCode: SendingCode,
  EnterCode: EnterCode,
  EnterNewPassword: EnterNewPassword,
};
