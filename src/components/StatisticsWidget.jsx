import { Card } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import PropTypes from 'prop-types';

const StatisticsWidget = ({ stats, counterOptions, title, trend, subtitle, projectId }) => {
  return (
    <Card>
      <Card.Body>
        <img src="/bg-pattern-2.png" alt="Background pattern" />
        <h2 className="text-primary my-2 font-40">
          <CountUp
            duration={1}
            end={stats}
            {...counterOptions}
          />
        </h2>
        <hr width='60' className="m-0" />
        <h4 className="font-18">{title}</h4>
        <p>{subtitle}</p>
        <p className="text-muted mb-0">
          <span className="float-end">
            <i
              className={classNames(
                "me-1",
                "fa",
                "text-" + trend.variant
              )}
            ></i>
            <Link
              to={"/watchdetails/"+projectId}
              style={{ textDecoration: "underline",textUnderlineOffset:'3px', color: "inherit" }}
            >
              {trend.trendStats} <FaAnglesRight size={12} />
            </Link>
          </span>
        </p>
      </Card.Body>
    </Card>
  );
};

StatisticsWidget.propTypes = {
  stats: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  counterOptions: PropTypes.object,
  title: PropTypes.string.isRequired,
  projectId: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  trend: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    trendStats: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  }).isRequired,
};

StatisticsWidget.defaultProps = {
  counterOptions: {},
};

export default StatisticsWidget;
