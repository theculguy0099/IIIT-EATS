import React from "react";
import "./FactsCounter.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import bgimg from "../../assets/bg-facts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmile, faUtensils, faCookie, faHandshake, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

const FactsCounter = () => {
  const countUpProps = {
    start: 0,
    duration: 4,
  };

  return (
    <section id="facts" style={{ backgroundImage: `url(${bgimg})` }}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row number-counters">
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <>
                <div className="col-sm-3 col-xs-12 text-center fadeInUp">
                  <div className="counters-item">
                    <FontAwesomeIcon icon={faSmile} className="counter-icon" />

                    <h2>
                      <CountUp
                        end={1000}
                        {...countUpProps}
                        redraw={!isVisible}
                      />
                    </h2>
                    <p>Happy Customers</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12 text-center fadeInUp">
                  <div className="counters-item">
                    <FontAwesomeIcon icon={faUtensils} className="counter-icon" />
                    <h2>
                      <CountUp
                        end={250}
                        {...countUpProps}
                        redraw={!isVisible}
                      />
                    </h2>
                    <p>Dishes Delivered</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12 text-center fadeInUp">
                  <div className="counters-item">
                    <FontAwesomeIcon icon={faHandshake} className="counter-icon" />
                    <h2>
                      <CountUp
                        end={75}
                        {...countUpProps}
                        redraw={!isVisible}
                      />
                    </h2>
                    <p>Franchise Partnership</p>
                  </div>
                </div>
                <div className="col-sm-3 col-xs-12 text-center fadeInUp">
                  <div className="counters-item">
                    <FontAwesomeIcon icon={faCalendarDays} className="counter-icon" />
                    <h2>
                      <CountUp end={30} {...countUpProps} redraw={!isVisible} />
                    </h2>
                    <p>Years In Business</p>
                  </div>
                </div>
              </>
            )}
          </VisibilitySensor>
        </div>
      </div>
    </section>
  );
};

export default FactsCounter;
