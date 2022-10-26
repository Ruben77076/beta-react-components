import React, { useEffect, useState } from "react";
import * as friendsService from "../services/friendsService";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

//shared by Shangay
function Blah() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: 0,
    imageTypeId: 0,
    imageUrl: "",

    skills: [], // needs to be passed as an array of string, not array of objects
  });
  const mapSkills = (skills) => {
    return skills.skillName;
  };
  //console.log("form data", formData);
  //will grab the payload from the friend by id
  const location = useLocation();
  useEffect(() => {
    //if the value is not null, load the card data

    if (location.state !== null) {
      setFormData((prevState) => {
        const newFormData = {
          ...prevState.formData,
          title: location.state.title,
          bio: location.state.bio,
          summary: location.state.summary,
          headline: location.state.headline,
          slug: location.state.slug,
          statusId: location.state.statusId,
          imageTypeId: location.state.primaryImage.typeId,
          imageUrl: location.state.primaryImage.url,

          skills: location.state.skills.map(mapSkills),
        };

        return newFormData;
      });
    }
  }, []); //need the empty array or it will produce an infinite loop

  const onFormFieldChange = (event) => {
    //console.log("onChange", formData);

    const target = event.target;

    const value = target.value;

    const name = target.name;

    setFormData((prevState) => {
      const newUserObject = {
        ...prevState,
      };

      //change the value of the copied object using the name and using bracket notation
      newUserObject[name] = value;
      //console.log(newUserObject);

      //in functional components the name of this object/variable does not matter
      return newUserObject;
    });
  };
  //console.log("formdata after", formData.skills);
  const onSubmitClicked = (e) => {
    e.preventDefault();
    console.log("update clicked", location.state);
    //checks that the formdata is empty for adding a friend and doesn't fire if the form has a friend info. So it fires only when
    //the form is being used for adding a new friend
    if (formData !== null && location.state === null) {
      formData.skills = formData.skills.split(",");
    }
    //if the state is not null, update the card
    if (location.state !== null) {
      const id = location.state.id; // needs to be added to payload
      console.log(id);
      formData.id = id;
      friendsService
        .updateById(id, formData)
        .then(onUpdateSuccess)
        .catch(onUpdateError);
    } else {
      friendsService.addFriend(formData).then(onAddSuccess).catch(onAddError);
    }
  };

  const onAddSuccess = (response) => {
    console.log(response);
    toast.success("Friend added successfully");
  };
  const onAddError = (error) => {
    console.log(error);
    toast.error("Friend could not be added. Please try again");
  };

  const onUpdateSuccess = (response) => {
    console.log(response);
    toast.success("Friend updated successfully");
    navigate("/friends");
  };
  const onUpdateError = (error) => {
    console.log(error);
    toast.error("Friend could not be updated. Check all fields and try again");
  };
  return (
    <React.Fragment>
      <h1>Friend Info</h1>

      <div className="container student">
        <div className="row" id="friendForm">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <h1>Add or Edit Friend</h1>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="enter title"
                    value={formData.title}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Bio</label>
                  <input
                    type="text"
                    name="bio"
                    className="form-control"
                    placeholder="Write interesting facts about your friend"
                    value={formData.bio}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Summary</label>
                  <input
                    type="text"
                    name="summary"
                    className="form-control"
                    placeholder="Write a short description about your friend"
                    value={formData.summary}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Headline</label>
                  <input
                    name="headline"
                    type="text"
                    className="form-control"
                    aria-describedby="passwordHelpBlock"
                    placeholder="Write a quality that stands out"
                    value={formData.headline}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Slug</label>
                  <input
                    name="slug"
                    type="text"
                    className="form-control"
                    placeholder="Create a URl"
                    value={formData.slug}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <input
                    type="text"
                    name="statusId"
                    className="form-control"
                    placeholder="Friend Status"
                    value={formData.statusId}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Primary Image Id</label>
                  <input
                    type="text"
                    name="imageTypeId"
                    className="form-control"
                    placeholder="Picture Id"
                    value={formData.imageTypeId}
                    onChange={onFormFieldChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Primary Image Url</label>
                  <input
                    type="text"
                    name="imageUrl"
                    className="form-control"
                    placeholder="Picture URL"
                    value={formData.imageUrl}
                    onChange={onFormFieldChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Skills</label>
                  <input
                    type="text"
                    name="skills"
                    className="form-control"
                    placeholder="Skills"
                    value={formData.skills}
                    onChange={onFormFieldChange}
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={onSubmitClicked}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Blah;