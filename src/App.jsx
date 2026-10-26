// function StudentCard(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Score: {props.score}</p>
//     </div>
//   );
// }

// function App() {
//   const students = [
//     { id: 1, name: "Ada", score: 85 },
//     { id: 2, name: "Ben", score: 45 },
//     { id: 3, name: "Chidi", score: 92 },
//   ];

//   return (
//     <div>
//       {students.map((student) => (
//         <StudentCard key={student.id} name={student.name} score={student.score} />
//       ))}
//     </div>
//   );
// }

// export default App;

// import Counter from './Counter';
// import NameInput from './NameGreeter';
// import ItemList from './ItemList';
// import UserList from './UserList';
// import RandomUser from './RandomUser';
// import Parent from './Parent';

// function App() {
//   return (
//     <div>
//       <Counter />
//       <NameInput />
//       <ItemList />
//       <UserList />
//       <RandomUser />
//       <Parent />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function ContactCard({ name, email }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
}
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactCard name="Fourlex" email="fourlex@example.com" />
    </div>
  );
}

function NotFound() {
  return <h1>Page not found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
