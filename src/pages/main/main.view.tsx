import { BriefcaseBusiness, House, Shapes, UserRound } from 'lucide-react';
import moment from 'moment';
import { FC, memo } from 'react';
import Typewriter from 'typewriter-effect';

import { Box, Layout, ProfileCard, Socials, Tag, Timeline } from '../../components';
import { Typography } from '../../components/typography';
import { convertToRem, effects, theme } from '../../config/theme';

import { LeftSideWrapper, Section } from './main.styles';

export type MainViewProps = {};

export const MainView: FC<MainViewProps> = memo<MainViewProps>(() => (
  <Layout
    leftSide={
      <LeftSideWrapper>
        <ProfileCard>
          <Box customStyles={{ flexDirection: 'column', marginBottom: theme.margin.m }}>
            <Typography component="h2" customStyles={{ fontSize: theme.fontSize.T }}>
              Alexey Lagutik
            </Typography>

            <Typography component="p" styles="subtitle">
              Fullstack Developer
            </Typography>
          </Box>

          <Box customStyles={{ flexDirection: 'column' }}>
            <Typography>rabota.lam@gmail.com</Typography>

            <Typography component="p" styles="bodySmall">
              From Republic of Belarus
            </Typography>
          </Box>

          {/* <Typography component="p" styles="bodySmall" customStyles={{ justifyContent: 'center' }}>
            © 2026 Alex Lam. All Rights Reserved
          </Typography> */}

          <Socials
            items={[
              { name: 'linkedin', link: 'https://www.linkedin.com/in/aliaksei-lahutsik/' },
              { name: 'telegram', link: 'https://t.me/alex_lam92' },
              { name: 'discord', link: ' https://discordapp.com/users/238991216430153728' },
              { name: 'github', link: 'https://github.com/lam-alex' },
            ]}
          />
        </ProfileCard>
      </LeftSideWrapper>
    }
    middleSide={
      <>
        {/* Introduce */}
        <Section modifiers={effects.fullHeight}>
          <Box>
            <Tag>
              <House size={14} /> Introduce
            </Tag>
          </Box>

          <Box modifiers={effects.verticalList}>
            <Typography styles="H1" modifiers={effects.flexColumn}>
              Hi, I'm
              <Typography customStyles={{ color: theme.colors.primary }}>
                <Typewriter options={{ strings: ['Alexey Lagutik', 'a Fullstack Engineer'], autoStart: true, loop: true }} />
              </Typography>
            </Typography>

            <Typography component="p" styles="body">
              I code beautifully simple things and i love what i do. Just simple like that!
            </Typography>
          </Box>
        </Section>

        {/* About */}
        <Section>
          <Box data-aos="fade-up">
            <Tag>
              <UserRound size={14} /> About
            </Tag>
          </Box>

          <Box modifiers={effects.flexColumn}>
            <Typography data-aos="fade-up" component="h3" styles="H" customStyles={{ marginBottom: convertToRem(20) }}>
              Know{' '}
              <Typography component="span" customStyles={{ color: theme.colors.primary }}>
                Me More
              </Typography>
            </Typography>

            <Typography data-aos="fade-up" component="p" styles="body">
              Hi, I'm{' '}
              <Typography component="span" customStyles={{ color: theme.colors.primary }}>
                Alexey Lagutik
              </Typography>
            </Typography>

            <Typography data-aos="fade-up" component="p" styles="body">
              I am a Fullstack Developer with over 13 years of experience building complex web applications, ranging from high‑load services to decentralized
              blockchain solutions. My passion is turning challenging tasks into clean, reliable, and maintainable code. I'm deeply proficient in the modern
              JavaScript ecosystem (React, Node.js, TypeScript), and I equally enjoy designing backend architecture, working with databases, and ensuring
              flawless application performance at every level.
            </Typography>

            <Typography data-aos="fade-up" component="p" styles="body">
              In recent years, I have focused on Web3 and cryptocurrency wallet development. I take particular pleasure in crafting intuitive, secure, and
              high‑performance interfaces for decentralized applications (dApps), as well as fine‑tuning frontend performance to deliver the best possible user
              experience. I am looking for a long‑term project with a strong team, where I can apply my expertise while continuing to grow in blockchain
              technologies and frontend architecture.
            </Typography>
          </Box>
        </Section>

        {/* Resume */}
        <Section>
          <Box>
            <Tag>
              <BriefcaseBusiness size={14} /> Resume
            </Tag>
          </Box>

          <Box modifiers={effects.verticalList}>
            <Typography styles="H" component="h3">
              Education &{' '}
              <Typography component="span" customStyles={{ color: theme.colors.primary }}>
                Experience
              </Typography>
            </Typography>

            <Typography component="p" styles="body">
              I have {moment.unix(1354348800).fromNow(true)} of experience
            </Typography>

            <Timeline
              items={[
                {
                  dateStart: 1727773200,
                  dateEnd: 1769936400,
                  companyName: 'COCA Wallet',
                  position: 'Fullstack Developer',
                  projectStack: ['ReactJS', 'Typescript', 'Redux', 'NodeJS', 'Express', 'Mongo', 'Redis', 'Capacitor', 'Git Flow', 'Docker'],
                },
                {
                  dateStart: 1690880400,
                  dateEnd: 1725181200,
                  companyName: 'Spatium Feeless Wallet',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1580547600,
                  dateEnd: 1690880400,
                  companyName: 'ProjectMedia Ltd',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1554109200,
                  dateEnd: 1580547600,
                  companyName: 'EsterStar LLC',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1459501200,
                  dateEnd: 1554109200,
                  companyName: 'Web2Innovation LLC',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1401609600,
                  dateEnd: 1459501200,
                  companyName: 'SkyIncom LLC',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1388563200,
                  dateEnd: 1401609600,
                  companyName: 'Asimpl LLC',
                  position: 'Fullstack Developer',
                },
                {
                  dateStart: 1354348800,
                  dateEnd: 1385884800,
                  companyName: 'Vehicle Fleet No. 19, Branch of OJSC "Minoblavtotrans"',
                  position: 'Software Engineer',
                },
              ]}
            />
          </Box>
        </Section>

        {/* My Skills */}
        <Section data-aos="fade-up">
          <Box>
            <Tag>
              <Shapes size={14} /> My Skills
            </Tag>
          </Box>

          <Box modifiers={effects.flexColumn} data-aos="fade-up">
            <Typography styles="H" component="h3">
              My{' '}
              <Typography component="span" customStyles={{ color: theme.colors.primary }}>
                Advantages
              </Typography>
            </Typography>
          </Box>

          <Box modifiers={effects.horizontalList} customStyles={{ gap: convertToRem(50) }} data-aos="fade-up">
            <Box modifiers={effects.verticalList}>
              <Typography styles="body">
                Frontend{' '}
                <Typography component="span" customStyles={{ color: theme.colors.primary }}>
                  Technology
                </Typography>
              </Typography>

              <Box modifiers={effects.horizontalList} data-aos="fade-up">
                <Tag>ReactJS</Tag>
                <Tag>Typescript</Tag>
                <Tag>Redux</Tag>
                <Tag>Styled-components</Tag>
                <Tag>Css</Tag>
                <Tag>Scss</Tag>
                <Tag>HTML</Tag>
                <Tag>Axios</Tag>
              </Box>
            </Box>

            <Box modifiers={effects.verticalList} data-aos="fade-up">
              <Typography styles="body">
                Backend{' '}
                <Typography
                  component="span"
                  customStyles={{
                    color: theme.colors.primary,
                  }}
                >
                  Technology
                </Typography>
              </Typography>

              <Box modifiers={effects.horizontalList} data-aos="fade-up">
                <Tag>Nodejs</Tag>
                <Tag>Express</Tag>
                <Tag>REST API</Tag>
                <Tag>Redis</Tag>
                <Tag>Mongo</Tag>
                <Tag>MySQL</Tag>
                <Tag>Sequelize</Tag>
                <Tag>TypeORM</Tag>
                <Tag>Git</Tag>
                <Tag>Solidity</Tag>
                <Tag>Docker</Tag>
              </Box>
            </Box>
          </Box>
        </Section>
      </>
    }
  />
));
