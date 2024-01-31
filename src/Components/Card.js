import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


function MCard({Name, Duration, Category, NOE, Seasons, RD, AdClips}) {
  return (
    <Row xs={1} md={4} className="g-4 p-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="$" />
            <Card.Body>
              <Card.Title>Movie Name: {Name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Duration: {Duration}</Card.Subtitle>
              <Card.Text>
              Genre: {Category.map((cat) => cat + ", ")}<br/>
              No of Episode : {NOE}<br/> 
              Available Ad Clips: {AdClips}
              </Card.Text>
              <footer className="footer">
              Season {Seasons}<cite title="Source Title"><br/>Release Date {RD}</cite>
          </footer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default MCard;