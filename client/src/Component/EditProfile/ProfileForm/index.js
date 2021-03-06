import React from "react";
import { Card, CardTitle, Form } from "reactstrap";

const ProfileForm = ({ profile, onChange, onSubmit }) => {
  return (
    <Card className="cardtext-white px-4">
      <CardTitle className="card-header py-3 mt-4 text-center">
        <h2>Edit Profile</h2>
      </CardTitle>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="row my-2">
            <div className="col-4 ">
              <div className="form-group">
                <label>UserName</label>
                <input
                  disabled
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="username..."
                  onChange={onChange}
                  value={(profile.user || { username: "" }).username || ""}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Name</label>
                <input
                  disabled
                  type="text"
                  name="name"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Name..."
                  value={(profile.user || { name: "" }).name || ""}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Gender</label>
                <select
                  //disabled
                  type="text"
                  name="gender"
                  onChange={onChange}
                  className="form-control"
                  placeholder="gender..."
                  value={profile.gender}
                >
                  <option value="male" key="1">
                    Male
                  </option>
                  <option value="female" key="2">
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row my-4">
            <div className="col-6">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  onChange={onChange}
                  className="form-control"
                  placeholder="company..."
                  value={profile.company}
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Designation..."
                  value={profile.designation}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group">
              <label>About me</label>
              <textarea
                cols="30"
                //   rows="4"
                onChange={onChange}
                className="form-control"
                placeholder="About me"
                value={profile.about}
                name="about"
                required
              ></textarea>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group">
              <label>Profile pic url</label>
              <input
                type="text"
                name="picture"
                onChange={onChange}
                value={profile.picture}
                className="form-control"
                placeholder="profile pic..."
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-4">
              <div className="form-group">
                <label>Facebook Url</label>
                <input
                  type="text"
                  name="facebook"
                  value={(profile.social || { facebook: "" }).facebook || ""}
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="Facebook Url"
                  //value={profile.social.facebook}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Twitter Url</label>
                <input
                  type="text"
                  name="twitter"
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="Twitter Url"
                  value={(profile.social || { twitter: "" }).twitter || ""}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>LinkedIn Url</label>
                <input
                  type="text"
                  name="linkedin"
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="LinkedIn Url"
                  value={(profile.social || { linkedin: "" }).linkedin || ""}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-outline-light w-25 my-3"
            value="Save"
          />
        </form>
      </div>
    </Card>
  );
};

ProfileForm.propTypes = {};

export default ProfileForm;
