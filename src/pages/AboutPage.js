import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
import SubHeader from '../components/SubHeader';
import PartnersList from '../features/partners/PartnersList';


function AboutPage() {
    return (  
        <Container>
            <SubHeader current='About Us'></SubHeader>
            <Row className="row-content">
                <Col sm='6'>
                    <h3>Who We Are</h3>
                    <p> This NET is a unique mentoring organization founded and run by young, minority professionals and leaders in the Boston area. The NET intends to take on a holistic approach to solving the achievement gap between inner-city students and their suburban counterparts. The achievement and opportunity gap is a phenomenon that is quite complex and multifaceted; school systems, mental fortitude, access to/awareness of opportunities, resources and guidance are just a few of the factors that contribute to this epidemic. In approaching this problem, our organization intends to help build a resilient, conscious mentality in students through a uniquely crafted curriculum that involves topics such as: economic empowerment, history (and its modern relevance), self-esteem, music, current events, etc. Through this curriculum coupled with building interest in STEM through programming and connecting students to resources in the Boston, we plan to build a feasible pipeline to success and obliterate achievement gap.
                    </p>
                </Col>
                <Col sm='6'>
                    <Card>
                        <CardHeader>
                            <CardBody>
                                <dl className='row'>
                                    <dt className='col-6'>Age Range</dt>
                                    <dd className='col-6'> Students grades 4th-7th (~ages 9-12)</dd>
                                    <dt className='col-6'>Tentative Start Date:</dt>
                                    <dd className='col-6'>Mid- 2023. Please check our site for updates</dd>
                                    <dt className='col-6'>Meetings:</dt>
                                    <dd className='col-6'>1 Saturday each month</dd>
                                </dl>
                            </CardBody>
                        </CardHeader>
                    </Card>
                </Col>
                <Col sm='6'>
                    <Card className='bg-light mt-3'>
                        <CardBody>
                            <blockquote className='blockquote'>
                                <p>I will not follow where the path may lead, but I
                                    will go where there is no path, and I will leave
                                    a trail.
                                </p>
                                <footer className='blockquote-footer'>
                                    Muriel Strode,{' '}
                                    <cite title='Source Title'>
                                        "Wind-Wafted Wild Flowers" - The Open Court,
                                        1903
                                    </cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className="row-content">
                <Col xs='12'>
                    <h3>
                        Community Partners
                    </h3>
                </Col>
                <PartnersList />
            </Row>

        </Container>
    );
};

export default AboutPage;