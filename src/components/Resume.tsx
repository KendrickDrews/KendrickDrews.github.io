
import { PhoneTwoTone, MailTwoTone, HomeTwoTone } from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';

export default function Resume() {

    const jobMetaOffset = { span: 7, gap: 1 }

    return <>
        <div className="resume-container">
            <Row> 
                <Col span={8}>
                </Col> 
                <Col> 
                    <Row><h1> Kendrick Drews </h1></Row>
                    <Row><h3> Front End Developer / UI / UX </h3></Row>
                </Col> 
            </Row>
            <Divider/>
            <Row  align="middle" justify="center"> 
                <Col span={7} pull={1}>
                    <Row justify='end'>
                        <h2> Contact </h2>
                    </Row>
                </Col> 
                <Col span={16}> 
                    <Row justify="space-between" align="middle">
                        <Col span={8} className="center-text"> <PhoneTwoTone /> 571 294 5260 </Col>
                        <Col span={8} className="center-text"> <MailTwoTone /> drewskenny@gmail.com </Col>
                        <Col span={8} className="center-text"> <HomeTwoTone /> Michigan, USA </Col>
                    </Row>
                </Col> 
            </Row>
            <Divider/>
            <Row  align="middle" justify="center"> 
                <Col span={7} pull={1}>
                    <Row justify='end'>
                        <h2> Work Experience </h2>
                    </Row>
                </Col> 
                <Col span={16} />
            </Row>
            <Row  align="top" justify="center"> 
                <Col span={jobMetaOffset.span}>
                        <Row justify="end"> 03/19 - Now </Row>
                        <Row justify="end"> NU Borders </Row>
                        <Row justify="end"> Reston VA / Remote </Row>
                </Col> 
                <Col span={jobMetaOffset.gap}> </Col> 
                <Col span={16}> 
                        <Row > <h3>Senior Front End Developer</h3> </Row>
                        <Row > Developed React applications with Node backends for the Defense Intelligence Agency and United States Department of State. Responsible for Front End Architecture. Worked across teams to develop microservices. Produced data-visualizations and quarterly reports. </Row>
                        <Row > 
                            <ul className='job-tech-stack'>
                                <li> Next.js, React, Svelte, Redux, eslint, Jest, Cypress, Playwright, webpack, Parcel, TypeScript, JavaScript </li>
                                <li>Node.js, Express, ElasticSearch, Kibana, Spark, Java/Scala/Kotlin, Rust, Docker, Kubernetes, saltstack</li>
                                <li>AWS, EC2, Mongo, PostgresSQL, Lambda, ECS, EMR, Terraform, GitHub, BitBucket, Jenkins, blockchain</li>
                                <li>Jira, Confluence, ZenHub, Scaled Agile, Kanban, Microservices, Microfrontends, InnerSource</li>
                            </ul> 
                        </Row>
                </Col> 
            </Row>
            <Row  align="top" justify="center"> 
                <Col span={jobMetaOffset.span}>
                        <Row justify="end"> 04/18 - 02/19 </Row>
                        <Row justify="end"> Amida </Row>
                        <Row justify="end"> Washington DC </Row>
                </Col> 
                
                <Col span={jobMetaOffset.gap}> </Col>
                <Col span={16}> 
                        <Row > <h3>UI/UX Developer</h3> </Row>
                        <Row > Developed client applications with React. Conduct user interviews, user testing, and analytics for developmental work on VA Software. Develop front-end solutions for web applications. Producing wireframes, mockups, prototypes, and front-end code.
                        </Row>
                        <Row > 
                            <ul>
                                <li> Next.js, React, Svelte, Redux, eslint, Jest, Cypress, Playwright, webpack, Parcel, TypeScript, JavaScript </li>
                                <li>Node.js, Express, ElasticSearch, Kibana, Spark, Java/Scala/Kotlin, Rust, Docker, Kubernetes, saltstack</li>
                                <li>AWS, EC2, Mongo, PostgresSQL, Lambda, ECS, EMR, Terraform, GitHub, BitBucket, Jenkins, blockchain</li>
                                <li>Jira, Confluence, ZenHub, Scaled Agile, Kanban, Microservices, Microfrontends, InnerSource</li>
                            </ul> 
                        </Row>
                </Col> 
            </Row>
            <Row  align="top" justify="center"> 
                <Col span={jobMetaOffset.span}>
                        <Row justify="end"> 01/16 - 03/18 </Row>
                        <Row justify="end"> TRI </Row>
                        <Row justify="end"> Maryland </Row>
                </Col> 
                
                <Col span={jobMetaOffset.gap}> </Col>
                <Col span={16}> 
                        <Row > <h3>Front End Developer</h3> </Row>
                        <Row > Create, Edit, and/or Delete HTML and other files then publish changes to public website(s). Managing government webpages to provide 508 compliant and user-friendly experiences. Responsible for creating and delivering server-side code that follows company standards and procedures. Writing code and scripts to assist our database developers, testers, and senior developers.</Row>
                        <Row > 
                            <ul>
                                <li> Next.js, React, Svelte, Redux, eslint, Jest, Cypress, Playwright, webpack, Parcel, TypeScript, JavaScript </li>
                                <li>Node.js, Express, ElasticSearch, Kibana, Spark, Java/Scala/Kotlin, Rust, Docker, Kubernetes, saltstack</li>
                                <li>AWS, EC2, Mongo, PostgresSQL, Lambda, ECS, EMR, Terraform, GitHub, BitBucket, Jenkins, blockchain</li>
                                <li>Jira, Confluence, ZenHub, Scaled Agile, Kanban, Microservices, Microfrontends, InnerSource</li>
                            </ul> 
                        </Row>
                </Col> 
            </Row>
            <Row  align="top" justify="center"> 
                <Col span={jobMetaOffset.span}>
                        <Row justify="end"> 01/14 - 01/16 </Row>
                        <Row justify="end"> The INCLab </Row>
                        <Row justify="end"> Tysons Corner, VA </Row>
                </Col> 
                
                <Col span={jobMetaOffset.gap}> </Col>
                <Col span={16}> 
                        <Row> <h3>Senior Front End Developer</h3> </Row>
                        <Row> Worked directly with clients to facilitate efficient design to development workflow, managed client expectations. Responsible for the creation of all visual assets; Marketing materials, animations, research, front-end code, data visualizations, wireframes, prototypes, design guides, and illustrations. Designed company website. https://www.theinclab.com </Row>
                        <Row> 
                            <ul>
                                <li> Next.js, React, Svelte, Redux, eslint, Jest, Cypress, Playwright, webpack, Parcel, TypeScript, JavaScript </li>
                                <li>Node.js, Express, ElasticSearch, Kibana, Spark, Java/Scala/Kotlin, Rust, Docker, Kubernetes, saltstack</li>
                                <li>AWS, EC2, Mongo, PostgresSQL, Lambda, ECS, EMR, Terraform, GitHub, BitBucket, Jenkins, blockchain</li>
                                <li>Jira, Confluence, ZenHub, Scaled Agile, Kanban, Microservices, Microfrontends, InnerSource</li>
                            </ul> 
                        </Row>
                </Col> 
            </Row>
            <Divider/>
            <Row  align="top"> 
                <Col span={7} pull={1}>
                    <Row justify='end'>
                        <h2> Education </h2>
                    </Row>
                </Col> 
                <Col span={16} push={1}> 
                    <Row><h2> Bachelors of Fine-Arts </h2></Row>
                    <Row><h3> Virginia Commonwealth University, Richmond, VA </h3></Row>
                    <Row><h4> <i>2009 - 2013</i> </h4></Row>
                </Col> 
            </Row>
            <Divider/>
            <Row  align="top"> 
                <Col span={7} pull={1}>
                    <Row justify='end'>
                        <h2> Skills </h2>
                    </Row>
                </Col> 
                <Col span={16} push={1}> 
                <Row>
                    <Col flex={1}>
                        <ul>
                            <li>React</li> 
                            <li>Node</li> 
                            <li>Redux</li> 
                            <li>Typescript</li> 
                            <li>Javascript</li> 
                            <li>Cypress</li> 
                            <li>React Testing Library</li>
                            <li>Next.js</li>
                            <li>CSS</li> 
                            <li>SCSS</li> 
                            <li>Ant Design</li>
                            <li>prettier</li> 
                            <li>ESLint</li> 
                            <li>AWS</li> 
                            <li>Docker</li> 
                            <li>postman</li> 
                            <li>Yarn</li>  
                        </ul>
                     </Col>
                    <Col flex={1}>
                        <ul>
                            <li>NPM</li>
                            <li>MySQL</li> 
                            <li>Confluence</li> 
                            <li>Jira</li> 
                            <li>GIT</li> 
                            <li>GitLab</li> 
                            <li>Jenkins</li> 
                            <li>Agile</li> 
                            <li>Customer</li> 
                            <li>Relations</li> 
                            <li>SCRUM Master</li> 
                            <li>Figma</li> 
                            <li>Photoshop</li> 
                            <li>Sketch</li> 
                            <li>InVision</li> 
                            <li>Adobe XD</li> 
                            <li>Sharepoint</li>
                        </ul> 
                    </Col>
                    </Row>
                    </Col> 
            </Row>
        </div>
    </>
}