import React from 'react'
import Navbar from '../../Components/Navbar';

export function Profile() {
  return (
    <div>
      <Navbar />
      <div class="py-5 bg-secondary">
        <div class="">
          <div class="w-50 mx-auto d-block">
            <img alt='img' src="https://www.medianic.co.uk/wp-content/uploads/2019/01/testimonial-profile-200x200.png" class="mx-auto d-block rounded-circle" />
          </div>
        </div>
      </div>

      <div class="container mt-5  ">
    <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-6">
            <label for="validationCustom01" class="form-label text-white">First name</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required/>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom02" class="form-label text-white">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" value="Mark" required/>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustomUsername" class="form-label text-white ">Username</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">@</span>
                <input type="text" class="form-control " id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <label for="validationCustom02" class="form-label text-white">Last name</label>
            <input type="password" class="form-control" id="validationCustom02" value="Mark" required/>
            <div class="valid-feedback">
                Looks good!
            </div>
        </div>

        <div class="col-12">
            <button class="btn btn-primary" onclick="CheckValid()" type="submit">Submit form</button>
        </div>
    </form>
</div>


    </div>
  );
}



export default Profile;