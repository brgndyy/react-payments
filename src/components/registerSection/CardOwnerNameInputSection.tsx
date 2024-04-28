import * as S from '../../app.style';
import Input from '../composables/Input';
import Label from '../composables/Label';
import InputSection from './InputSection';
import { MAX_LENGTH, OWNER_NAME } from '@/constants/cardSection';
import { RegisterFieldProps } from '@/types';
import { useCallback } from 'react';

const CardOwnerNameInputSection = ({
  onChange,
  value,
  onKeyDown,
  isError,
  onBlur,
}: RegisterFieldProps) => {
  const nameRef = useCallback((node: HTMLInputElement | null) => {
    node?.focus();
  }, []);

  return (
    <S.Wrapper>
      <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
        <Label htmlFor={'name'} />
        <Input
          id="name"
          maxLength={MAX_LENGTH.NAME}
          onChange={onChange}
          isError={isError}
          placeholder="JOHN DOE"
          type="text"
          ref={nameRef}
          value={value}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
        />
      </InputSection>
      <S.ErrorContainer>
        <S.ErrorMessageSpan>{isError && OWNER_NAME.errorMessage}</S.ErrorMessageSpan>
      </S.ErrorContainer>
    </S.Wrapper>
  );
};

export default CardOwnerNameInputSection;
