import React from "react";
import { BgLogin } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";
const Login = () => {
  return (
    <div className="main-page">
      <div className="kiri">
        <img src={BgLogin} className="bg-image" alt="register" />
      </div>
      <div className="kanan">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Masukan Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Masukan Password" />
        <Gap height={26} />
        <Button title="Login" />
        <Gap height={26} />

        <Link title={"Belum punya akun ? Register"} />
      </div>
    </div>
  );
};

export default Login;
