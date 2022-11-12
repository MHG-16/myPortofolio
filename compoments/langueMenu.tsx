import { NextRouter, useRouter } from "next/router";
import { CookieSetOptions } from "universal-cookie";
import { useCookies } from "react-cookie";
import Select from 'react-select';

import {animatedComponents, customStyles, customtheme} from '../styles/react_select';
import styles from "../styles/langueMenu.module.css";


export default function LanguagesMenu() {
  const [, setCookies] = useCookies(["langState"])
  const router = useRouter();
  const options = [
    {value: "de", label: "Deutsch"},
    {value: "fr", label: "Français"},
    {value: "it", label: "Italiano"},
    {value: "ar", label: "العربية"}
  ]
  const stateSelected = null;
  return (
    <div className={styles.langueNavContainer}>
      <Select
        value={stateSelected}
        components={animatedComponents}
        placeholder="choose other language"
        options={options} 
        styles={customStyles}
        theme={customtheme}
        onChange={(e:any) => onClick(e.value,setCookies, router)}
      />
    </div>
  );
}

function onClick(lang: string, setCookies: (name: "langState", value: any, options?: CookieSetOptions | undefined) => void, router: NextRouter) {
    
    setCookies("langState", lang, {
        path: "/",
        maxAge: 7200, // Expires after 2hr
        sameSite: true,
    });
    router.reload()
}

