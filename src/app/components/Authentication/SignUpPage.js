import React, { useState } from 'react';
import styled from 'styled-components';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <FormContainer>
      <FormContent>
        <FormColumn>
          <FormWrapper onSubmit={handleSubmit}>
            <Header>Sign up</Header>
            <Subheader>Create your own learning path</Subheader>
            <InputField
              label="Email ID"
              type="email"
              placeholder="Enter your email ID"
              value={email}
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Create password"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8a415c732e512c783e5d6f0f29c6cca178b0cad46a3a3921ebcbffb70a8d45df?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9"
              hint="Between 8 and 16 characters"
              value={password}
              autoComplete="create-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              label="Re-enter password"
              type="password"
              placeholder="Re-enter password"
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/db0f77e8f8648bc054d4950be1e959d139eb0a40b022dce0e5352ae68b48a184?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9"
              value={confirmPassword}
              autoComplete="re-enter-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" primary>Join for free</Button>
            <TermsText>
              By clicking "Join for free", you agree to our Terms of services & Use
              <br />
              and acknowledge that you have read our Privacy Policy
            </TermsText>
            <Divider>or</Divider>
            <SocialButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/38771e923938953756895aa380702e83d3885a04fd1b4ffdb668b1d0bdefcf41?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" text="Continue with Google" />
            <SocialButton icon="https://cdn.builder.io/api/v1/image/assets/TEMP/8781fddd67ecc702a5578593625a059f58ce54f4e44ebb161cf06511f10d87a6?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" text="Continue with Facebook" />
            <LoginPrompt>
              Already on PlanPaths? <LoginLink>Log in</LoginLink>
            </LoginPrompt>
            <OrganizationSignUp>Sign up with your organisation</OrganizationSignUp>
          </FormWrapper>
        </FormColumn>
        <ImageColumn>
          <IllustrationImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/75952a5e16a37610c4f5704c7d06380a2cfeec43b1097c0bc5b9a78414b06c20?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Sign up illustration" />
        </ImageColumn>
      </FormContent>
    </FormContainer>
  );
};

const FormContainer = styled.main`
  background-color: #fff;
  padding-left: 80px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const FormContent = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
`;

const FormColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FormWrapper = styled.form`
  border-radius: 16px;
  background-color: #fff;
  display: flex;
  margin-top: 52px;
  flex-grow: 1;
  flex-direction: column;
  font-size: 14px;
  color: #3f3e3e;
  font-weight: 400;
  letter-spacing: 0.18px;
  width: 100%;
  padding: 20px 27px 39px;
  @media (max-width: 991px) {
    margin-top: 40px;
    padding: 0 20px;
  }
`;

const Header = styled.h1`
  letter-spacing: 0.5px;
  align-self: flex-start;
  margin-left: 23px;
  font: 500 26px 'Google Sans', sans-serif;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const Subheader = styled.h2`
  font-family: 'Google Sans', sans-serif;
  letter-spacing: 0.5px;
  align-self: flex-start;
  margin: 8px 0 0 23px;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`;

const InputField = ({ label, type, placeholder, icon, hint, value, onChange }) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputContainer>
        <Input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {icon && <Icon src={icon} alt="" />}
      </InputContainer>
      {hint && <Hint>{hint}</Hint>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin: 16px 21px 0 22px;
  @media (max-width: 991px) {
    margin: 16px 10px 0;
  }
`;

const Label = styled.label`
  display: block;
  letter-spacing: 0.5px;
  font: 500 16px 'Google Sans', sans-serif;
  margin-bottom: 4px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  font-family: 'Google Sans', sans-serif;
  border-radius: 4px;
  background-color: #fff;
  color: #8a8a8a;
  line-height: 140%;
  padding: 14px;
  border: 1px solid #d0d0d0;
`;

const Icon = styled.img`
  position: absolute;
  right: 14px;
  width: 16px;
  height: 16px;
`;

const Hint = styled.p`
  font-family: 'Google Sans', sans-serif;
  color: #494747;
  margin-top: 4px;
`;

const Button = styled.button`
  border-radius: 8px;
  background-color: ${props => props.primary ? '#603ac8' : 'transparent'};
  color: ${props => props.primary ? '#fff' : '#515151'};
  letter-spacing: 0.5px;
  margin: 24px 21px 0 22px;
  padding: 12px 24px;
  font: 700 16px/140% Lato, sans-serif;
  border: ${props => props.primary ? 'none' : '1px solid #d0d0d0'};
  cursor: pointer;
  @media (max-width: 991px) {
    margin: 24px 10px 0;
    padding: 12px 20px;
  }
`;

const TermsText = styled.p`
  color: #8a8a8a;
  text-align: center;
  letter-spacing: 0.15px;
  margin-top: 19px;
  font: 12px/17px 'Google Sans', sans-serif;
`;

const Divider = styled.div`
  font-family: Lato, sans-serif;
  background-color: #fff;
  align-self: center;
  margin-top: 6px;
  color: #a3a3a3;
  white-space: nowrap;
  line-height: 140%;
  padding: 10px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const SocialButton = ({ icon, text }) => {
  return (
    <StyledSocialButton>
      <SocialIcon src={icon} alt="" />
      <SocialButtonText>{text}</SocialButtonText>
    </StyledSocialButton>
  );
};

const StyledSocialButton = styled.button`
  border-radius: 8px;
  display: flex;
  gap: 20px;
  color: #515151;
  font-weight: 500;
  line-height: 140%;
  margin: 16px 21px 0 22px;
  padding: 16px 24px;
  border: 1px solid #d0d0d0;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 991px) {
    margin: 16px 10px 0;
    padding: 16px 20px;
  }
`;

const SocialIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const SocialButtonText = styled.span`
  font-family: 'Google Sans', sans-serif;
  flex-grow: 1;
`;

const LoginPrompt = styled.p`
  font-family: Lato, sans-serif;
  font-weight: 700;
  color: #603ac8;
  align-self: center;
  margin-top: 21px;
`;

const LoginLink = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const OrganizationSignUp = styled.button`
  font-family: 'Google Sans', sans-serif;
  font-weight: 700;
  color: #603ac8;
  align-self: center;
  margin-top: 43px;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const ImageColumn = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const IllustrationImage = styled.img`
  aspect-ratio: 0.63;
  object-fit: cover;
  width: 100%;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default SignUpForm;