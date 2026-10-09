import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, Save, LogOut, UserRound, Mail } from "lucide-react";
import toast from "react-hot-toast";
import { getCurrentUser, updateCurrentUser, signOut } from "@/services/auth";

export function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => getCurrentUser());
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");

  useEffect(() => {
    if (!user) navigate("/login", { replace: true });
  }, [user, navigate]);

  if (!user) return null;

  const saveProfile = (event) => {
    event.preventDefault();
    if (!name.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    const updated = updateCurrentUser({ name: name.trim(), avatar });
    setUser(updated);
    toast.success("Profile updated!");
  };

  const onAvatarChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error("Choose an image file.");
      return;
    }
    if (file.size > 1024 * 1024) {
      toast.error("Please choose an image smaller than 1 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setAvatar(String(reader.result || ""));
    reader.readAsDataURL(file);
  };

  const logout = () => {
    signOut();
    toast.success("Signed out.");
    navigate("/login", { replace: true });
  };

  return (
    <section className="profile-page">
      <div className="profile-page-heading">
        <span className="eyebrow">ACCOUNT SETTINGS</span>
        <h2>Your profile</h2>
        <p>Manage how your details appear in Outbox.</p>
      </div>
      <form className="profile-card" onSubmit={saveProfile}>
        <div className="profile-photo-row">
          <div className="profile-photo">
            {avatar ? <img src={avatar} alt="Profile avatar" /> : <span>{(name || user.email).slice(0, 1).toUpperCase()}</span>}
          </div>
          <div className="profile-photo-copy">
            <strong>Profile photo</strong>
            <p>JPG, PNG, or WebP. Maximum 1 MB.</p>
            <label className="profile-upload">
              <Camera size={15} /> Choose photo
              <input type="file" accept="image/*" onChange={onAvatarChange} />
            </label>
            {avatar && <button type="button" className="profile-remove-photo" onClick={() => setAvatar("")}>Remove photo</button>}
          </div>
        </div>
        <label className="profile-field-label" htmlFor="profile-name">Full name</label>
        <div className="profile-field"><UserRound size={17} /><input id="profile-name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={80} /></div>
        <label className="profile-field-label" htmlFor="profile-email">Email address</label>
        <div className="profile-field"><Mail size={17} /><input id="profile-email" value={user.email} readOnly /><span className="profile-readonly">Read only</span></div>
        <div className="profile-actions">
          <button className="profile-save" type="submit"><Save size={16} /> Save changes</button>
          <button className="profile-logout" type="button" onClick={logout}><LogOut size={16} /> Sign out</button>
        </div>
      </form>
      <p className="profile-demo-note">This portfolio demo stores profile details in this browser only. Use a secure backend before storing real accounts.</p>
    </section>
  );
}
