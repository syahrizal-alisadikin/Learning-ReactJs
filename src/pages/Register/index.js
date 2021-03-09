import React from "react";
import { BgRegister } from "../../assets";
import { Button, Gap, Input, Link } from "../../component";
import "./register.scss";
const Register = () => {
  return (
    <div className="main-page">
      <div className="kiri">
        <img src={BgRegister} className="bg-image" />
      </div>
      <div className="kanan">
        <p className="title">Registrasi</p>
        <Input label="Nama" placeholder="Masukan Nama" />
        <Gap height={16} />
        <Input label="Email" placeholder="Masukan Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Masukan Password" />
        <Gap height={26} />
        <Button title="Register" />
        <Gap height={26} />

        <Link title={"Back Login"} />
      </div>
    </div>
  );
};

export default Register;
