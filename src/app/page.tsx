"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Container, Nav, Navbar, NavDropdown, Row, Col, Button } from "react-bootstrap";
import { Facebook, Instagram, QrCode, ChevronRight } from "react-bootstrap-icons";

const TopMenu = () => {
  return (
    <Navbar bg="white" expand="lg" className="py-3 border-bottom">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="/konoslogo.png"
            height="65"
            alt="Kono's Logo"
          />
        </Navbar.Brand>

        <Nav className="justify-content-end align-items-center gap-3">
          <Nav.Link href="#" className="text-dark">
            Menu
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Catering
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Own Your Own Kono&apos;s
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Locations
          </Nav.Link>
          <Nav.Link href="#" className="text-dark">
            Our Story
          </Nav.Link>

          <NavDropdown title="More" id="more-dropdown">
            <NavDropdown.ItemText>Feed Those in Need</NavDropdown.ItemText>
            <NavDropdown.ItemText>Monthly Newsletter</NavDropdown.ItemText>
            <NavDropdown.ItemText>Kono&apos;s Gear</NavDropdown.ItemText>
          </NavDropdown>

          <Button variant="outline-secondary" className="text-dark">
            Sign in
          </Button>

          <Button variant="dark">
            Order online <ChevronRight />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};


const FullWidthBackgroundImage = () => (
  <Row className="justify-content-center">
    <Col>
      <img
        src="/mainbackground.png"
        className="img-fluid w-100"
        alt="Snow Island Bridge"
      />
    </Col>
  </Row>
);

const FeaturedSection = () => (
  <Container className="py-5">
    <Row className="align-items-center pb-3">
      <Col>
        <h2>
          <strong>Featured</strong>
        </h2>
      </Col>
      <Col className="text-end">
        <Button variant="outline-secondary" className="text-dark">
          View menu <ChevronRight />
        </Button>
      </Col>
    </Row>

    <Row>
      <Col md={3}>
        <img
          src="/chunsbomber.png"
          className="img-fluid rounded-4 mb-2 food-img"
          alt="Chuns Bomber"
        />
        <div>Chuns Bomber (Breakfast Burrito)</div>
      </Col>

      <Col md={3}>
        <img
          src="/haleiwabomber.png"
          className="img-fluid rounded-4 mb-2 food-img"
          alt="Haleiwa Bomber"
        />
        <div>Haleiwa Bomber (Breakfast Burrito)</div>
      </Col>

      <Col md={3}>
        <img
          src="/waimeabomber.png"
          className="img-fluid rounded-4 mb-2 food-img"
          alt="Waimea Bomber"
        />
        <div>Waimea Bomber (Breakfast Burrito)</div>
      </Col>

      <Col md={3}>
        <img
          src="/wendysbomber.png"
          className="img-fluid rounded-4 mb-2 food-img"
          alt="Wendy's Bomber"
        />
        <div>Wendy&apos;s Bomber (Breakfast Burrito)</div>
      </Col>
    </Row>
  </Container>
);

// welcome section
const WelcomeSection = () => (
  <Container className="py-5">
    <Row className="align-items-center">
      <Col md={6}>
        <img
          src="/konoslogo.png"
          className="img-fluid mx-auto d-block"
          width="350"
          alt="Kono's Northshore Logo"
        />
      </Col>

      <Col md={6}>
        <h2>
          <strong>Welcome to Kono&apos;s Northshore</strong>
        </h2>
        <p className="text-secondary py-2">
          Born on the North Shore of Oʻahu, Kono&apos;s Northshore is where
          breakfast burritos, slow-roasted kalua pig, and island-style comfort
          food come together with laid-back vibes. With multiple locations
          across Hawaiʻi and Las Vegas, there&apos;s always a spot close by to
          grab your favorites. Whether you&apos;re heading to the beach,
          cruising through town, or fueling up before the day starts,
          Kono&apos;s Northshore has you covered.
        </p>
        <Button variant="dark">
          FEED THOSE IN NEED <ChevronRight />
        </Button>
      </Col>
    </Row>
  </Container>
);

// footer
const FooterMenu = () => (
  <footer className="py-5">
    <Container>
      <Row>
        <Col md={2}>
          <img
            src="/konoslogo.png"
            height="75"
            alt="Kono's Logo"
          />
        </Col>

        <Col md={2}>
          <div className="mb-3">Menu</div>
          <div className="mb-3">Locations</div>
          <div className="mb-3">Feed Those in Need</div>
          <div className="mb-3">Breakfast at Kono&apos;s</div>
          <div className="mb-3">Kono&apos;s Gear</div>
          <div className="mb-3">Food Service Certifications</div>
        </Col>

        <Col md={2}>
          <div className="mb-3">Catering</div>
          <div className="mb-3">Our Story</div>
          <div className="mb-3">Monthly Newsletter</div>
          <div className="mb-3">Brunch at Kono&apos;s</div>
          <div className="mb-3">Specials</div>
          <div className="mb-3">We&apos;re Hiring</div>
        </Col>

        <Col md={3}>
          <div className="mb-3">Own Your Own Kono&apos;s</div>
          <div className="mb-3">Send A Milkshake</div>
          <div className="mb-3">Contact Us</div>
          <div className="mb-3">Hawaiian Food at Kono&apos;s</div>
          <div className="mb-3">Are You an Influencer?</div>
          <div className="mb-3">Gift Cards</div>
        </Col>

        <Col md={3}>
          <div className="d-flex align-items-center gap-3 mb-5">
            <QrCode size={50} />
            <div>
              <div className="text-secondary">Download our app</div>
              <strong>Earn points for free food</strong>
            </div>
          </div>

          <div className="text-end pt-4">
            <Facebook className="me-3" />
            <Instagram />
          </div>
        </Col>
      </Row>

      <hr className="my-4" />

      <Row className="text-secondary">
        <Col md={4}>
          <span className="me-3">Privacy</span>
          <span className="me-3">Terms of service</span>
          <span>Accessibility</span>
        </Col>

        <Col md={4} className="text-center">
          © 2026 Konos Kailua LLC . All rights reserved.
        </Col>

        <Col md={4} className="text-end text-dark">
          <strong>Powered by Owner</strong>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default function Home() {
  return (
    <main>
      <TopMenu />
      <FullWidthBackgroundImage />
      <FeaturedSection />
      <WelcomeSection />
      <FooterMenu />
    </main>
  );
}