### Inputs

```tsx
  import {Input} from './Input.tsx';
    <>
      <Input.Text plsText="Имя" inputName="name" />
      <br/>
      <Input.Select text="Город" options={['Город', 'Город']} />
      <br/>
      <Input.Password plcText="Пароль" />
      <br/>
      <Input.Number plsText="дд" inputName="day" />
      <br/>
      <Input.Number plsText="мм" inputName="month" />
      <br/>
      <Input.Number plsText="гг" inputName="year" />
      <br/>
      <Input.Email />
      <br/>
      <Input.Checkbox name="gender" id="male" labelText="Мужской" htmlFor="male" />
      <Input.Checkbox name="gender" id="female" labelText="Женский" htmlFor="female" />
    </>
```