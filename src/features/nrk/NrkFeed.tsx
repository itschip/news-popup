import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Heading, Link, StackDivider, Text, VStack } from "@chakra-ui/react";

interface NewsProps {
	title: string;
	description: string;
	pubDate: string;
	link: string;
}

const NrkFeed: React.FC = () => {
	const [news, setNews] = useState<NewsProps[] | null>(null);
	
	useEffect(() => {
		// @ts-ignore
		fetch('http://localhost:5000/nrkFeed', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json()).then((data) => {
			setNews(data.Feed.channel.item);
		})
	}, [])
	
	if (!news) {
		return (
			<Box>
				<CircularProgress isIndeterminate/>
			</Box>
		)
	}
	
	return (
		<Box>
			<VStack
				divider={<StackDivider borderColor='gray.400'/>}
				spacing={4}
			>
				{news.map((item) => (
					<Box>
						<Box display="flex" justifyContent="space-between" alignItems="stretch" mb={3}>
							<Heading fontSize={16}>{item.title}</Heading>
							<Text fontSize={14}>{item.pubDate}</Text>
						</Box>
						<Text fontSize={15}>{item.description}</Text>
						<Link fontSize={14} fontWeight="bold" href={item.link} isExternal>
							Les mer
						</Link>
					</Box>
				))}
			</VStack>
		</Box>
	)
}

export default NrkFeed;
