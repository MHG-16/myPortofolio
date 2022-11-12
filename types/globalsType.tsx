export interface AuxProps {
  children: JSX.Element[] | JSX.Element;
}

export interface WordLanguage {
  home: {
    desc_myself: string;
    job: string;
    desc_detailed_part1: string;
    desc_detailed_part2: string;
    skills1: string;
    skills2: string;
    langueTitle: string;
    informatiqueTitle: string;
  };
  about: {
    EducationTitle: string;
    BachelorTitle: string;
    BachelorDate: string;
    LicenseTitle: string;
    LicenseDate: string;
    certificatesTitle: string;
  };
  workspace: {
    DynamicDesc: string;
    SpeedDesc: string;
    ResponsiveDesc: string;
    myWorksTitle: string;
  };
}
