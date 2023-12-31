// import React from "react";
// import Profile from "./Profile";
// import axios from "axios";
// import { connect } from "react-redux";
// import { setUserProfile } from "../../redux/profileReducer";
// import { withRouter } from "react-router-dom";




// class ProfileContainer extends React.Component {

//     componentDidMount() {
//         let userId = this.props.match.params.userId
//         if (!userId) {
//             userId = 2
//         }
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             });
//     }

//     render() {
//         return (
//             <Profile {...this.props} profile={this.props.profile} />
//         )
//     }
// }

// let mapStateToProps = (state) => ({
//     profile: state.profilePage.profile
// })

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent)


import React, { useEffect } from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { useParams } from "react-router-dom"; 

const ProfileContainer = ({ setUserProfile }) => {
  const { userId } = useParams();

  useEffect(() => {
    let id = userId || 2;
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then(response => {
        setUserProfile(response.data);
      })
      .catch(error => {
        console.error("Error fetching profile:", error);
      });
  }, [userId, setUserProfile]);

  return <Profile />;
};

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
