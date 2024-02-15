import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

const NewsSite = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
        const response = await axios.get(apiUrl);
        setNews(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* card news display */}



      
        {news.map((article, index) => (
          <p key={index}>
            <Card className='container w-75 p-5'>
              <Card.Body className='bg-light p-5'>
                <Card.Title className='text-danger fw-bolder text-center' style={{ textDecoration: 'dashed' }}>{article.title}</Card.Title>
                <Card.Text className='text-italic text-center text-primary'>
                  {article.body}
                </Card.Text>
              </Card.Body>
            </Card>
          </p>
        ))}
    </div>
  );
};


export default NewsSite