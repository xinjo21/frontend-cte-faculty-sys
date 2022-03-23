import {
	Box,
	Heading,
	Divider,
	Stack,
} from '@chakra-ui/react'

import InformationCard from './components/Profile/InfoCard'
import ProfileCard from './components/Profile/ProfileCard'

export default function Profile() {
	return (
		<Box w='100%'>
			<Heading size='lg' mb={5}>Profile</Heading>
			<Stack direction={['column', 'row']}>
				<InformationCard />

				<Stack w={['80vw', '54vw']}>
					<ProfileCard />
				</Stack>
				
			</Stack>


		</Box>
	)
}