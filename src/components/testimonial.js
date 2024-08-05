import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  {/* <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  /> */}
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  {/* <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  /> */}
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  {/* <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  /> */}
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  {/* <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  /> */}
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Position: 'Site Supervisor',
  author1Position: 'Construction Manager',
  author3Alt: 'Image of Michael Johnson',
  author1Name: 'surya',
  author1Src:
    'https://images.unsplash.com/photo-1634309490604-1270c0d486e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3MzE0N3w&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: 'chandru',
  review2:
    'I have worked with many earth moving companies, but TMP Earth Movers stands out for their attention to detail and commitment to quality work.',
  author2Name: 'dhinesh kumar',
  author4Position: 'Civil Engineer',
  author4Name: 'varun',
  author4Src:
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3MzE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: '',
  author2Src:
    'https://images.unsplash.com/photo-1517819206436-716454919893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3MzE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1496203695688-3b8985780d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjY3MzE0OHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author4Alt: 'Image of Sarah Williams',
  content1:
    '1000+ Happy customer',
  author3Position: 'Project Engineer',
  review1:
    'TMP Earth Movers is the best in the business! We have been working with them for the past three years, and their service has always been top-notch. Poovarasan and his team are professional, efficient, and reliable. They always go the extra mile to ensure the job is done right.',
  heading1: 'Testimonials',
  review3:
    'I had a great experience with TMP Earth Movers. From the initial consultation to the completion of the project, Poovarasan was always available to answer any questions and provide updates. Their equipment is state-of-the-art, and their operators are skilled and experienced. Our project was completed on time and within budget. Thank you, Poovarasan, for your excellent service!',
  review4:
    'Working with TMP Earth Movers has been a game changer for our projects. Poovarasan’s commitment to quality and customer satisfaction is evident in every interaction. They are responsive, punctual, and their work is always of the highest standard. We look forward to continuing our partnership with TMP Earth Movers for many more years to come.',
}

Testimonial.propTypes = {
  author2Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.string,
  //author1Src: PropTypes.string,
  author3Name: PropTypes.string,
  review2: PropTypes.string,
  author2Name: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.string,
  author3Position: PropTypes.string,
  review1: PropTypes.string,
  heading1: PropTypes.string,
  review3: PropTypes.string,
  review4: PropTypes.string,
}

export default Testimonial
