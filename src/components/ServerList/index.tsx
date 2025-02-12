import React from 'react';
import ServerButton from '../ServerButton'
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome/>
          <Separator />
          <ServerButton />
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton mentions={7}/>
          <ServerButton />
          <ServerButton hasNotifications/>
          <ServerButton />
          <ServerButton />
          <ServerButton mentions={11}/>
          <ServerButton />
          <ServerButton />
      </Container>
  )
}

export default ServerList;