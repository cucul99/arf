import { Card, Container, Row, Col, Image } from "react-bootstrap"
import bigmouseImage from "../assets/images/trending/bigmouse.jpg"
import brImage from "../assets/images/trending/br.jpg"
import itokeImage from "../assets/images/trending/itoke.jpg"
import replyImage from "../assets/images/trending/reply.jpg"
import squidgameImage from "../assets/images/trending/squidgame.jpg"
import wtwImage from "../assets/images/trending/wtw.jpg"

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="movieImage">
              <Image src={bigmouseImage} alt="Bigmouse Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Big Mouse</Card.Title>
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
                src={brImage}
                alt="BR Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">
                    Backstreet Rookie
                  </Card.Title>
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
              <Image src={itokeImage} alt="Its Oke Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Its Okay Not Be Okay</Card.Title>
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
              <Image src={replyImage} alt="Reply Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Reply 1998</Card.Title>
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
                src={squidgameImage}
                alt="Squid Game Movies"
                className="images"
              />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Squid Game</Card.Title>
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
              <Image src={wtwImage} alt="WTW Movies" className="images" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Welcome To Waikiki</Card.Title>
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

export default Trending