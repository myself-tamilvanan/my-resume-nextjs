import Image, { StaticImageData } from "next/image";
import assets from "@/assets";
import style from "./page.module.sass";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const PageResume = () => {
  const renderSocialMedia = (item: PropsIconContent) => (
    <SocialMediaIcon {...item} key={item.link} />
  );

  const renderContact = (item: PropsIconContent) => (
    <Contact {...item} key={item.link} />
  );

  const renderAchievement = (text: string, index: number) => (
    <p key={index}>
      {index + 1}. {text}
    </p>
  );

  const renderProject = ({ icon, label, link }: PropsIconContent) => (
    <Link key={label} href={link} className={style.list_project}>
      <Image src={icon} alt={label} width={24} height={24} />
      <h4>{label}</h4>
    </Link>
  );

  const renderExperienceFramework = (
    { icon, projects, rating, skills, title }: PropsExperienceFramework,
    index: number
  ) => (
    <li
      className={`flex-col ${style.project_experience}`}
      key={title.concat(index.toString())}
    >
      <section className={`flex-sb-center ${style.top_wrapper}`}>
        <section className={`flex ${style.framework}`}>
          <Image src={icon} alt={title} width={40} height={40} />
          <h3>{title}</h3>
        </section>
        <Rating
          value={rating}
          itemStyles={{
            itemShapes: RoundedStar,
            activeFillColor: "#f59e0b",
            inactiveFillColor: "#ffedd5",
            itemStrokeWidth: 1,
          }}
          className={style.rating}
          readOnly
        />
      </section>
      {/* <h4 className={style.sub_title}>Skills: </h4> */}
      <p className={style.skill}>{skills.join("  ●  ")}</p>
      <h4 className={style.sub_title}>Projects: </h4>
      <ul className={`flex ${style.container_project}`}>
        {projects.map(renderProject)}
      </ul>
    </li>
  );

  const renderExperience = ({
    icon,
    organization,
    period,
    position,
  }: PropsExperience) => (
    <li className={style.timeline_item} key={period}>
      <section className={style.timeline_content}>
        <section className={`flex ${style.timeline_org}`}>
          <Image src={icon} alt={organization} width={24} height={24} />
          <p>{organization}</p>
        </section>
        <h5 className={style.timeline_position}>{position}</h5>
      </section>
      <p className={style.timeline_period}>{period}</p>
    </li>
  );

  const renderIcon = ({ icon, label }: PropsIcon) => (
    <Image src={icon} alt={label} key={label} width={40} height={40} />
  );

  const renderIconLabel = ({ icon, label }: PropsIcon) => (
    <li key={label} className={`flex-center ${style.list_icon}`}>
      <Image src={icon} alt={label} width={48} height={48} />
      <h4>{label}</h4>
    </li>
  );

  return (
    <section className={`${style.page_container}`}>
      <section className={`flex-sb-center ${style.header_wrapper}`}>
        <section>
          <h1>Tamilvanan Rasappan</h1>
          <h4>
            Web App PWA Developer | NodeJS Backend Developer | Flutter | Android
            | React Native
          </h4>
          <ul className={`flex-col ${style.contact_wrapper}`}>
            {ARR_SOCIAL_MEDIA.slice(0, 2).map(renderContact)}
          </ul>
        </section>
        <section className="flex-col-center">
          <Image
            src={assets.img_profile}
            alt="Tamilvanan Rasappan"
            width={100}
            height={100}
            style={{ borderRadius: "8px", objectFit: "fill" }}
          />
          <ul className={`flex ${style.social_media}`}>
            {ARR_SOCIAL_MEDIA.map(renderSocialMedia)}
          </ul>
        </section>
      </section>
      <section className={style.main_container}>
        <section className={style.left_container}>
          <Subtitle title="Profile Summary">
            <p>
              Versatile software developer with 5+ years of experience, skilled
              in delivering innovative solutions. Passionate about tackling
              cutting-edge frameworks like Django, Flutter, Angular, and the
              Python ecosystem. Eager to expand into AR/VR development while
              refining current expertise.
            </p>
          </Subtitle>
          <Subtitle title="Key Achievements">
            {ARR_KEY_ACHIEVEMENTS.map(renderAchievement)}
          </Subtitle>
          <Subtitle title="Projects">
            <ul className={`flex-col ${style.container_project}`}>
              {ARR_EXPERIENCE_FRAMEWORK.map(renderExperienceFramework)}
            </ul>
          </Subtitle>
        </section>
        <section className={style.right_container}>
          <Subtitle title="Project Experience">
            <div className={style.timeline_wrapper}>
              <ol className={style.timeline}>
                {ARR_EXPERIENCE.map(renderExperience)}
              </ol>
            </div>
          </Subtitle>
          <section className={style.skill_container}>
            <Subtitle title="Frameworks">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_FRAMEWORK.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="Languages">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_LANGUAGES.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="Code Architecture">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_CODE_ARCHITECTURE.map(renderIconLabel)}
              </ul>
            </Subtitle>
            <Subtitle title="Application Hosting">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_HOSTING.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="Database">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_DATABASE.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="Technical Skill">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_TECHNICAL_SKILL.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="Agile">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_AGILE.map(renderIcon)}
              </ul>
            </Subtitle>
            <Subtitle title="IDE">
              <ul className={`flex ${style.icon_wrapper}`}>
                {ARR_IDE.map(renderIcon)}
              </ul>
            </Subtitle>
          </section>
        </section>
      </section>
    </section>
  );
};

export default PageResume;

const SocialMediaIcon = ({ icon, label, link }: PropsIconContent) => (
  <Link href={link} className={`flex ${style.social_media}`}>
    <Image alt={label} src={icon} width={24} height={24} />
  </Link>
);

const Contact = ({ label, link }: PropsIconContent) => (
  <Link href={link}>{label}</Link>
);

const Subtitle = ({ title, children }: PropsSubtitle) => (
  <section className={`flex-col ${style.subtitle_wrapper}`}>
    <h3>{title}</h3>
    {children}
  </section>
);

const ARR_SOCIAL_MEDIA: PropsIconContent[] = [
  {
    icon: assets.img_phone,
    label: "+91 975-111-8092",
    link: "tel:+91 975-111-8092",
  },
  {
    icon: assets.img_email,
    label: "contact.tamizhvanan@gmail.com",
    link: "mailto:contact.tamizhvanan@gmail.com",
  },
  {
    icon: assets.img_linkedin,
    label: "tamilvanan-rasappan",
    link: "https://www.linkedin.com/in/tamilvanan-rasappan/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BR0809H5ITmmbd7%2FScP%2Bq6w%3D%3D",
  },
  {
    icon: assets.img_github,
    label: "myself-tamilvanan",
    link: "https://github.com/myself-tamilvanan",
  },
];

const ARR_KEY_ACHIEVEMENTS = [
  "'Go-to person' for organizational initiatives and complex problem-solving.",
  "Progressed from trainee to 'senior developer', driving client solutioning.",
  "Acted as a 'mentor and leader', empowering team growth at every stage.",
  "Improved development speed and quality with 'efficient code architecture' and reusable components.",
  "Delivered '20+ projects', with 15+ successfully going live.",
  "Awarded 'Beyond Call Duty' as the best employee in 2022 for outstanding contributions.",
];

const ARR_EXPERIENCE_FRAMEWORK: PropsExperienceFramework[] = [
  {
    title: "NextJS",
    icon: assets.img_framework_nextjs,
    rating: 4,
    projects: [
      {
        label: "Fanam Pay",
        link: "https://staging.fanam-pay.fanamdigital.com/",
        icon: assets.img_logo_fanam,
      },
      {
        label: "QMIN Cafe Dashboard - POS",
        link: "https://dashboard-sit.qmin.co.in/login",
        icon: assets.img_logo_qmin_cafe,
      },
      {
        label: "Wedding and Beyond",
        link: "https://weddingnbeyond.com/",
        icon: assets.img_logo_wnb,
      },
      {
        label: "Canny Caterers",
        link: "https://cater-app.vercel.app/",
        icon: assets.img_logo_catering,
      },
      {
        label: "Adyar Anandha Bhavan",
        link: "https://weborder.aabsweets.com/order",
        icon: assets.img_logo_aab,
      },
      {
        label: "Homefy - Community App",
        link: "https://homefy.co.in",
        icon: assets.img_logo_homefy,
      },
      {
        label: "Satisfi Chatbot",
        link: "https://satisfi-payment.satisfi6.com/payment",
        icon: assets.img_logo_satisfi,
      },
    ],
    skills: [
      "Mono Repo",
      "Micro Frontend",
      "NPM Packages",
      "PWA",
      "Private VM",
      "Vercel",
      "AWS - EC2",
      "Ubuntu",
      "Apache",
      "Caddy",
      "Nginx",
      "MVC",
      "Atomic",
      "Sass",
      "GraphQL",
      "Firebase",
      "NextJS Components",
      "Typescript",
      "SSR",
      "ISR",
      "SSG",
      "CSR",
      "REST API",
    ],
    roles: ["Team Lead", "Effort Estimation", "Code Setup", "Deployment Setup"],
  },
  {
    title: "Nest JS",
    icon: assets.img_framework_nestjs,
    rating: 3.5,
    projects: [
      {
        label: "Canny Caterers",
        link: "https://api-dev.platform.cannydigit.com/api/v1",
        icon: assets.img_logo_catering,
      },
      {
        label: "Fanam Pay",
        link: "https://staging.fanam-pay.fanamdigital.com/api",
        icon: assets.img_logo_fanam,
      },
    ],
    skills: [
      "Micro service",
      "Nx Tool",
      "Azure storage",
      "Swagger",
      "Schema Preparation",
      "Prisma",
      "PostgreSQL",
    ],
    roles: ["Team Lead", "Effort Estimation"],
  },
  {
    title: "ReactJS",
    icon: assets.img_framework_react_js,
    rating: 4.5,
    projects: [
      {
        label: "QMIN",
        link: "https://sit.qmin.co.in",
        icon: assets.img_logo_qmin,
      },
      {
        label: "Stuant - Adminy",
        link: "https://student-admin-gamma.vercel.app/",
        icon: assets.img_logo_stuant,
      },
    ],
    skills: ["PWA", "Sanity", "Javascript", "React Query"],
    roles: ["Team Lead", "Team player"],
  },
  {
    title: "Android",
    icon: assets.img_framework_android,
    rating: 3.5,
    projects: [
      {
        label: "STUANT - Platform",
        link: "https://play.google.com/store/apps/details?id=com.cannydigit.stuant",
        icon: assets.img_logo_stuant,
      },
      {
        label: "Religen",
        link: "https://play.google.com/store/apps/details?id=com.cannydigit.religenapp",
        icon: assets.img_logo_religen,
      },
      {
        label: "Religen - Church",
        link: "https://play.google.com/store/apps/details?id=com.cannydigit.ccc",
        icon: assets.img_logo_church,
      },
    ],
    skills: ["Styled components", "Javascript", "Expo", "React Native CLI"],
    roles: ["Team Player"],
  },
  {
    title: "React Native",
    icon: assets.img_framework_react_native,
    rating: 3,
    projects: [
      {
        label: "Canny Apartment App",
        link: "",
        icon: assets.img_logo_homefy,
      },
      {
        label: "Insurance App",
        link: "https://homefy.co.in",
        icon: assets.img_logo_homefy,
      },
    ],
    skills: ["Styled components", "Javascript", "Expo", "React Native CLI"],
    roles: ["Team Player"],
  },
];

const ARR_EXPERIENCE: PropsExperience[] = [
  {
    icon: assets.img_org_canny,
    position: "Senior Developer",
    organization: "Canny Digital Solutions",
    period: "Sep 2019 - Present",
  },
  {
    icon: assets.img_org_canny,
    position: "Trainee",
    organization: "Canny Digital Solutions",
    period: "May 2019 - Sep 2019",
  },
  {
    icon: assets.img_org_seoyone,
    position: "Graduate Associate Trainee",
    organization: "Seoyon E-HWA",
    period: "Dec 2017 - May 2019",
  },
  {
    icon: assets.img_org_rane,
    position: "Graduate Engineering Trainee",
    organization: "Rane TRW",
    period: "Nov 2016 - Oct 2017",
  },
  {
    icon: assets.img_org_ramanujan_it_park,
    position: "Maintenance",
    organization: "AB Solutions",
    period: "Aug 2016 - Oct 2016",
  },
];

const ARR_AGILE: PropsIcon[] = [
  { icon: assets.img_agile_jira, label: "Jira" },
  { icon: assets.img_agile_github, label: "Github" },
  { icon: assets.img_agile_bitbucket, label: "Bitbucket" },
  { icon: assets.img_agile_gitlab, label: "Gitlab" },
];

const ARR_CODE_ARCHITECTURE: PropsIcon[] = [
  {
    icon: assets.img_architecture_microservices,
    label: "Microservices",
  },
  { icon: assets.img_architecture_mono_repo, label: "Mono Repo" },
  { icon: assets.img_architecture_mvc, label: "Mvc" },
  { icon: assets.img_architecture_atomic, label: "Atomic" },
  { icon: assets.img_architecture_nx_tool, label: "Nx tool" },
  { icon: assets.img_architecture_turbo, label: "Turbo" },
];

const ARR_DATABASE: PropsIcon[] = [
  { icon: assets.img_db_mysql, label: "Mysql" },
  { icon: assets.img_db_postgreql, label: "Postgresql" },
  { icon: assets.img_db_prisma_orm, label: "Prisma orm" },
];

const ARR_FRAMEWORK: PropsIcon[] = [
  { icon: assets.img_framework_nextjs, label: "Nextjs" },
  { icon: assets.img_framework_react_js, label: "ReactJs" },
  { icon: assets.img_framework_nestjs, label: "Nestjs" },
  { icon: assets.img_framework_android, label: "Android" },
  { icon: assets.img_framework_flutter, label: "Flutter" },
  { icon: assets.img_framework_vuejs, label: "Vue js" },
  { icon: assets.img_framework_django, label: "Django" },
  { icon: assets.img_framework_react_native, label: "React Native" },
  { icon: assets.img_framework_expressjs, label: "Express js" },
];

const ARR_HOSTING: PropsIcon[] = [
  { icon: assets.img_hosting_apache, label: "Apache" },
  { icon: assets.img_hosting_aws_ec2, label: "Aws EC2" },
  { icon: assets.img_hosting_caddy, label: "Caddy" },
  { icon: assets.img_hosting_docker, label: "Docker" },
  { icon: assets.img_hosting_firebase, label: "Firebase" },
  { icon: assets.img_hosting_nginx, label: "Nginx" },
  { icon: assets.img_hosting_playstore, label: "Play store" },
  { icon: assets.img_hosting_private_server, label: "Private server" },
  { icon: assets.img_hosting_vercel, label: "Vercel" },
];

const ARR_IDE: PropsIcon[] = [
  { icon: assets.img_ide_visual_studio_code, label: "Visual Studio Code" },
  { icon: assets.img_ide_pycharm, label: "Pycharm" },
  { icon: assets.img_ide_android_studio, label: "Android studio" },
  { icon: assets.img_ide_intellij, label: "Intellij" },
];

const ARR_LANGUAGES: PropsIcon[] = [
  { icon: assets.img_lang_typescript, label: "Typescript" },
  { icon: assets.img_lang_javascript, label: "Javascript" },
  { icon: assets.img_lang_kotlin, label: "Kotlin" },
  { icon: assets.img_lang_java, label: "Java" },
  { icon: assets.img_lang_dart, label: "Dart" },
  { icon: assets.img_lang_sass, label: "Sass" },
];

const ARR_TECHNICAL_SKILL: PropsIcon[] = [
  { icon: assets.img_tech_pwa, label: "Pwa" },
  { icon: assets.img_tech_firebase, label: "Firebase" },
  { icon: assets.img_tech_graph_ql, label: "Graphql" },
  { icon: assets.img_tech_react_query, label: "React query" },
  { icon: assets.img_tech_redux, label: "Redux" },
  { icon: assets.img_tech_rest_api, label: "Rest api" },
  { icon: assets.img_tech_swagger, label: "Swagger" },
];

interface PropsExperience {
  icon: StaticImageData;
  position: string;
  period: string;
  organization: string;
}

interface PropsIcon {
  icon: StaticImageData;
  label: string;
}

interface PropsIconContent {
  icon: StaticImageData;
  label: string;
  link: string;
}

interface PropsSubtitle extends PropsWithChildren {
  title: string;
}

interface PropsExperienceFramework {
  title: string;
  icon: StaticImageData;
  rating: number;
  projects: PropsIconContent[];
  skills: string[];
  roles: string[];
}
