import { Card, Container, Row, Col, Image } from "react-bootstrap"
import annaImage from "../assets/images/drakor/anna.jpeg"
import eveImage from "../assets/images/drakor/eve.jpg"
import gumihoImage from "../assets/images/drakor/gumiho.jpeg"
import penthouseImage from "../assets/images/drakor/penthouse.jpg"
import recalImage from "../assets/images/drakor/recal.jpg"
import todaywebtoonImage from "../assets/images/drakor/todaywebtoon.jpg"

const Drakor = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">DRAKOR</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="drakor">
            <Card className="movieImage">
              <Image src={annaImage} alt="Anna Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Anna</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 5 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={eveImage} alt="Eve Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Eve</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={gumihoImage} alt="Gumiho Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">My Roommate Gumiho</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={penthouseImage}
                alt="Dune Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">The Penthouse S1</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image
                src={recalImage}
                alt="Recalled Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Recalled</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={todaywebtoonImage} alt="Today Webtoon Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Today Wrbtoon</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with natural lead-in to additional
                    content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Drakor