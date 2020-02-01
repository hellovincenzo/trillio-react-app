import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import DescriptionList from '../DescriptionList/DescriptionList';
import Recommend from '../Recommend/Recommend';

const Description = () => {
  const DescriptionLists = [
    { text: 'Close to the beach' },
    { text: 'Breakfast included' },
    { text: 'Free airport shuttle' },
    { text: 'Free wifi in all rooms' },
    { text: 'Air conditioning and heating' },
    { text: 'Pets allowed' },
    { text: 'We speak all languages' },
    { text: 'Perfect for families' }
  ];

  return (
    <Container className="description">
      <Container tag="p" className="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
        dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
        corporis incidunt deserunt quae architecto voluptate.
      </Container>
      <Container tag="p" className="paragraph">
        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
        voluptate delectus, inventore iure aliquid aliquam.
      </Container>
      <Container className="list" tag="ul">
        {DescriptionLists.map(list => (
          <DescriptionList key={list.text} text={list.text} />
        ))}
      </Container>
      <Recommend />
    </Container>
  );
};

export { Description as default };
