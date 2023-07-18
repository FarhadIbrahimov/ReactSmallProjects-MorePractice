import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  // Below line declares a constant array called skills that contains a list of strings. Each string represents a different skill.
  const skills = [
    "HTML+CSS",
    "JavaScript",
    "Web Design",
    "Git and GitHub",
    "React",
    "Svelte",
  ];
  return (
    <div className="card">
      <Avatar className="avatar" />
      <div className="data">
        <Intro />

        {/* Should contain one Skill component
          for each web dev skill that you have,
          customized with props */}
        <SkillList className="skill-list" skills={skills} />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/headshot1.jpeg" alt="photo image" />;
}
function Intro() {
  return (
    <div>
      <h1>Katerina Coi</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}

function SkillList(props) {
  return (
    //map() function explanation is at the bottom

    <div className="skill-list">
      <Skill skill="Html+CSS" emoji="💪" color="blue" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Web Design" emoji="💪" color="green" />
      <Skill skill="Git and GitHub" emoji="💪" color="purple" />
      <Skill skill="React" emoji="💪" color="red" />
      <Skill skill="Svelte" emoji="💪" color="darkOrange" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// another solution
// function App() {
// Below line declares a constant array called skills that contains a list of strings. Each string represents a different skill.
//   const skills = [
//     "HTML+CSS",
//     "JavaScript",
//     "Web Design",
//     "Git and GitHub",
//     "React",
//     "Svelte",
//   ];
//   return (
//     <div className="card">
//       <Avatar className="avatar" />
//       <div className="data">
//         <Intro />

//         {/* Should contain one Skill component
//           for each web dev skill that you have,
//           customized with props */}
//         <SkillList className="skill-list" skills={skills} />
//       </div>
//     </div>
//   );
// }
//function SkillList(props) {
//   return (
//     //map() function explanation is at the bottom

//     <div className="skill-list">
//       {props.skills.map((skill, index) => (
//         <div key={index}>{skill}</div>
//       ))}
//     </div>
//   );
// }

/*It applies a function to every element in the array, and produces a new array with the results. It's commonly used to transform an array of data into an array of React elements.
    
    .map((skill, index) => ( ... )): This is the map() function. It's being called on props.skills, so it will run once for each skill in the array. 
    function takes two arguments: the current element being processed (skill) and the index of that element (index).

<div key={index}>{skill}</div>: This is the function that map() applies to each skill in the array. It's a JSX expression that creates a new div for each skill. The key prop is a special string attribute you need to include when creating lists of elements in React. Here, we are using the index as a key, but when you're rendering a list based on data, it's better to use unique identifiers from your data if you have one.
    
    skills array is ["HTML+CSS", "JavaScript", "Web Design"], the map() function will create a new array that looks like this:
    [
  <div key={0}>HTML+CSS</div>,
  <div key={1}>JavaScript</div>,
  <div key={2}>Web Design</div>
]
This new array of React elements will then be rendered inside the .skill-list div.
*/
