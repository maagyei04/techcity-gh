'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Heading, Flex, Text, Button, Avatar, RevealFx } from '@/once-ui/components';
import { Projects } from '@/components/services/Projects';
import styles from '@/components/contact/Gallery.module.scss';

import { baseURL, routes, renderContent } from '@/app/resources';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import CoreServices from '@/components/CoreServices';
import EmpoweringTeams from '@/components/Team';
import CollaborativeEnvironment from '@/components/Collab';
import LeadingTechCompanies from '@/components/leading';
import OurAchievements from '@/components/Achievements';
import Section from '@/components/Section';
import Section2 from '@/components/section2';
import EmpowerSection from '@/components/EmpowerSection';
import { TypeEffect } from '@/components/TypeEffect';
import TechCityGHOverview from '@/components/Overview';
import { useScroll, useTransform, motion } from 'framer-motion';


export default function Home(
	{ params: { locale } }: { params: { locale: string } }
) {
	const t = useTranslations();
	const { home, services, person, newsletter } = renderContent(t);

	const { scrollYProgress } = useScroll();
	const translateX = useTransform(scrollYProgress, [0, 1], ['-100vw', '0vw']);

	const words = ["Collaborate", "Create", "And Build"];

	return (
		<Flex
			maxWidth="l" fillWidth gap="l"
			direction="column" alignItems="center" className={styles.up} style={{ overflowX: 'scroll' }}
		>
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				justifyContent="center"
				alignItems='center'
				align='center'
				fillWidth
				direction="column"
				paddingY="s" gap="m">
				<Flex
					direction="column"
					fillWidth maxWidth="xl" gap="m"
					justifyContent="center"
					alignItems='center'
				>
					<Flex>
						<img width={700} height={100} src='/images/gif2.gif' />
					</Flex>

					<RevealFx translateY="4">
						<Heading
							wrap="initial"
							variant="display-strong-m" color='blue' style={{ height: '80px' }}>
							<TypeEffect words={words} />
							<Text>
								{home.headline}
							</Text>
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							{home.subline}
						</Text>
					</RevealFx>
					<RevealFx translateY="12" delay={0.4}>
						<Button
							data-border="rounded"
							href={`/${locale}/about`}
							variant="primary"
							suffixIcon="chevronRight"
							size="l">
							<Flex
								gap="8"
								alignItems="center">
								{services.subtitle}
							</Flex>
						</Button>
					</RevealFx>
				</Flex>

			</Flex>

			<motion.div
				initial={{
					opacity: 0,
					scale: 1,
				}}
				whileInView={{
					opacity: 1,
					transition: {
						duration: 2
					},
					scale: [1, 2, 1.5, 1]
				}}
			>
				<Flex
					justifyContent="center"
					alignItems='center'
					align='center'
					direction="row"
					gap="m"
					mobileDirection='column'
					translate="yes"
				>
					<CoreServices />
					<Flex
						direction="column"
						gap="m"
						mobileDirection='column'
					>
						<Flex
							direction="row"
							gap="m"
						>
							<EmpoweringTeams />
							<CollaborativeEnvironment />
						</Flex>
						<Flex
							direction="row"
							gap="m"
						>
							<LeadingTechCompanies />
							<OurAchievements />
						</Flex>
					</Flex>
				</Flex>
			</motion.div>


			<Flex
				justifyContent="center"
				alignItems='center'
				align='center'
				fillWidth
				direction="column"
				paddingY="l" gap="l">
				<Flex
					direction="column"
					fillWidth maxWidth="l" gap="l"
					justifyContent="center"
					alignItems='center'
				>
					<RevealFx translateY="4">
						<Heading
							wrap="initial"
							variant="display-strong-m">
							{home.headline2}
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							Discover how TechCity GH brings together the best resources and expertise to drive digital success.
						</Text>
					</RevealFx>
				</Flex>
			</Flex>

			<motion.div
				initial={{
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					transition: {
						duration: 1
					},
					scale: [0.4, 0.5, 1]
				}}
			>
				<Flex
					fillWidth
					justifyContent="center"
					alignItems="center"
					direction="row"
					gap="s"
					className={styles.pageContainer}
					mobileDirection='column'
				>
					<Section
						title=" Your Vision"
						description="At TechCity GH, we believe in turning ideas into impactful digital solutions. Our team is dedicated to helping you achieve your goals with industry-leading technology and strategies."
						images={[
							'/images/tc7.png',
							'/images/tc6.png',
						]}
						images2={[
							'/images/tc5.png',
							'/images/tc4.png',
						]}
					/>
					<Section2
						title=" Your Vision"
						description="Our coworking spaces foster creativity and innovation, offering flexible, high-tech work environments for individuals and teams to thrive."
						image="/images/gallery/img-11.jpg"
					/>
				</Flex>
			</motion.div>


			<EmpowerSection
				title=" Your Vision"
				description="At TechCity GH, we provide comprehensive software training programs designed to equip you with the skills needed in today's digital landscape. Whether you're a beginner or looking to advance your expertise, our courses are tailored to meet your needs."
				images={[
					'/images/tc8.png',
					'/images/tc3.png',
				]}
				images2={[
					'/images/tc2.png',
					'/images/tc1.png',
				]}
				sub={[
					{
						head: 'Hands-On Learning',
						tail: 'Engage in practical, project-based training that reinforces theoretical concepts.',

					},
					{
						head: 'Expert Instructors',
						tail: 'Learn from experienced professionals with real-world experience in software development and IT.',

					},
					{
						head: 'Diverse Curriculum',
						tail: 'From basic coding to advanced software engineering, our curriculum covers various programming languages and tools.',

					},
					{
						head: 'Flexible Scheduling',
						tail: 'We offer both in-person and online training options to fit your busy lifestyle.'

					}
				]}
			/>

			<motion.div
				initial={{ x: '-50vw' }}
				whileInView={{ x: '0' }}
				transition={{ duration: 2, ease: 'easeInOut' }}
			>
				<TechCityGHOverview locale={locale} />
			</motion.div>

			{newsletter.display &&
				<Mailchimp newsletter={newsletter} />
			}
		</Flex>
	);
}
