import "./MentorProfile.css";

import MentorProfileImage from "../assets/DashBoard/mentorimage.png";
import MentorProfileRole from "../assets/DashBoard/mentorrole.png";
import FullStarIcon from "../assets/DashBoard/Fullstar.png";
import HalfStarIcon from "../assets/DashBoard/HalfStar.png";
import EditPenIcon from "../assets/DashBoard/EditPen.png";

export const MentorProfile = () => {
  const EXPERTISE_LIST = [
    "Software Engineering",
    "System Design",
    "Career Coaching",
    "Cloud Architecture",
    "Interview Prep",
    "Leadership",
  ];

  const AVAILABILITY_LIST = [
    { day: "Monday", time: "6:00 PM - 8:00 PM", booked: false },
    { day: "Wednesday", time: "5:00 PM - 7:00 PM", booked: false },
    { day: "Friday", time: "Fully Booked", booked: true },
  ];

  const REVIEWS_DATA = [
    {
      id: 1,
      initials: "MS",
      name: "Maya Singh",
      role: "Intern at Amazon",
      review:
        "Alex helped me completely restructure my portfolio. His advice on system design was instrumental in landing my SDE internship. Truly a world-class mentor!",
      fullStars: 5,
      halfStar: false,
    },
    {
      id: 2,
      initials: "JD",
      name: "Jordan Davis",
      role: "Junior Developer",
      review:
        "Very technical and straight to the point. Helped me understand complex cloud concepts in just two sessions. Highly recommend for anyone looking to scale their skills.",
      fullStars: 4,
      halfStar: true,
    },
  ];

  function StarRating({ fullStars, halfStar }) {
    return (
      <div className="MentorProfileStarRating">
        {Array.from({ length: fullStars }).map((_, i) => (
          <img key={`full-${i}`} src={FullStarIcon} alt="star" width={18} height={18} />
        ))}
        {halfStar && (
          <img src={HalfStarIcon} alt="half-star" width={18} height={18} />
        )}
      </div>
    );
  }

  function ReviewRow({ initials, name, role, review, fullStars, halfStar }) {
    return (
      <div className="MentorProfileReviewItem">
        <div className="MentorProfileReviewAvatar">{initials}</div>

        <div className="MentorProfileReviewContent">
          <div className="MentorProfileReviewHeader">
            <div>
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          </div>
          <p className="MentorProfileReviewText">"{review}"</p>
        </div>

        <StarRating fullStars={fullStars} halfStar={halfStar} />
      </div>
    );
  }

  return (
    <div className="MentorProfilePage">
      <div className="MentorProfileCard">
        <div className="MentorProfileImageContainer">
          <img
            src={MentorProfileImage}
            className="MentorProfileImage"
            alt="Mentor Profile"
          />
        </div>

        <h2>Alex Chen</h2>

        <p className="MentorProfileRole">Software Engineering Lead</p>

        <div className="MentorProfileStats">
          <div className="MentorProfileStat">
            <h4>MENTORED</h4>
            <span>48</span>
            <p>Students total</p>
          </div>
          <div className="MentorProfileStat">
            <h4>RATING</h4>
            <span>4.9</span>
            <p>120+ reviews</p>
          </div>
        </div>

        <button className="MentorProfileButton">Set Availability</button>
      </div>

      <div className="MentorProfileRoleCard">
        <h3>CURRENT ROLE</h3>

        <div className="MentorProfileRoleContent">
          <div className="MentorProfileRoleIcon">
            <img
              src={MentorProfileRole}
              className="ProfileRoleIcon"
              alt="CurrentRole"
            />
          </div>

          <div className="MentorProfileRoleDetails">
            <h4>Senior Engineering Lead</h4>

            <p>Google • Cloud Platform</p>

            <span>
              "Scaling infrastructure for
              <br />
              billions of users worldwide."
            </span>
          </div>
        </div>
      </div>

      <div className="MentorProfileAvailabilityCard">
        <div className="MentorProfileAvailabilityHeader">
          <h3>AVAILABILITY</h3>
          <span>NEXT WEEK</span>
        </div>

        <div className="MentorProfileAvailabilityList">
          {AVAILABILITY_LIST.map((item) => (
            <div
              key={item.day}
              className={
                item.booked
                  ? "MentorProfileAvailabilityItem booked"
                  : "MentorProfileAvailabilityItem"
              }
            >
              <p>{item.day}</p>
              {item.booked ? <span>{item.time}</span> : <h4>{item.time}</h4>}
            </div>
          ))}
        </div>
      </div>

      <div className="MentorProfileExpertiseCard">
        <h3>AREAS OF EXPERTISE</h3>

        <div className="MentorProfileExpertiseList">
          {EXPERTISE_LIST.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>

      <div className="MentorProfileHistoryCard">
        <h3>MENTORSHIP HISTORY</h3>

        <h1>1,240</h1>
        <p>Total Mentorship Minutes</p>

        <div className="MentorProfileHistoryBar">
          <div className="MentorProfileHistoryBarFill"></div>
        </div>

        <p className="MentorProfileHistoryFootnote">
          85% Mentee Success Rate for Tier-1 Companies
        </p>
      </div>

      <div className="MentorProfileAboutCard">
        <div className="MentorProfileAboutHeader">
          <h2>About Me</h2>
          <button className="MentorProfileEditButton">
            <img src={EditPenIcon} alt="edit" width={14} height={14} />
            Edit Profile
          </button>
        </div>

        <p>
          I am a passionate engineering leader with over 12 years of
          experience in the tech industry. Having navigated both the
          startup world and big tech, I specialize in helping aspiring
          engineers find their path through technical excellence and
          career strategy. My goal is to bridge the gap between academic
          learning and industry requirements.
        </p>
      </div>

      <div className="MentorProfileReviewsCard">
        <div className="MentorProfileReviewsHeader">
          <h2>Recent Reviews</h2>
          <a href="#">View All 124 Reviews</a>
        </div>

        {REVIEWS_DATA.map((item) => (
          <ReviewRow key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
