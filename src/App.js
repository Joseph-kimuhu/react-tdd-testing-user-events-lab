import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInterestChange = (e) => {
    const { name, checked } = e.target;
    setInterests((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedInterests = Object.keys(interests).filter(
    (interest) => interests[interest]
  );

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <hr />

      <h2>Sign Up for My Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <fieldset>
          <legend>Select your interests:</legend>

          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleInterestChange}
            />
            Coding
          </label>

          <label>
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleInterestChange}
            />
            Design
          </label>

          <label>
            <input
              type="checkbox"
              name="marketing"
              checked={interests.marketing}
              onChange={handleInterestChange}
            />
            Marketing
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thanks for signing up, {name}!</h3>
          <p>We'll contact you at {email}.</p>
          {selectedInterests.length > 0 && (
            <ul>
              {selectedInterests.map((interest) => (
                <li key={interest}>{interest}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
