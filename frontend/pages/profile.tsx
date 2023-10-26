import Head from "next/head";
import styles from "../styles/profile.module.scss";
import UserForm from "@/src/components/profile/user";
import HeaderAuth from "@/src/components/common/headerAuth";
import { Button, Col, Container, Row } from "reactstrap";
import Footer from "@/src/components/common/footer";
import { useState } from "react";
import PasswordForm from "@/src/components/profile/password";

const UserInfo = function () {
  const [form, setForm] = useState("userForm");
  return (
    <>
      <Head>
        <title>Onebitflix - Meus Dados</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
      <div className={styles.header}> 
	      <HeaderAuth />
      </div>
          <Container className="py-5">
            <p className={styles.title}>Minha Conta</p>
            <Row className="pt-3 pb-5">
              <Col md={4} className={styles.btnColumn}>
              <Button
                outline
                className={styles.renderFormBtn}
                onClick={() => {
                  setForm("userForm");
                }}
                >
                  DADOS PESSOAIS
                </Button>
                <Button
                outline
                className={styles.renderFormBtn}
                onClick={() => {
                  setForm("passwordForm");
                }}
                >
                  SENHA
                </Button>
              </Col>
              <Col md>
               {form === "userForm" ? <UserForm /> : <PasswordForm />}
              </Col>
            </Row>
          </Container>
          <div className={styles.footer}>
            <Footer />
          </div>
      </main>
    </>
  );
};

export default UserInfo;