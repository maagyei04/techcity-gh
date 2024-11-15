'use client';

import { Avatar, Button, Flex, Heading, Icon, IconButton, RevealFx, SmartImage, Tag, Text } from '@/once-ui/components';
import { baseURL, renderContent } from '@/app/resources';
import TableOfContents from '@/components/about/TableOfContents';
import styles from '@/components/about/about.module.scss'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { TypeEffect } from '@/components/TypeEffect';
import TeamCard from '@/components/about/TeamCard';
import { motion } from 'framer-motion';


{/*}
export async function generateMetadata(
    { params: { locale } }: { params: { locale: string } }
) {
    const t = await getTranslations();
    const { person, about, social } = renderContent(t);
    const title = about.title;
    const description = about.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/blog`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}
*/}

export default function About(
    { params: { locale } }: { params: { locale: string } }
) {
    //unstable_setRequestLocale(locale);
    const t = useTranslations();
    const { person, about, social } = renderContent(t);
    const words = ["Journey", "Mission", "Story"];

    const images =
        [
            '/images/tc11.png',
            '/images/tc9.png',
            '/images/tc5.png',
            '/images/tc10.png',
        ]

    const teamMembers = [
        { name: 'Mr Yaw Owusu', role: 'Managing Director', imageUrl: '/images/f1.png' },
        { name: 'Mr Kassoum Coulibaly', role: 'Strategic Advisor', imageUrl: '/images/f2.png' },
        { name: 'Mr Thomas Nash', role: 'Board Member', imageUrl: '/images/f3.png' },
        { name: 'Mr Papa Owusu', role: 'Board Member', imageUrl: '/images/f4.png' },
    ];

    return (
        <Flex
            fillWidth maxWidth="xl"
            direction="column" className={styles.up} overflowX='scroll'>
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}/images/${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:'))
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
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
                paddingY="s" gap="l">
                <Flex
                    direction="column"
                    fillWidth maxWidth="xl" gap="m"
                    justifyContent="center"
                    alignItems='center'
                >
                    <RevealFx translateY="4">
                        <Heading
                            wrap="initial"
                            variant="display-strong-m"
                            color='blue'
                            style={{ height: "50px" }}
                        >
                            <Text>Discover our </Text><TypeEffect words={words} />
                        </Heading>
                        <Text variant='body-strong-l'>: Innovation and Impact at TechCity GH</Text>
                    </RevealFx>
                    <RevealFx translateY="8" delay={0.2}>
                        <Text
                            wrap="balance"
                            onBackground="neutral-weak"
                            variant="body-default-l">
                            Our values of integrity, collaboration, and innovation guide us in every project we undertake, ensuring that we deliver exceptional results while fostering a supportive community.
                        </Text>
                    </RevealFx>
                </Flex>

                <Flex
                    direction='column'
                    mobileDirection='row'
                    gap="s"
                    overflowX='auto'
                    paddingX='s'
                >
                    {images && (
                        <Flex
                            direction="row"
                            gap="s"
                            overflowX="auto"
                        >
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt={`Image ${index + 1}`}
                                    className={styles.image}
                                />
                            ))}
                        </Flex>
                    )}
                </Flex>

                <Flex direction="row" gap="32" padding="32" mobileDirection="column" fillWidth>
                    <RevealFx>
                        <Flex direction="column" gap="m" padding="l" fillWidth radius="m" style={{ backgroundColor: '#A559E7', color: '#FFFFFFFF' }}>
                            <Text variant="heading-strong-m">Our Mission</Text>
                            <Text variant="body-default-m">
                                At TechCity GH, our mission is to drive innovation and foster growth in West Africa's tech landscape. We aim to empower individuals and businesses with the skills and tools necessary to thrive in the digital age
                            </Text>
                        </Flex>
                    </RevealFx>

                    <RevealFx>
                        <Flex direction="column" gap="m" padding="l" fillWidth radius="m" style={{ backgroundColor: '#1C76FD', color: '#FFFFFFFF' }}>
                            <Text variant="heading-strong-m">Our Story</Text>
                            <Text variant="body-default-m">
                                Founded in [Year], TechCity GH has grown from a small initiative to a leading innovation hub. Our journey began with a vision to create a space where technology meets creativity, enabling startups and established businesses to flourish. We have successfully impacted numerous clients across West Africa and North America by providing high-quality services tailored to their unique needs.
                            </Text>
                        </Flex>
                    </RevealFx>
                </Flex>

            </Flex>

            <Flex
                direction='column'
                fillWidth
                justifyContent="center"
                alignItems='center'
            >
                <Flex
                    justifyContent="center"
                    alignItems='center'
                    align='center'
                    fillWidth
                    direction="column"
                    paddingY="s" gap="s">
                    <Flex
                        direction="column"
                        fillWidth maxWidth="l" gap="m"
                        justifyContent="center"
                        alignItems='center'
                    >
                        <RevealFx translateY="4">
                            <Text variant='body-strong-l'>Seamlessly integration from design to development</Text>
                        </RevealFx>
                        <RevealFx translateY="8" delay={0.2}>
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="body-default-l">
                                TechCityGH directly with the tools you use everyday. We fit your flow so you can stay in yours</Text>
                        </RevealFx>
                    </Flex>

                </Flex>

                <Flex direction='row' mobileDirection='column' gap='l' padding='l' justifyContent="center"
                    alignItems='center'>

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
                        <Flex direction='column' gap='m' padding='16'>
                            <img src='/images/about3.png' alt='pic 1' />
                            <Text variant='body-default-l'>Respect</Text>
                            <Text variant='body-default-s' style={{ width: '200px' }}>We value honest and open communication, both internally and with our clients</Text>
                        </Flex>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 2
                            },
                            scale: [0.4, 0.5, 1]
                        }}
                    >
                        <Flex direction='column' gap='m' padding='16'>
                            <img src='/images/about2.png' alt='pic 1' />
                            <Text variant='body-default-l'>Innovation</Text>
                            <Text variant='body-default-s' style={{ width: '200px' }}>We challenge ourselves to push the envelope, constantly seeking new and better ways to solve problems</Text>
                        </Flex>
                    </motion.div>

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        whileInView={{
                            opacity: 1,
                            transition: {
                                duration: 3
                            },
                            scale: [0.4, 0.5, 1]
                        }}
                    >
                        <Flex direction='column' gap='m' padding='16'>
                            <img src='/images/about1.png' alt='pic 1' />
                            <Text variant='body-default-l'>Customer-Centricity</Text>
                            <Text variant='body-default-s' style={{ width: '200px' }}>We are committed to delivering outstanding results that address our customers' needs</Text>
                        </Flex>
                    </motion.div>
                </Flex>

            </Flex>

            <Flex>
                <Flex
                    justifyContent="center"
                    alignItems='center'
                    align='center'
                    fillWidth
                    direction="column"
                    paddingY="s" gap="s">
                    <Flex
                        direction="column"
                        fillWidth maxWidth="l" gap="m"
                        justifyContent="center"
                        alignItems='center'
                    >
                        <RevealFx translateY="4">
                            <Text variant='body-strong-l'>Meet Our Team</Text>
                        </RevealFx>
                        <RevealFx translateY="8" delay={0.2}>
                            <Text
                                wrap="balance"
                                onBackground="neutral-weak"
                                variant="body-default-l">
                                Comprised of dedicated professionals with diverse backgrounds in technology, entrepreneurship, and education, we work collaboratively to drive impactful solutions for our clients
                            </Text>
                        </RevealFx>
                    </Flex>

                </Flex>

            </Flex>

            <motion.div
                initial={{ x: '-50vw' }}
                whileInView={{ x: '0' }}
                transition={{ duration: 2, ease: 'easeInOut' }}
            >
                <Flex justifyContent="center" wrap padding="32">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </Flex>
            </motion.div>

        </Flex>
    );
}