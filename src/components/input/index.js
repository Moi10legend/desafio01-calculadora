import { InputContainer } from './styles';

const Input = ({value}) => {
    return (
      <InputContainer>
        <input type='number' value={value} disabled  />
      </InputContainer>
    );
  }
  
  export default Input;