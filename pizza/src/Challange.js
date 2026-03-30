import "./styles.css";

const skillsInfo = [
  {
    skillName: "html",
    emoji: "💪 ",
    bgColor: "red",
  },

  {
    skillName: "css",
    emoji: "👶",
    bgColor: "green",
  },

  {
    skillName: "javascript",
    emoji: "🤙",
    bgColor: "blue",
  },

  {
    skillName: "github",
    emoji: "👶",
    bgColor: "purple",
  },
];

export default function Challange() {
  return (
    <div className="App">
      <Avatar />
      <Intro />
      <Skilllist />
    </div>
  );
}
function Avatar() {
  return <img width="30%" src="image.webp" />;
}
function Intro() {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis, iste
      nulla a quos voluptatem doloremque ad veritatis beatae qui non dolorum,
      consequatur laboriosam in explicabo unde obcaecati asperiores molestiae.
    </p>
  );
}
function Skilllist() {
  return (
    <div>
      <Skill skillName="JReact" bgColor="red" Emoji="💪" />
      <Skill skillName="python" bgColor="yellow" Emoji="💪" />
      <Skill skillName="HTML & CSS" bgColor="blue" Emoji="💪" />

      <Skill skillName="Javascript" bgColor="green" Emoji="🤙" />
    </div>
  );
}
function Skill(props) {
  return (
    <span style={{ backgroundColor: props.bgColor }}>
      <span>{props.skillName}</span>
      <span>{props.Emoji}</span>
    </span>
  );
}
