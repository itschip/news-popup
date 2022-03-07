import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Heading, Link, StackDivider, Text, useToast, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import { icons } from "../../icons/svgProvider";

interface NewsProps {
	title: string;
	description: string;
	pubDate: string;
	link: string;
}

const NrkFeed: React.FC = () => {
	const [news, setNews] = useState<NewsProps[] | null>(null);
	const toast = useToast();
	
	useEffect(() => {
		// @ts-ignore
		fetch('http://46.101.141.111:5000/nrkFeed', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((res) => res.json()).then((data) => {
			setNews(data.Feed.channel.item);
		}).catch((er) => {
			toast({
				title: 'Failed to load feed',
				description: 'Try again later',
				variant: 'subtle',
				status: 'error'
			})
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
						<Box width="100%" display="flex" justifyContent="space-between" alignItems="center" mb={3}>
							<Heading width={350} fontSize={16}>{item.title}</Heading>
							<Text m={0} borderBottomColor="red.200" borderBottomWidth={2} color="gray.400" fontSize={14}>{dayjs(item.pubDate).format("HH:MM")}</Text>
						</Box>
						<Text fontSize={15}>{item.description}</Text>
						<Box mt={5}>
							<Link fontSize={14} fontWeight="bold" href={item.link} isExternal display="flex" alignItems="center">
								Les mer
								<span style={{ marginLeft: 5 }}>
									{icons.externalLink}
								</span>
							</Link>
						</Box>
					</Box>
				))}
			</VStack>
		</Box>
	)
}

export default NrkFeed;
