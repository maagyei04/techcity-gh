import { Flex, Heading, RevealFx, Text } from '@/once-ui/components';
import { Mailchimp } from '@/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL, renderContent } from '@/app/resources'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { TypeEffect } from '@/components/TypeEffect';
import ArticleCard from '@/components/blog/ArticalCard';
import styles from '@/components/contact/Gallery.module.scss';


export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {

	const t = await getTranslations();
	const { blog } = renderContent(t);

	const title = blog.title;
	const description = blog.description;
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

export default function Blog(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);

	const t = useTranslations();
	const { person, blog, newsletter } = renderContent(t);
	const words = ["Latest", "Popular", "Trending"];

	const articles = [
		{ category: 'Education', title: 'The Power of Project-Based Learning: 3 Important factors of Productivity', author: 'Prof Akwesi Osei', imageUrl: '/images/tc8.png' },
		{ category: 'Education', title: 'The Power of Project-Based Learning: 3 Important factors of Productivity', author: 'Prof Akwesi Osei', imageUrl: '/images/tc5.png' },
		{ category: 'Education', title: 'The Power of Project-Based Learning: 3 Important factors of Productivity', author: 'Prof Akwesi Osei', imageUrl: '/images/tc7.png' },
		{ category: 'Education', title: 'The Power of Project-Based Learning: 3 Important factors of Productivity', author: 'Prof Akwesi Osei', imageUrl: '/images/tc6.png' },
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
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
						author: {
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
							<Text>Read </Text><TypeEffect words={words} /><Text> Posts</Text>
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							Our blog is dedicated to empowering entrepreneurs with actionable advice, success stories, and resources to help you grow your business and make a lasting impact
						</Text>
					</RevealFx>
				</Flex>

			</Flex>


			<Flex justifyContent="center" wrap padding="32" fillWidth>
				{articles.map((article, index) => (
					<ArticleCard key={index} {...article} />
				))}
			</Flex>



			{newsletter.display && (
				<Mailchimp newsletter={newsletter} />
			)}
		</Flex>
	);
}