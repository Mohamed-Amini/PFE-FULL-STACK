// import React from 'react'
// import Settingssidebar from './Settingssidebar'
// import SettingsEdit from './SettingsEdit'
// export default function Settings() {
//   return (
//     <div className='w-full h-[90%] flex justify-between'>
//       <Settingssidebar></Settingssidebar>
//       <SettingsEdit></SettingsEdit>
//     </div>
//   )
// }

import React  from "react";

export default function (){
  return (
    <form name="user_profile" method="post" enctype="multipart/form-data">

<div class="vich-image"><input type="file" id="user_profile_UserPictureFile_file" name="user_profile[UserPictureFile][file]" required="required" /><div><label for="user_profile_UserPictureFile_delete">Delete?</label><input type="checkbox" id="user_profile_UserPictureFile_delete" name="user_profile[UserPictureFile][delete]" value="1" /></div><a href="/images/doctors/3048932-64aae6c13a588189554405.jpg" download>
                <img src="/images/doctors/3048932-64aae6c13a588189554405.jpg" alt="" />
            </a><a href="/images/doctors/3048932-64aae6c13a588189554405.jpg" download>
                Download
            </a></div>


<input type="text" id="user_profile_firstName" name="user_profile[firstName]" required="required" value="Mohamed" />


<input type="text" id="user_profile_lastName" name="user_profile[lastName]" required="required" value="test" />
  

<input type="email" id="user_profile_email" name="user_profile[email]" required="required" value="test047@gmail.com" />     

  
<input type="password" id="user_profile_plainPassword" name="user_profile[plainPassword]" />       
   
       
<input type="date" id="user_profile_DateofBirth" name="user_profile[DateofBirth]" required="required" value="1977-01-01" />       


<input type="text" id="user_profile_PhoneNumber" name="user_profile[PhoneNumber]" required="required" maxlength="20" value="0623426662" />


<button type="submit">Save</button>
</form>
  )
}