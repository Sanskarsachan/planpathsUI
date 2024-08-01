import React, { useState } from "react";
import styled from "styled-components";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted", { email, password });
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <FormSection>
          <FormContainer onSubmit={handleSubmit}>
            <Title>Welcome back</Title>
            <Subtitle>Create your own learning path</Subtitle>
            <InputGroup>
              <Label htmlFor="email">Email ID</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>
            <InputGroup>
              <Label htmlFor="password">Password</Label>
              <PasswordInputWrapper>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <PasswordToggle src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3b6830279754149ef1f7642b83076117437619fada034dc976af7fd35daae9b?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Toggle password visibility" />
              </PasswordInputWrapper>
            </InputGroup>
            <ForgotPassword href="#">Forgot password?</ForgotPassword>
            <LoginButton type="submit">Login</LoginButton>
            <Divider>or</Divider>
            <SocialButton>
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4720af1a214c657d1e1cca73daa4607789fe33ffa4fc1edabcd957f356f991d?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Google icon" />
              Continue with Google
            </SocialButton>
            <SocialButton>
              <SocialIcon src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e72d4c8a6763231e3574d07e18ecfbdcff2997c31b8c40dbe83be96aaf0479d?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Facebook icon" />
              Continue with Facebook
            </SocialButton>
            <SignUpPrompt>
              New to PlanPaths? <SignUpLink href="#">Sign up</SignUpLink>
            </SignUpPrompt>
            <OrganizationLogin href="#">Log in with your organisation</OrganizationLogin>
          </FormContainer>
        </FormSection>
        <ImageSection>
          <LoginImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/c95bbbbb172737744cf96f163330c44fd5aa0bae14e9dfc25134756a0ed2530c?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Login illustration" />
        </ImageSection>
      </ContentWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const FormContainer = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: 'Google Sans', sans-serif;
  font-size: 26px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-family: 'Google Sans', sans-serif;
  font-size: 16px;
  color: #666666;
  margin-bottom: 32px;
`;

const InputGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  color: #333333;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #603ac8;
  }
`;

const PasswordInputWrapper = styled.div`
  position: relative;
`;

const PasswordToggle = styled.img`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  display: block;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  color: #603ac8;
  text-decoration: none;
  margin-bottom: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 12px;
  font-family: 'Google Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: #603ac8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4c2e9e;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: 24px 0;
  color: #a3a3a3;
  font-family: 'Lato', sans-serif;
  font-size: 14px;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #d0d0d0;
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  color: #515151;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 16px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const SignUpPrompt = styled.p`
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: #515151;
  text-align: center;
  margin-top: 24px;
`;

const SignUpLink = styled.a`
  color: #603ac8;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #4c2e9e;
  }
`;

const OrganizationLogin = styled.a`
  display: block;
  font-family: 'Google Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #603ac8;
  text-align: center;
  text-decoration: none;
  margin-top: 24px;

  &:hover {
    text-decoration: underline;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default LoginForm;