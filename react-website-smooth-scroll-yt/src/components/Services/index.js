import React from 'react'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesH2, ServicesP, ServicesIcon } from './ServicesElements';


const Services = () => {
	return (
		<ServicesContainer id="services">
			<ServicesH1>Our Services</ServicesH1>
			<ServicesWrapper>
				<ServicesCard>
					<ServicesIcon src="/images/4.svg" />
					<ServicesH2>Reduce expenses</ServicesH2>
					<ServicesP>We help to reduces your fess and increase your overall revenue</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src="/images/5.svg" />
					<ServicesH2>Virtual Expandation</ServicesH2>
					<ServicesP>lorem asdto reduces your fess and increase your overall revenue</ServicesP>
				</ServicesCard>
				<ServicesCard>
					<ServicesIcon src='/images/6.svg' />
					<ServicesH2>Reduce expenses</ServicesH2>
					<ServicesP>We help to reduces your fess and increase your overall revenue</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesContainer>
	)
}

export default Services;
