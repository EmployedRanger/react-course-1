const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

export function CourseGoal() {
  return (
    <li>
      <h2>TITLE</h2>
      <p>DESCRIPTION</p>
    </li>
  );
}

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
  <div id="app" data-testid="app">
    <h1>Time to Practice</h1>
    <p>One course, many goals! 🎯</p>
    <ul>
      {/* OUTPUT AT LEAST TWO CourseGoal components here */}
      {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
    </ul>
  </div>
}

export default App;
