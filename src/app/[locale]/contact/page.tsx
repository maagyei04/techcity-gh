import { Button, Flex, Heading, Input, RevealFx, Text } from "@/once-ui/components";
import MasonryGrid from "@/components/contact/MasonryGrid";
import { baseURL, renderContent } from "@/app/resources";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { TypeEffect } from "@/components/TypeEffect";
import styles from '@/components/contact/Gallery.module.scss';


export async function generateMetadata(
	{ params: { locale } }: { params: { locale: string } }
) {

	const t = await getTranslations();
	const { contact } = renderContent(t);

	const title = contact.title;
	const description = contact.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/contact`,
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

export default function Gallery(
	{ params: { locale } }: { params: { locale: string } }
) {
	unstable_setRequestLocale(locale);
	const t = useTranslations();
	const { contact, person } = renderContent(t);
	const words = ["Let Connect", "Contact Us", "Reach Out To Us"];


	const ContactForm = () => {
		return (
			<Flex direction="column" gap="16" padding="20" fillWidth radius="m" shadow="xl" style={{ backgroundColor: '#F8F8F8FF' }}>
				<Text variant="heading-strong-m">Contact Us Today</Text>
				<Text variant="body-default-m">Enter your details</Text>
				<Flex gap="16">
					<Input id="firstName" label="First Name" />
					<Input id="lastName" label="Last Name" />
				</Flex>
				<Input id="email" label="Email" />
				<Input id="message" multiple maxLength={250} label="Message" />
				<Button variant="primary" size="l">Submit</Button>
			</Flex>
		);
	};

	const ContactInfo = () => {
		return (
			<Flex direction="column" gap="16" padding="20" fillWidth radius="m" shadow="xl" style={{ backgroundColor: '#F8F8F8FF' }}>
				<Text variant="heading-strong-m">Contact Info</Text>
				<Text variant="body-default-m">
					We'd love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Get in touch with us through the contact form, email, or social media. We strive to respond within 24 hours on business days.
				</Text>
				<Text variant="body-default-m">
					<strong>Email Support</strong><br />
					Email us and we’ll get to you within 24 hours<br />
					westonenergi@outlook.com
				</Text>
				<Text variant="body-default-m">
					<strong>WhatsApp</strong><br />
					Our WhatsApp contact is always active<br />
					+233 503130329
				</Text>
				<Text variant="body-default-m">
					<strong>Address</strong><br />
					Locate Us At:<br />
					No.16 Nii Amaa Ollenu Street<br />
					Airport West Residential Area<br />
					Accra, Ghana
				</Text>
			</Flex>
		);
	};


	return (
		<Flex maxWidth="l" fillWidth gap="m" direction="column" alignItems="center" className={styles.up} overflowX="scroll">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'ImageGallery',
						name: contact.title,
						description: contact.description,
						url: `https://${baseURL}/conntact`,
						image: contact.images.map((image) => ({
							'@type': 'ImageObject',
							url: `${baseURL}${image.src}`,
							description: image.alt,
						})),
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
							<TypeEffect words={words} />
						</Heading>
					</RevealFx>
					<RevealFx translateY="8" delay={0.2}>
						<Text
							wrap="balance"
							onBackground="neutral-weak"
							variant="body-default-l">
							Get in Touch With Us Today
						</Text>
					</RevealFx>
				</Flex>

			</Flex>

			<Flex direction="row" gap="32" padding="32" mobileDirection="column" fillWidth>
				<ContactForm />
				<ContactInfo />
			</Flex>

		</Flex>
	);
}