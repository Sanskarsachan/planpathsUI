import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f3efff;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  padding: 15px 20px 15px 50px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    padding-left: 20px;
  }
`;

const LogoImage = styled.img`
  aspect-ratio: 5.56;
  object-fit: auto;
  object-position: center;
  width: 158px;
  align-self: start;
  max-width: 100%;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LinkContainer = styled.nav`
  display: flex;
  gap: 16px;
  font-size: 14px;
  color: #31225c;
  font-weight: 500;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LinkItem = styled.a`
  font-family: Google Sans, sans-serif;
  background-color: transparent;
  padding: 26px 17px;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
`;

const SocialContainer = styled.div`
  align-self: end;
  display: flex;
  gap: 16px;
  margin: 12px 28px 0 0;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

const FollowText = styled.span`
  color: #31225c;
  margin: auto 0;
  font: 500 14px Google Sans, sans-serif;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialIcon = styled.img`
  aspect-ratio: ${props => props.aspectRatio || '1'};
  object-fit: auto;
  object-position: center;
  width: ${props => props.width || '24px'};
  margin: ${props => props.margin || '0'};
`;

const links = [
  { text: 'About us', padding: '26px 17px' },
  { text: 'Privacy policy', padding: '27px 8px' },
  { text: 'Contact us', padding: '27px 22px' },
  { text: 'Terms of services & Use', padding: '27px 28px 27px 0' }
];

const socialIcons = [
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b77abe48e5931d94e86c1aae45e1c735b6b0217d7d2a73c4a29aad5d676d97b6?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9', alt: 'Social Icon 1' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/03f6a572a58a46a34063b28c53e9c4d92343bbe79eda3425245098f2cbaca5dd?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9', alt: 'Social Icon 2' },
  { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/99c3b21c3e91a5e1d70916c7e96a227396d2d0ac5b2b5f4b68449ca115c02127?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9', alt: 'Social Icon 3', aspectRatio: '0.94', width: '17px', margin: 'auto 0' }
];

function Footer() {
  return (
    <FooterWrapper>
      <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/37e1c906373d6244981360d3b994dcf193bac35a5d831a15be7a0ff3e614bada?apiKey=6239683d8a6b4354886c43843da995e9&&apiKey=6239683d8a6b4354886c43843da995e9" alt="Company Logo" />
      <FooterContent>
        <LinkContainer>
          {links.map((link, index) => (
            <LinkItem key={index} href="#" style={{ padding: link.padding }}>
              {link.text}
            </LinkItem>
          ))}
        </LinkContainer>
        <SocialContainer>
          <FollowText>Follow us</FollowText>
          <IconContainer>
            {socialIcons.map((icon, index) => (
              <SocialIcon
                key={index}
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                aspectRatio={icon.aspectRatio}
                width={icon.width}
                margin={icon.margin}
              />
            ))}
          </IconContainer>
        </SocialContainer>
      </FooterContent>
    </FooterWrapper>
  );
}

export default Footer;