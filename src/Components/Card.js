import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MCard({Name, Duration, Category, NOE, Seasons, RD, AdClips, Poster}) {
  return (
    <Row xs={1} md={4} className="g-4 p-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src={Poster}
            style={{ height: '160px' }}
            />
            <Card.Body>
              <Card.Title className='fs-4'>{Name}</Card.Title>
              <Card.Subtitle className="mt-1 fw-light text-start ps-2">{Duration}</Card.Subtitle>
              <Card.Text className='text-start my-1 p-2 fw-normal'>
              {Category.map((cat) => cat + ", ")}<br/>
              No of Episode : {NOE}<br/> 
              Available Clips: {AdClips || 0}<br/>
              Season: {Seasons}  
              </Card.Text>
              <footer className="footer text-start">
              <cite title="Source Title" >Release Date: {RD}</cite>
          </footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MCard;