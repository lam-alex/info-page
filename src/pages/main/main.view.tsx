import { BriefcaseBusiness, House, Shapes, UserRound } from 'lucide-react';
import moment from 'moment';
import { FC, memo } from 'react';
import Typewriter from 'typewriter-effect';

import { Box, Layout, ProfileCard, Skeleton, Socials, Tag, Timeline } from '../../components';
import { Typography } from '../../components/typography';
import { MainData } from '../../config/store/slices/main';
import { convertToRem, effects, theme } from '../../config/theme';

import { LeftSideWrapper, Section } from './main.styles';

export type MainViewProps = MainData;

export const MainView: FC<MainViewProps> = memo<MainViewProps>(({ experiences, startExperience, skills, socials }) => (
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

          <Socials items={socials} />

          <Typography component="p" styles="extraSmall" customStyles={{ textAlign: 'center', margin: 0 }}>
            © 2026 Alex Lam. All Rights Reserved
          </Typography>
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
              I have{' '}
              {startExperience > -1 ? (
                moment.unix(startExperience).fromNow(true)
              ) : (
                <Skeleton component="span" width={50} height={13} customStyles={{ display: 'inline-block', verticalAlign: 'middle' }} />
              )}{' '}
              of experience
            </Typography>

            <Timeline items={experiences} />
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
                {skills.frontend.map((f, i) => (
                  <Tag key={`fe-${i}`}>{f}</Tag>
                ))}
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
                {skills.backend.map((b, i) => (
                  <Tag key={`be-${i}`}>{b}</Tag>
                ))}
              </Box>
            </Box>
          </Box>
        </Section>
      </>
    }
  />
));
