import React, { useContext } from "react";
import { FirebaseAuth } from "../../provider/AuthProvider";

function Profile(props) {
  const { signOut } = useContext(FirebaseAuth);
  return (
    <div>
      Your profile, login successful!!!!!!
      <button onClick={signOut}>Sign out </button>
    </div>
  );
}

export default Profile;
