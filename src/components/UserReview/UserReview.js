import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Review from '../Review/Review';
import Button from '../Button/Button';

const UserReview = () => {
  const reviews = [
    {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.',
      photo: 'user-1.jpg',
      name: 'Nick Smith',
      date: 'March 23rd, 2017',
      rating: '7.8'
    },
    {
      text:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
      photo: 'user-2.jpg',
      name: 'Mary Thomas',
      date: 'September 13th, 2017',
      rating: '9.3'
    }
  ];
  return (
    <Container className="user-reviews">
      {reviews.map(review => (
        <Review
          key={review.text}
          text={review.text}
          photo={review.photo}
          name={review.name}
          date={review.date}
          rating={review.rating}
        />
      ))}
      <Button className="btn-inline">
        Show all <span>&rarr;</span>
      </Button>
    </Container>
  );
};

export { UserReview as default };
