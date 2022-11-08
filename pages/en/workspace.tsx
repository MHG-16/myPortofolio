import Head from "next/head";
import { useState } from "react";

import useModal from "../../hooks/ModalHooks";
import styles from "../../styles/latin/workspace.module.css";
import Controlls from "../../compoments/controlls";
import CustomModal from "../../compoments/customModal";
import Header from "../../compoments/workshopheader";
import WorkspaceNav from "../../compoments/workspaceNav";

export default function WorkSpace() {
  const {isOpen, toggle} = useModal();
  const [images, setImages] = useState<any>();
  return (
    <>
      <Head>
        <title>Workspace</title>
        <link rel="icon" type="image/jpg" href="/logo.jpg" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <Header/>
        <div className={styles.workContainer}>
          <h3>My works</h3>
          <WorkspaceNav setImages={setImages} toggle={toggle}/>
        </div>
      </div>
      <Controlls prefix={"/en"} />
      {isOpen &&<CustomModal toggle={toggle} isOpen={isOpen} title={images.title} images={images.images}/>}
    </>
  );
}
