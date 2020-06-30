// Style
import './Input.scss';

// Components
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputText from './InputText';
import InputNumber from './InputNumber';
import InputSelect from './InputSelect';

/**
 * Компонент для всех input-ов
 */
export const Input = {
  Email: InputEmail,
  Password: InputPassword,
  Text: InputText,
  Number: InputNumber,
  Select: InputSelect,
};
