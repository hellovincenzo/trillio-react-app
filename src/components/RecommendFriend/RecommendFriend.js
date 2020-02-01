import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Picture from '../Picture/Picture';

const RecommendFriend = () => {
  const users = [
    { imageName: 'user-3.jpg', alt: 'Friend1', className: 'recommend__photo' },
    { imageName: 'user-4.jpg', alt: 'Friend2', className: 'recommend__photo' },
    { imageName: 'user-5.jpg', alt: 'Friend3', className: 'recommend__photo' },
    { imageName: 'user-6.jpg', alt: 'Friend4', className: 'recommend__photo' }
  ];
  return (
    <Container className="recommend__friends">
      {users.map(user => (
        <Picture
          key={user.imageName}
          imageName={user.imageName}
          alt={user.alt}
          className={user.className}
        />
      ))}
    </Container>
  );
};

export { RecommendFriend as default };
